import { connect } from 'react-redux';

import App from './components/App.js';
import Main from './components/main.js';

import About from './components/about/about.js';
import Menu from './components/menu/menu.js';
import Fran from './components/fran/fran.js';

export default {
  App : connect((state) => {
    return {
      isIndex : state.isIndex,
      isLoading : state.isLoading,
      selectedPage : state.selectedPage,
      selectedSubPage : state.selectedSubPage,
      routeList : state.routeList,
      subRouteList : state.subRouteList
    };
  }, (dispatch) => {
    return {
      loaded : (data) => {
        dispatch({type : 'loaded', data : data, isLoading : false});
      },
      goPage : (index) => {
        dispatch({type : 'goPage', selectedPage : index});
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
  Main : connect()(Main),

  // About
  About : connect((state) => {
    return {
      selectedPage : state.selectedPage,
      selectedSubPage : state.selectedSubPage,
      routeList : state.routeList,
      subRouteList : state.subRouteList
    }
  })(About),

  // Menu
  Menu : connect((state) => {
    return {
      selectedPage : state.selectedPage,
      selectedSubPage : state.selectedSubPage,
      routeList : state.routeList,
      subRouteList : state.subRouteList
    }
  })(Menu),

  // Fran
  Fran : connect((state) => {
    return {
      selectedPage : state.selectedPage,
      selectedSubPage : state.selectedSubPage,
      routeList : state.routeList,
      subRouteList : state.subRouteList      
    };
  })(Fran)
};