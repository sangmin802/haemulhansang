import { connect } from 'react-redux';

import App from './components/App.js';
import Main from './components/main.js';

import About from './components/about/about.js';
import Menu from './components/menu/menu.js';
import Fran from './components/fran/fran.js';
import Store from './components/store/store.js';
import Commu from './components/commu/commu.js';

// component별 state, dispatch
export default {
  App : connect((state) => {
    return {
      isIndex : state.isIndex,
      isMobile : state.isMobile,
      isLoading : state.isLoading,
      selectedPage : state.selectedPage,
      selectedSubPage : state.selectedSubPage,
      routeList : state.routeList,
      subRouteList : state.subRouteList
    };
  }, (dispatch) => {
    return {
      mobile : () => {
        dispatch({type : 'mobile'})
      },
      pc : () => {
        dispatch({type : 'pc'})
      },
      loaded : (data) => {
        dispatch({type : 'loaded', data : data, isLoading : false});
      },
      goPage : (index, subindex) => {
        dispatch({type : 'goPage', selectedPage : index, selectedSubPage : subindex });
      },
      goIndex : () => {
        dispatch({type : 'goIndex'});
      },
      pageSelect : (index) => {
        dispatch({type : 'pageSelect', pageIndex : index});
      },
      subPageSelect : (subIndex) => {
        dispatch({type : 'subPageSelect', subPageIndex : subIndex});
      }
    }
  })(App),
  Main : connect((state) => {
    return {
      subRouteList : state.subRouteList,
    };
  }, (dispatch) => {
    return {
      goPage : (index, subindex) => {
        dispatch({type : 'goPage', selectedPage : index, selectedSubPage : subindex });
      },
      subPageSelect : (subIndex) => {
        dispatch({type : 'subPageSelect', subPageIndex : subIndex});
      }
    };
  })(Main),

  // About
  About : connect((state) => {
    return {
      selectedPage : state.selectedPage,
      selectedSubPage : state.selectedSubPage,
      routeList : state.routeList,
      subRouteList : state.subRouteList
    }
  })(About),

  // Fran
  Fran : connect((state) => {
    return {
      selectedPage : state.selectedPage,
      selectedSubPage : state.selectedSubPage,
      routeList : state.routeList,
      subRouteList : state.subRouteList      
    };
  })(Fran),

  // Menu
  Menu : connect((state) => {
    return {
      selectedPage : state.selectedPage,
      selectedSubPage : state.selectedSubPage,
      routeList : state.routeList,
      subRouteList : state.subRouteList
    }
  })(Menu),

  // Store
  Store : connect((state) => {
    return {
      selectedPage : state.selectedPage,
      selectedSubPage : state.selectedSubPage,
      routeList : state.routeList,
      subRouteList : state.subRouteList
    }
  })(Store),

  // Commu
  Commu : connect((state) => {
    return {
      selectedPage : state.selectedPage,
      selectedSubPage : state.selectedSubPage,
      routeList : state.routeList,
      subRouteList : state.subRouteList
    }
  })(Commu),
};