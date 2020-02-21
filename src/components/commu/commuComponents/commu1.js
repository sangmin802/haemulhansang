import React from 'react';

import '../../../css/commu1.css';

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
        <div className="noticeWrap">
          <div className="noticeLabelWrap">
            <div className="noticeLabel number per5">번호</div>
            <div className="noticeLabel title per70">제목</div>
            <div className="noticeLabel author per10">작성자</div>
            <div className="noticeLabel created per10">게시일</div>
            <div className="noticeLabel view per5">조회수</div>
          </div>
          <div className="noticeContentWrap">
            {data.map(res => {
              return(
                <div className="noticeContent" key={res.id}>
                  <div className="noticeCont number per5">{res.id}</div>
                  <div className="noticeCont title per70"><span>{res.title}</span></div>
                  <div className="noticeCont author per10">{res.author}</div>
                  <div className="noticeCont created per10">{res.created}</div>
                  <div className="noticeCont view per5">{res.view}</div>
                </div>
              );
            })}
          </div>
        </div>
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