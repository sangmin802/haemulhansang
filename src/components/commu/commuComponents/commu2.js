import React from 'react';
import { Route } from 'react-router-dom';

import '../../../css/commu2.css';
import NewsInform from './newsInform.js';
import NewsWrap from './newsWrap.js';

class Commu2 extends React.Component {
  state = {
    isLoading : true,
    data : []
  }
  render(){
    const { isLoading, data } = this.state;
    
    if(isLoading){
      return(
        <div>Loading...</div>
      )
    }
    data.sort((a, b) => {
      return b.id - a.id;
    })
    return(
      <div className="commu2Content">
        <div className="titleImg">
          <img src="/img/commu/commu2/news_tit.png" alt="언론보도" />
        </div>
        <Route exact path="/community/commu2" render = {(props) => (<NewsWrap {...props} data = {data} />)} />
        <Route path="/community/commu2/:id"  render = {(props) => (<NewsInform {...props} data = {data} />)} />
      </div>
    );
  };

  newsLoad = async () => {
    await fetch('/json/news.json').then(response => response.json()).then(data => {
      this.setState({isLoading : false, data : data});
    })
  };

  componentDidMount = () => {
    this.newsLoad();
  };
};

export default Commu2;