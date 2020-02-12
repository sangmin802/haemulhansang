import React from 'react';

import '../../../css/oper.css';

class Oper extends React.Component {
  render(){
    return(
      <div className="operContent">
        <div className="title">
          <div className="logo">
            <img src="/img/about/about/gree_img.png" alt="핵가족" />
          </div>
          <div className="titleText">
            <img src="/img/about/about/gree_img2.png" alt="외식전문회사 핵가족" />
          </div>
        </div>
        <div className="detailContent">
        핵가족은 양질의 먹거리를 합리적인 가격으로 푸짐하게 즐길 수 있는 브랜드를 제공하고자 많은 노력과 연구, 개발에 끊임없이 힘을 쏟고 있습니다.<br />
        또한 외식 프랜차이즈 기업으로서 외식업 종사자들을 위해 소자본 창업의 기회와 일자리 창출에 힘을 쏟고 있습니다.<br /><br />
        <strong>대한민국 국민들의 건강을 최우선으로 하는 한국 대표 외식 기업</strong><br /><br />

        한국인들이 사랑하는 외식 메뉴를 현대인의 입맛에 맞게 재해석 해 제공하는 대한민국 대표 외식 프랜차이즈 기업입니다.<br /><br />

        <span>'가장 한국적인 것이 세계적인 것이다'</span>를 모토로 삼아 한국의 외식사업을 전 세계로 확장시키기 위해 최선을 다하는 기업이 되겠습니다.<br />
        </div>
        <div className="headMaster">
          대표이사
          <img src="/img/about/about/gree_img3.png" alt="양동모" />
        </div>
      </div>
    );
  };
};

export default Oper;