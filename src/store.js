import { createStore } from 'redux';

export default createStore((state, action) => {
  if(state === undefined){
    if(JSON.parse(sessionStorage.getItem('state')) === null){
      const state = {
        isIndex : true,
        isMobile : false,
        isLoading : true,
        selectedPage : null,
        routeList : [],
        subRouteList : [],
        selectedSubPage : 1,
      };
      sessionStorage.setItem('state', JSON.stringify(state));
      return state;
    }else{
      return JSON.parse(sessionStorage.getItem('state'))
    }
  }else{
    const newState = { ...state };
    if(action.type === 'loaded'){
      newState.isLoading = false;
      newState.routeList = action.data.routeList;
      newState.subRouteList = action.data.subRouteList;
    }else if(action.type === 'goPage'){
      newState.isIndex = false;
      newState.selectedPage = Number(action.selectedPage);
      if(action.selectedSubPage !== null){
        newState.selectedSubPage = Number(action.selectedSubPage);
      }
    }else if(action.type === 'goIndex'){
      newState.isIndex = true;
      newState.selectedPage = null;
      newState.selectedSubPage = 1;
    }else if(action.type === 'pageSelect'){
      newState.selectedPage = Number(action.pageIndex);
    }else if(action.type === 'subPageSelect'){
      newState.selectedSubPage = Number(action.subPageIndex);
    }else if(action.type === 'mobile'){
      newState.isMobile = true;
    }else if(action.type === 'pc'){
      newState.isMobile = false;
    }
    sessionStorage.setItem('state', JSON.stringify(newState));
    return newState;
  }
});