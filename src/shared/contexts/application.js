import React, { createContext, useReducer } from 'react';

// constants for actions .
import AppStateActions from '../constants/app-state-actions';

export const ApplicationContext = createContext({});


export const initialAppState = {
  data: [],
};

// reducer function
export const appStateReducer = (state, action) => {
  switch (action.type) {
    case AppStateActions.ADD:
      return {
        ...state,
        menuMeta: { ...action.payload },
      };
    default:
      return state;
  }
};

// context provider
const ApplicationProvider = ({ children }) => {
  const [appState, appStateActionDispatch] = useReducer(appStateReducer, initialAppState);

  const value = {
    appState,
    appStateActionDispatch,
  };

  return <ApplicationContext.Provider value={value}>{children}</ApplicationContext.Provider>;
};

export default ApplicationProvider;
