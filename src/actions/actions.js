const ACTIONS_WEATHER={
    CELSIUS_GRADES: 'Celsius Grades',
    FARENHEIT_GRADES: 'Farenheit Grades'
};

export default ACTIONS_WEATHER;

//Acciones:

export const actionCelsius=()=>({
    type: ACTIONS_WEATHER.CELSIUS_GRADES,
});

export const actionFarenheit=()=>({
    type: ACTIONS_WEATHER.FARENHEIT_GRADES
});

