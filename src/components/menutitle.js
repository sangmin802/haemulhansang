import React from 'react';

class MenuTitle extends React.Component {
  render(){
    const { title, url } = this.props;
    let desc, src = null;
    if(url.indexOf('about') !== -1){
      desc = `차별화된 감성과 전약을 추구하는\n해물한상을 소개합니다.`;
      src = "/img/about/sub_tit.png";
    }else if(url.indexOf('menu') !== -1){
      desc = `바다느낌 가득한\n해물한상의 메뉴를 소개합니다.`;
      src = "/img/menu/sub_tit2.png";
    }else if(url.indexOf('franchise') !== -1){
      desc = `성공창업의 든든한 파트너!\n해물한상을 소개합니다.`;
      src = "/img/fran/sub_tit3.png";
    }else if(url.indexOf('store') !== -1){
      desc = `전국 곳곳에 숨어있는 맛집\n해물한상 매장을 소개합니다.`;
      src = "/img/store/sub_tit4.png";
    }else if(url.indexOf('commu') !== -1){
      desc = `생동감 있는 해물한상의 스토리`;
      src = "/img/commu/sub_tit5.png";
    }

    return(
      <div className="menuTitle">
          <div className="aniImg subLogoAni"></div>
          <div className="titleWrap">
            <div className="title">{title}</div>
            <div className="img">
              <img src={src} alt="about us" />
            </div>
            <div className="desc">
              {desc.indexOf('\n') !== -1 ? 
                desc.split('\n').map( line => {
                  return (<span key={line.length}>{line}<br/></span>)
                })
                :
                desc
              }
            </div>
          </div>
      </div>
    );
  };

  componentDidMount = () => {
    this.subLogoAnimation();
  };

  componentDidUpdate = (prevProps) => {
    const { url } = this.props;
    if(prevProps.url !== url){
      document.querySelector('.aniImg').classList.remove('subLogoAni');
      setTimeout(() => {
        this.subLogoAnimation();
      }, 10)
    }
  }

  subLogoAnimation = () => {
    document.querySelector('.aniImg').classList.add('subLogoAni');
  }
};

export default MenuTitle;