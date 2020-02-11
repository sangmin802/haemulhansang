import { connect } from 'react-redux';

import App from './components/App.js';
import Main from './components/main.js';

import About from './components/about/about.js';
import Intro from './components/about/intro.js';
import Comp from './components/about/comp.js';

export default {
  App : connect((state) => {
    return {
      isIndex : state.isIndex,
      selectedPage : state.selectedPage,
      selectedSubPage : state.selectedSubPage
    };
  }, (dispatch) => {
    return {
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
  About : connect()(About),
  Intro : connect()(Intro),
  Comp : connect()(Comp),
};