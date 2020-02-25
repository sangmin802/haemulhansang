import React from 'react';
import { Route } from 'react-router-dom';

import '../../../css/commu1.css';
import NoticeWrap from './noticeWrap.js';
import NoticeInform from './noticeInform.js';

class Commu1 extends React.Component {
  state = {
    isLoading : true,
    data : []
  }
  render(){
    const { isLoading, data } = this.state
    if(isLoading){
      return(
        <div>Loading...</div>
      )
    }
    data.sort((a, b) => {
      return b.id - a.id;
    })
    return(
      <div className="commu1Content">
        <div className="titleImg">
          <img src="/img/commu/commu1/notice_tit.png" alt="공지사항" />
        </div>
        <Route exact path="/community/commu1" render={(props) => (<NoticeWrap {...props} data = {data} />)} />
        <Route path="/community/commu1/:id" render={(props) => (<NoticeInform {...props} data = {data} />)} />
      </div>
    );
  };

  noticeLoad = async () => {
    await fetch('/json/notice.json').then(response => response.json()).then(data => {
      this.setState({isLoading : false, data : data});
    })
  }

  componentDidMount = () => {
    this.noticeLoad();
  }
};

export default Commu1;