import { combineReducers } from "redux";
import UserReducer from './pages/Registration/SignupReducer';
import LandingReducer from './pages/Landing/Reducer-landing';


export default combineReducers({
   // user: UserReducer,
    landingimg:LandingReducer

});