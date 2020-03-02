import React from 'react';

import { Link } from 'react-router-dom';

class NewsWrap extends React.Component {
  render(){
    const { data } = this.props;
    return(
      <div className="newsWrap">
        {data.map(res => {
          return (
            <div className="newsCont" key={res.id}>
              <Link to={`/haemulhansang/community/commu2/${res.id}`} onClick={() => {window.scrollTo(0,0)}}>
                <div className="img">
                  <img src={`./img/commu/commu2/news${res.id}.jpg`} alt={res.title} />
                </div>
                <div className="newsInfo">
                  <div className="date">
                    {res.created}
                  </div>
                  <div className="title">
                    {res.title}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>      
    );
  };

  componentDidMount = () => {
    sessionStorage.removeItem('news');
  }
};

export default NewsWrap;