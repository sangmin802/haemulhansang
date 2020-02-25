import React from 'react';
import { Link } from 'react-router-dom';

class NoticeWrap extends React.Component {
  render(){
    const { data } = this.props;
    return(
      <div className="noticeWrapContent">
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
                  <div className="noticeCont title per70">
                    <Link to={`/community/commu1/${res.id}`}>
                      <span>{res.title}</span>
                    </Link>
                  </div>
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
};

export default NoticeWrap;