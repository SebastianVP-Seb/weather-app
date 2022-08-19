import ACTIONS_WEATHER from "../actions/actions";

const reducer=(state, action)=>{

    switch (action.type) {
        case ACTIONS_WEATHER.CELSIUS_GRADES:
            return {
                ...state,
                ...state.map((item)=>item.max_temp+10)
            };
        case ACTIONS_WEATHER.FARENHEIT_GRADES:
            return {
                ...state,
                ...state.map((item)=>item.max_temp-10)
            };
    };
};

export default reducer;