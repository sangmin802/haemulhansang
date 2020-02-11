import { createStore } from 'redux';

export default createStore((state, action) => {
  if(state === undefined){
    if(JSON.parse(sessionStorage.getItem('state')) === null){
      const state = {
        isIndex : true,
        selectedPage : null,
      };
      sessionStorage.setItem('state', JSON.stringify(state));
      return state;
    }else{
      return JSON.parse(sessionStorage.getItem('state'))
    }
  }else{
    const newState = { ...state };
    if(action.type === 'goPage'){
      newState.isIndex = action.isIndex;
    }else if(action.type === 'pageSelect'){
      newState.selectedPage = Number(action.pageIndex);
    }
    sessionStorage.setItem('state', JSON.stringify(newState));
    return newState;
  }
});