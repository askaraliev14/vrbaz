import React, { createContext, useContext, useMemo, useReducer } from "react"; // import { ContextDevTool } from "react-context-devtool";

import { initialState, rootReducer } from "../../reducers/rootReducer";
const AppContext = createContext({
  state: initialState,
  dispatch: () => {}
});
export const AppProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const contextValue = useMemo(() => {
    return {
      state,
      dispatch
    };
  }, [state, dispatch]);
  return <AppContext.Provider value={contextValue}>
      {
      /* <ContextDevTool context={AppContext} id="app-context" displayName="App" /> */
    }
      {children}
    </AppContext.Provider>;
};
export const useAppContext = () => useContext(AppContext);
export default AppContext;