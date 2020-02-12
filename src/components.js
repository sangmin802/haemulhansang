import { connect } from 'react-redux';

import App from './components/App.js';
import Main from './components/main.js';

import About from './components/about/about.js';


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
};