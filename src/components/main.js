import React from 'react';
import { Link } from 'react-router-dom'

import '../css/main.css'

class Main extends React.Component {
  render(){
    return(
      <div className="mainComponent">
        <div className="mainImg"></div>
        <div className="mainNav">
          <div className="menu menu1">
            <Link to='/menu/menu1' data-index = '2' onClick={this.goPage}>
              <div className="menu1Content menuContent">
                <div className="title">MENU</div>
                <div className="text">
                  사계절 언제나 건강 가득한<br />
                  바다의 메뉴들을 신선하고 맛있게<br />
                  해물한상의 메뉴를 소개합니다.<br />
                </div>
                <div className="arrow"></div>
              </div>
            </Link>
          </div>
          <div className="menu menu2">
            <Link to='/about/comp' data-index = '1' data-subindex = '3' onClick={this.goPage}>              
              <div className="menu2Content menuContent">
                <div className="menu2Img"></div>
                <div className="menu2Inform">
                  <div className="title">BRAND COMPETITIVE</div>
                  <div className="text">
                    해산물 전문 프랜차이즈, 맛의 유지,<br />
                    두터운 고객 타깃충, 낮에도 밤에도 즐길 수 있는<br />
                    해물한상의 브랜드 경쟁력을 소개합니다.<br />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="menu menu3">
            <Link to='/menu/menu1' data-index = '4' onClick={this.goPage}>
              <div className="menu3Content menuContent">
                <div className="menu3Inform">
                  <div className="img">
                    <img src="/haemulhansang/img/index/main_con_logo3.png" alt="해물한상 STORE" />
                  </div>
                  <div className="title">STORE</div>
                  <div className="text">
                    해물한상의 전국지점들을<br />
                    만나보세요!<br />
                  </div>
                </div>
                <div className="arrow"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  componentDidMount = () => {
    const nav = document.querySelector('.mainNav').classList;
    const img = document.querySelector('.mainImg').classList;
    if((nav && img) !== null){
      img.add('imgAni');
      setTimeout(() => {
        nav.add('navAni');
      }, 1000)
    }
  };

  goPage = (e) => {
    const { goPage, subRouteList, subPageSelect } = this.props;
    const baseSubMenuId = subRouteList.filter(res => res.mainId === Number(e.currentTarget.dataset.index))[0].id;
    window.scrollTo(0,0);
    if(e.target.dataset.subindex === undefined){
      goPage(e.currentTarget.dataset.index, null);
      subPageSelect(baseSubMenuId);
    }else{
      goPage(e.currentTarget.dataset.index, e.currentTarget.dataset.subindex);
    }
  };
};

export default Main;