//Permite combinar los reducers
import { combineReducers } from 'redux';

import questionSelectReducer from './reducers/questionSelect.reducer';
import questionsReducer from './reducers/questions.reducer';
import scoreReducer from './reducers/score.reducer';
import userReducer from './reducers/user.reducer';
import answersReducer from './reducers/answers.reducer';

export const reducers={
    answersReducer,
    questionSelectReducer,
    questionsReducer,
    scoreReducer,
    userReducer,
};

export const rootReducers=combineReducers(reducers);