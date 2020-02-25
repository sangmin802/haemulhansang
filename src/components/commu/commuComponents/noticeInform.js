import React from 'react';
import { Link } from 'react-router-dom';

class NoticeInform extends React.Component {
  state = {
    isLoading : true,
    notice : []
  };

  render(){
    const { isLoading, notice } = this.state;
    const { data, match : { params : { id } } } = this.props;
    if(isLoading){
      return <div>Loading...</div>
    }
    const prevNotice = data.find(res => res.id === Number(id)-1);
    const nextNotice = data.find(res => res.id === Number(id)+1);

    return(
      <div className="noticeInformContent">
        <div className="noticeInformTitle">
          {notice.title}
        </div>
        <div className="noticeInformSup">
          <span className="author"><span className="title">작성자 : </span>{notice.author}</span>
          <span className="created"><span className="title">작성일 : </span>{notice.created}</span>
          <span className="view"><span className="title">조회수 : </span>{notice.view}</span>
        </div>
        <div className="noticeInformDesc">
          {notice.desc.split('<br>').map((line, index) => {
            return (<span key={index}>{line}<br/></span>)
          })}
        </div>
        <div className="otherNoticeBtn">
          <div className="nextBtn">
            <div className="label">다음글</div>
            <div className="title">
              {nextNotice ? <Link to={`/community/commu1/${nextNotice.id}`}>{nextNotice.title}</Link> : '다음글이 없습니다.'}
            </div>
          </div>
          <div className="prevBtn">
            <div className="label">이전글</div>
            <div className="title">
              {prevNotice ? <Link to={`/community/commu1/${prevNotice.id}`}>{prevNotice.title}</Link> : '이전글이 없습니다.'}
            </div>
          </div>
        </div>
        <div className="goList">
        <Link to="/community/commu1"><span>목록</span></Link>
        </div>
      </div>
    );
  };

  setNotice = async () => {
    const { data, match : { params : { id } } } = this.props;
    const notice = await data.find(res => res.id === Number(id));
    this.setState({isLoading : false, notice : notice});
  }

  componentDidMount = () => {
    this.setNotice();
  };

  componentDidUpdate = (prevProps) => {
    const preId = this.props.match.params.id;
    const prevId = prevProps.match.params.id ;
    if(preId !== prevId){
      this.setNotice();
    }
  }
};

export default NoticeInform;