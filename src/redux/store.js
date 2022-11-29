
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from "redux";
import todoReducer from "./todoReducer";

const composeEnhancers = composeWithDevTools();
const store = createStore(todoReducer, composeEnhancers)
export default store