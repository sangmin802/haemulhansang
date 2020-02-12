import React from 'react';

import Comp from './aboutComponents/comp.js';
import Intro from './aboutComponents/intro.js';
import Oper from './aboutComponents/oper.js';

import '../../css/about.css';

class About extends React.Component {
  render(){
    const { match : { params : { value } } } = this.props;
    let component, title = null;
    if(value === 'oper'){
      component = <Oper />;
      title = '회사 소개';
    }else if(value === 'intro'){
      component = <Intro />;
      title = '브랜드 소개';
    }else if(value === 'comp'){
      component = <Comp />;
      title = '브랜드 경쟁력';
    }
    return(
      <div className="about">
        <div className="mainBg"></div>
        <div className="content">
          <div className="aniImg subLogoAni"></div>
          <div className="titleWrap">
            <div className="title">{title}</div>
            <div className="img">
              <img src="/img/about/sub_tit.png" alt="about us" />
            </div>
            <div className="desc">
              차별화된 감성과 전약을 추구하는<br />
              해물한상을 소개합니다.
            </div>
          </div>
          {component}
        </div>
      </div>
    );
  };

  componentDidMount = () => {
    this.subLogoAnimation();
  };

  componentDidUpdate(prevProps){
    const { location : { pathname } } = prevProps;
    const { match : { params : { value } } } = this.props;
    if(pathname.indexOf(value) === -1){
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

export default About;