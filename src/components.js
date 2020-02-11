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
      selectedPage : state.selectedPage
    };
  }, (dispatch) => {
    return {
      indexChange : (bool) => {
        dispatch({type : 'goPage', isIndex : bool});
      },
      pageSelect : (index) => {
        dispatch({type : 'pageSelect', pageIndex : index});
      }
    }
  })(App),
  Main : connect()(Main),

  // About
  About : connect()(About),
  Intro : connect()(Intro),
  Comp : connect()(Comp),
};