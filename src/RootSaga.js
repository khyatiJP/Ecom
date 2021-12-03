import {all} from 'redux-saga/effects'
import {ImageList} from './pages/Landing/Saga-landing'

export default function* rootSage(){

    yield all([ImageList()])
}