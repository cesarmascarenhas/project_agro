import { combineReducers } from 'redux';

import server from './server';
import customer from './customer';
import areas from './areas';

const appReducer = combineReducers({
  server,
  customer,
  areas
})

const rootReducer = (state, action) => {

    if (action.type === 'USER_LOGOUT') {
      state = undefined
    }
  
    return appReducer(state, action);
    
}

export default rootReducer;