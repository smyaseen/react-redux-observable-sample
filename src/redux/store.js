import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import {pingpong} from './reducers';
import { pingEpic } from './epics';

const epicMiddleware = createEpicMiddleware();

export default createStore(
    pingpong,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(pingEpic);