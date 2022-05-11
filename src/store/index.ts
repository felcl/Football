import {createStore,compose,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer'; // 相当于仓库管理员
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(
    reducer,
    compose(applyMiddleware(...middlewares))
); // 创建仓库放入管理员
sagaMiddleware.run(rootSaga);
export default store;