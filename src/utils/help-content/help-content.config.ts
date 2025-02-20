export const help_content_types = {
    TEXT: 'text',
    VIDEO: 'video',
    IMAGE: 'image',
    BLOCK: 'block',
    EXAMPLE: 'example',
};

const { TEXT, IMAGE, BLOCK, EXAMPLE } = help_content_types;

export const help_content_config = (public_path: string) => {
    window.__webpack_public_path__ = public_path;
    return {
        //= ================= Functions ==================
        procedures_ifreturn: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'if-return' },
        ],
        //= ================= Math ==================
        math_arithmetic: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
        ],
        math_single: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
        ],
        math_constrain: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'constrain' },
        ],
        // math_number: [
        //     { type: VIDEO, url: 'https://www.youtube.com/embed/Bb0HnaYNUx4' },
        //     { type: TEXT },
        //     { type: IMAGE, url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false' },
        //     { type: VIDEO, url: 'https://www.youtube.com/embed/mi18spqE7R4?controls=0' },
        //     { type: BLOCK },
        //     { type: TEXT },
        //     { type: IMAGE, url: 'https://d2.alternativeto.net/dist/s/scratch_830736_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false' },
        // ],
        //= ================= Text ==================
        text_print: [{ type: TEXT }, { type: BLOCK }, { type: TEXT }],
        text_prompt_ext: [{ type: TEXT }, { type: BLOCK }, { type: TEXT }],
        //= ================= Tick analysis ==================
        tick_analysis: [{ type: TEXT }, { type: BLOCK }],
        read_details: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
        ],
        last_digit: [{ type: TEXT }, { type: BLOCK }],
        read_ohlc: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'in_candle_list_read' },
        ],
        read_ohlc_obj: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'read_candle_value' },
        ],
        check_direction: [{ type: TEXT }, { type: BLOCK }, { type: TEXT }, { type: TEXT }, { type: TEXT }],
        get_ohlc: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'get_candle' },
            { type: TEXT },
        ],
        ohlc: [{ type: TEXT }, { type: BLOCK }, { type: TEXT }, { type: EXAMPLE, example_id: 'candle_list_1' }],
        ohlc_values: [{ type: TEXT }, { type: BLOCK }, { type: TEXT }, { type: EXAMPLE, example_id: 'candle_list' }],
        is_candle_black: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${window.__webpack_public_path__}assets/media/is_candle_black.jpeg` },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${window.__webpack_public_path__}assets/media/is_candle_black_1.jpeg` },
            { type: TEXT },
        ],
        ohlc_values_in_list: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'candle_list_1' },
        ],
        //= ================= Variables ==================
        variables_gets: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
        ],
        variables_set: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${window.__webpack_public_path__}assets/media/create_variable.jpg` },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${window.__webpack_public_path__}assets/media/set_variable.png` },
        ],
        // =============== Time blocks ============
        epoch: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'epoch' },
        ],
        todatetime: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'todatetime' },
            { type: TEXT },
        ],
        totimestamp: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'totimestamp' },
            { type: TEXT },
        ],
        // =============== Notifications blocks ============
        notify_telegram: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'notify_telegram' },
        ],
        // =============== Misc blocks ============
        console: [{ type: TEXT }, { type: TEXT }, { type: TEXT }, { type: TEXT }, { type: TEXT }, { type: TEXT }],
        balance: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
        ],
        // =============== Indicators blocks ============
        sma_statement: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: IMAGE, width: '60%', url: `${window.__webpack_public_path__}assets/media/sma_formula.png` },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${window.__webpack_public_path__}assets/media/sma_chart_1.png` },
            { type: TEXT },
            { type: IMAGE, width: '100%', url: `${window.__webpack_public_path__}assets/media/sma_chart_2.png` },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'sma_block_example' },
            { type: TEXT },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'sma_block_example_1' },
            { type: TEXT },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'sma_array' },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            {
                type: IMAGE,
                width: '100%',
                url: `${window.__webpack_public_path__}assets/media/sma_array_explanation.jpeg`,
            },
        ],
        // =============== Root blocks ============
        trade_definition: [
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
            { type: BLOCK },
        ],
        trade_definition_tradeoptions: [{ type: TEXT }, { type: BLOCK }],
        trade_definition_multiplier: [{ type: TEXT }, { type: TEXT }, { type: TEXT }, { type: TEXT }],
        before_purchase: [{ type: TEXT }, { type: BLOCK }, { type: TEXT }],
        during_purchase: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'sell_available' },
        ],
        sell_at_market: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'sell_available' },
        ],
        after_purchase: [{ type: TEXT }, { type: BLOCK }, { type: TEXT }],
        trade_again: [{ type: TEXT }, { type: BLOCK }, { type: TEXT }, { type: EXAMPLE, example_id: 'trade_again' }],
        // =============== Contract ============
        contract_check_result: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'check_result' },
        ],
        sell_price: [{ type: TEXT }, { type: BLOCK }, { type: TEXT }, { type: EXAMPLE, example_id: 'sell_pl' }],
        // =============== Logic ============
        controls_if: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'controls_if' },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'compare_logic' },
            { type: EXAMPLE, example_id: 'compare_logic_1' },
        ],
        logic_operation: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: IMAGE, width: '40%', url: `${window.__webpack_public_path__}assets/media/logic.png` },
        ],
        // =============== Loops ============
        controls_whileUntil: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'repeat_while' },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'repeat_until' },
        ],
        controls_for: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'controls_for' },
            { type: TEXT },
            { type: TEXT },
        ],
        controls_forEach: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'controls_forEach' },
            { type: TEXT },
            { type: TEXT },
            { type: TEXT },
        ],
        controls_flow_statements: [
            { type: TEXT },
            { type: BLOCK },
            { type: TEXT },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'break_out' },
            { type: TEXT },
            { type: EXAMPLE, example_id: 'continue' },
        ],
    };
};
