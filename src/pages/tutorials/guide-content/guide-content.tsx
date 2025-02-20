import React from 'react';
import classNames from 'classnames';
import Dialog from '@/components/shared_ui/dialog';
import Text from '@/components/shared_ui/text';
import { DBOT_TABS } from '@/constants/bot-contents';
import { useStore } from '@/hooks/useStore';
import { removeKeyValue } from '@/utils/settings';
import { LegacyPlay1pxIcon } from '@deriv/quill-icons/Legacy';
import { Localize, localize } from '@deriv-com/translations';
import { useDevice } from '@deriv-com/ui';

type TGuideList = {
    content?: string;
    id: number;
    src?: string;
    subtype?: string;
    type: string;
    url?: string;
    imageclass?: string;
};

type TGuideContent = {
    guide_tab_content: TGuideList[];
    video_tab_content: TGuideList[];
    is_dialog_open: boolean;
};

const GuideContent = ({ guide_tab_content, video_tab_content, is_dialog_open }: TGuideContent) => {
    const { isDesktop } = useDevice();
    const { dashboard } = useStore();
    const {
        dialog_options,
        onCloseDialog: onOkButtonClick,
        setActiveTab,
        setTourDialogVisibility,
        showVideoDialog,
        setActiveTour,
        setShowMobileTourDialog,
    } = dashboard;

    const triggerTour = (type: string) => {
        if (type === 'OnBoard') {
            removeKeyValue('onboard_tour_token');
            setActiveTab(DBOT_TABS.DASHBOARD);
            if (!isDesktop) setActiveTour('onboarding');
            setTourDialogVisibility(true);
        } else {
            setActiveTab(DBOT_TABS.BOT_BUILDER);
            if (!isDesktop) setActiveTour('bot_builder');
            setTourDialogVisibility(true);
            if (!isDesktop) setShowMobileTourDialog(true);
        }
    };

    const handleKeyboardEvent = (e: KeyboardEvent) => {
        if (e.key === 'Enter') triggerTour('OnBoard');
    };

    const has_guide_content = guide_tab_content.length > 0 || video_tab_content.length > 0;

    return React.useMemo(
        () =>
            has_guide_content && (
                <div className='tutorials-wrap'>
                    {guide_tab_content && guide_tab_content.length > 0 && (
                        <div className='tutorials-wrap__group'>
                            <div className='tutorials-wrap__group__title'>
                                <Text
                                    align='left'
                                    weight='bold'
                                    color='prominent'
                                    lineHeight='s'
                                    size={isDesktop ? 's' : 'xs'}
                                >
                                    <Localize i18n_default_text='Step-by-step guides' />
                                </Text>
                            </div>
                            <div className='tutorials-wrap__group__guides'>
                                {guide_tab_content?.map(({ id, content, src, subtype }) => {
                                    return (
                                        <div className='tutorials-wrap__group__cards' key={id}>
                                            <div
                                                className='tutorials-wrap--tour'
                                                onClick={() => triggerTour(subtype)}
                                                onKeyDown={handleKeyboardEvent}
                                            >
                                                <div
                                                    className={classNames('tutorials-wrap__placeholder__tours', {
                                                        'tutorials-wrap__placeholder--disabled': !src,
                                                    })}
                                                    style={{
                                                        backgroundImage: `url(${src})`,
                                                    }}
                                                />
                                            </div>
                                            <Text
                                                align='center'
                                                color='prominent'
                                                lineHeight='s'
                                                size={isDesktop ? 's' : 'xs'}
                                            >
                                                {content}
                                            </Text>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {video_tab_content && video_tab_content.length > 0 && (
                        <div className='tutorials-wrap__group'>
                            <div className='tutorials-wrap__group__title'>
                                <Text
                                    align='left'
                                    weight='bold'
                                    color='prominent'
                                    lineHeight='s'
                                    size={isDesktop ? 's' : 'xs'}
                                >
                                    <Localize i18n_default_text='Videos on Deriv Bot' />
                                </Text>
                            </div>

                            <div className='tutorials-wrap__group__guides'>
                                {video_tab_content?.map(({ content, src, url, id }) => {
                                    return (
                                        <div className='tutorials-wrap__group__cards' key={id}>
                                            <div
                                                className={classNames('tutorials-wrap__placeholder', {
                                                    'tutorials-wrap__placeholder--disabled': !url,
                                                })}
                                                style={{
                                                    backgroundImage: `url(${src})`,
                                                }}
                                            >
                                                <div className='tutorials-wrap__placeholder__button-group'>
                                                    <LegacyPlay1pxIcon
                                                        className='tutorials-wrap__placeholder__button-group--play'
                                                        width='42px'
                                                        height='42px'
                                                        onClick={() =>
                                                            showVideoDialog({
                                                                type: 'url',
                                                                url,
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className='tutorials-wrap__placeholder__description'>
                                                <Text
                                                    align='left'
                                                    color='prominent'
                                                    lineHeight='s'
                                                    size={isDesktop ? 's' : 'xs'}
                                                >
                                                    {content}
                                                </Text>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    <Dialog
                        title={dialog_options.title}
                        is_visible={is_dialog_open}
                        cancel_button_text={localize('Cancel')}
                        onCancel={onOkButtonClick}
                        confirm_button_text={localize('OK')}
                        onConfirm={onOkButtonClick}
                        is_mobile_full_width
                        className={'dc-dialog'}
                        has_close_icon
                        onClose={onOkButtonClick}
                    >
                        <iframe width='100%' height='100%' src={dialog_options.url} frameBorder='0' allowFullScreen />
                    </Dialog>
                </div>
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [guide_tab_content, video_tab_content, is_dialog_open]
    );
};

export default GuideContent;
