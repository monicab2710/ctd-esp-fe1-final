import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { charactersSelection } from "../Selection/Selection";



const rootReducer = combineReducers({
    characters: charactersSelection.reducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });
  
  export default store;
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;