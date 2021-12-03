import {takeLatest,call,put} from 'redux-saga/effects'
import CategoryList from './../../services/categorylist'
import {getMainCategory} from './Action-landing';

function* fetchlist() {
 
    try{
   
        const category = yield call(CategoryList)                      
        yield put(getMainCategory(category));
    }
    catch(e){}
    
}

export function* ImageList(){ 
    yield takeLatest("GET_CATEGORY_REQUEST",fetchlist)
}
