// This file uses redux to create a store with the reducers
import { createStore } from "redux";
import reducer from './reducer';

export default createStore( reducer );
