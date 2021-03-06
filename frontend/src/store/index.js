import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import goalsReducer from './goals';
import postsReducer from './posts';
import rosterReducer from './roster';
import session from './session';
import surveyReducer from './survey';
import teamReducer from './team';

const rootReducer = combineReducers({
  session,
  team: teamReducer, 
  roster: rosterReducer,
  survey: surveyReducer,
  goals: goalsReducer,
  posts: postsReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
