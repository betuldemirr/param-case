"use client"; // This is a client component 👈🏽

import { combineReducers } from 'redux';
import userReducer from '../features/userSlice';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;