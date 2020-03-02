import React from 'react';

import MenuTitle from '../menutitle.js';

import '../../css/menu.css';

class Menu extends React.Component {
  state = {
    itemLoading : false,
    data : []
  };

  render(){
    const { itemLoading, data } = this.state;
    if(!itemLoading){
      return <div  className="itemLoading">상품을 받아오는 중입니다. <br />잠시만 기다려주세요!</div>;
    }
    const { match : { url } } = this.props;
    const { subRouteList } = this.props;
    const matchMenu = subRouteList.find(res => res.link === url)

    const { title } = matchMenu;
    return(
      <div className="menu">
        <div className="mainBg">
          <img className="img1" src="/haemulhansang/img/menu/sub2_img.png" alt="food1"/>
          <img className="img2" src="/haemulhansang/img/menu/sub2_img2.png" alt="food2"/>
          <img className="img3" src="/haemulhansang/img/menu/sub2_img3.png" alt="food3"/>
        </div>
        <div className="content">
          <MenuTitle title={title} url={url} />
          <div className="menuList">
            <div className="menuIntro">
              <div className="menuValue">
                {title}
              </div>
              <div className="img">
                <img src="/haemulhansang/img/menu/menu_tit.png" alt="menu"/>
              </div>
            </div>
            <div className="menuWrap">
              {data.map(res => {
                return (
                  <div className="menuItem" key={res.id}>
                    <div className="img">
                      <img src={`/haemulhansang/img/menu/${res.img}`} alt={res.name} />
                    </div>
                    <div className="inform">
                      <div className="title">
                        {res.name}
                      </div>
                      <div className="price">
                        {this.comma(res.price)}원
                      </div>
                      <div className="desc">
                        {res.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  componentDidMount = () => {
    this.getItems();
  };

  componentDidUpdate = (prevProps) => {
    this.bgAnimation();
    const { match : { url } } = this.props;
    if(prevProps.match.url !== url){
      this.getItems();
      document.querySelector('.img1').classList.remove('img1Ani');
      document.querySelector('.img2').classList.remove('img2Ani');
      document.querySelector('.img3').classList.remove('img3Ani');
      setTimeout(() => {
        this.bgAnimation();
      }, 10)
    };
  };

  getItems = async () => {
    const { match : { params : { value } } } = this.props;
    
    await fetch(`/haemulhansang/json/${value}.json`).then((response) => response.json()).then((data) => {
      this.setState({itemLoading : true, data : data});
    });
  };

  bgAnimation = () => {
    const img1 = document.querySelector('.img1').classList;
    const img2 = document.querySelector('.img2').classList;
    const img3 = document.querySelector('.img3').classList;
    // if((img1 && img2 && img3) !== null){
      img1.add('img1Ani');
      return new Promise((resolve) => {
        setTimeout(() => {
          img2.add('img2Ani');
          resolve();
        }, 1000)
      }).then(() => {
        setTimeout(() => {
          img3.add('img3Ani');
        }, 1000);
      });
    // };
  };

  comma = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

export default Menu;