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
              {
                desc.split('\n').map( line => {
                  return (<span key={line.length}>{line}<br/></span>)
                })
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


  // componentDidMount = () => {
  //   this.subLogoAnimation();
  // };

  // componentDidUpdate(prevProps){
  //   const { location : { pathname } } = prevProps;
  //   const { match : { params : { value } } } = this.props;
  //   if(pathname.indexOf(value) === -1){
  //     document.querySelector('.aniImg').classList.remove('subLogoAni');
  //     setTimeout(() => {
  //       this.subLogoAnimation();
  //     }, 10)
  //   }
  // }

  // subLogoAnimation = () => {
  //   document.querySelector('.aniImg').classList.add('subLogoAni');
  // }
};

export default MenuTitle;