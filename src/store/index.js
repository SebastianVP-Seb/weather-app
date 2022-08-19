/*createStore: Ayuda a vincular los diferentes Reducers 
compose: ayuda a componer el elemento
applyMiddleware: para solicitures asíncronas. Ej Thunk
*/
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers } from './rootReducer';

const configureStore=()=>{
    //Potenciadores, para visualizar las herramientas de desarrollo de Redux
    const composeEnchancers=composeWithDevTools();
    return createStore(rootReducers, composeEnchancers);
};

const store=configureStore();
export default store;
/*El store se debe envolver en a App. Se usa el Provider (HOC) de react-redux.
El store se le pasa al provider  */