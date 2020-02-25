import React from 'react';

import { Link } from 'react-router-dom';

class NewsInform extends React.Component {
  state = {
    isLoading : true,
    news : []
  }

  render(){
    const { isLoading, news } = this.state;
    if(isLoading){
      return(
        <div>Loading...</div>
      )
    }

    const { data } = this.props;
    const prevNews = data.find(res => news.id-1 === res.id);
    const nextNews = data.find(res => news.id+1 === res.id);
    
    return(
      <div className="newsInformContent">
        <div className="newsInformTitle">
          {news.title}
        </div>
        <div className="newsInformSup">
          <span className="author"><span className="title">작성자 : </span>{news.author}</span>
          <span className="created"><span className="title">작성일 : </span>{news.created}</span>
          <span className="view"><span className="title">조회수 : </span>{news.view}</span>
        </div>
        <div className="newsInformDesc">
          <div className="newsInformImg">
            <img src={`/img/commu/commu2/news${news.id}.jpg`} alt={news.title} />
          </div>
          {news.desc.split('<br>').map((line, index) => {
            return (<span key={index}>{line}<br/></span>)
          })}
        </div>
        <div className="otherNewsBtn">
          <div className="nextBtn">
            <div className="label">다음글</div>
            <div className="title">
              {nextNews ? <Link to={`/community/commu2/${nextNews.id}`}>{nextNews.title}</Link> : '다음글이 없습니다.'}
            </div>
          </div>
          <div className="prevBtn">
            <div className="label">이전글</div>
            <div className="title">
              {prevNews ? <Link to={`/community/commu2/${prevNews.id}`}>{prevNews.title}</Link> : '이전글이 없습니다.'}
            </div>
          </div>
        </div>
        <div className="goList">
          <Link to="/community/commu2"><span>목록</span></Link>
        </div>
      </div>
    );
  };

  setNews = async () => {
    const { match : { params : { id } }, data } = this.props;
    const news = await data.find(res => res.id === Number(id));
    this.setState({isLoading : false, news : news});
  }

  componentDidMount = () => {
    this.setNews();
  }

  componentDidUpdate = (prevProps) => {
    const preId = this.props.match.params.id
    const prvId = prevProps.match.params.id
    if(preId !== prvId){
      this.setNews();
    };
  };
};

export default NewsInform;