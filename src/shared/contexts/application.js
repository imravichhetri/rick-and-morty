import React, { createContext, useReducer } from 'react';

// constants for actions .
import AppStateActions from '../constants/app-state-actions';

export const ApplicationContext = createContext({});


export const initialAppState = {
  selectedCharacter: null,
};

// reducer function
export const appStateReducer = (state, action) => {
  console.log(action, state,'appStateReducer')
  switch (action.type) {
    case AppStateActions.SET_CHARACTER_DETAIL:
      return {
        ...state,
        selectedCharacter: { ...action?.payload??{}},
      };
    default:
      return state;
  }
};

// context provider
const ApplicationProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(appStateReducer, initialAppState);

  const value = {
    appState,
    dispatch,
  };

  return <ApplicationContext.Provider value={value}>{children}</ApplicationContext.Provider>;
};

export default ApplicationProvider;
