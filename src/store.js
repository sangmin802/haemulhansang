import { createStore } from 'redux';

export default createStore((state, action) => {
  if(state === undefined){
    if(JSON.parse(sessionStorage.getItem('state')) === null){
      const state = {
        isIndex : true,
        selectedPage : null,
        selectedSubPage : 1,
      };
      sessionStorage.setItem('state', JSON.stringify(state));
      return state;
    }else{
      return JSON.parse(sessionStorage.getItem('state'))
    }
  }else{
    const newState = { ...state };
    if(action.type === 'goPage'){
      newState.isIndex = false;
      newState.selectedPage = Number(action.selectedPage);
    }else if(action.type === 'goIndex'){
      newState.isIndex = true;
      newState.selectedPage = null;
      newState.selectedSubPage = 1;
    }else if(action.type === 'pageSelect'){
      newState.selectedPage = Number(action.pageIndex);
    }else if(action.type === 'subPageSelect'){
      newState.selectedSubPage = Number(action.subPageIndex);
    }
    sessionStorage.setItem('state', JSON.stringify(newState));
    return newState;
  }
});