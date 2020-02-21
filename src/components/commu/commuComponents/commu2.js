import React from 'react';

import '../../../css/commu2.css';

class Commu2 extends React.Component {
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
      <div className="commu2Content">
        <div className="titleImg">
          <img src="/img/commu/commu2/news_tit.png" alt="언론보도" />
        </div>
        <div className="newsWrap">
          {data.map(res => {
            return (
              <div className="newsCont" key={res.id}>
                <div className="img">
                  <img src={`/img/commu/commu2/news${res.id}.jpg`} alt={res.title} />
                </div>
                <div className="newsInfo">
                  <div className="date">
                    {res.created}
                  </div>
                  <div className="title">
                    {res.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  noticeLoad = async () => {
    await fetch('/json/news.json').then(response => response.json()).then(data => {
      this.setState({isLoading : false, data : data});
    })
  }

  componentDidMount = () => {
    this.noticeLoad();
  }
};

export default Commu2;