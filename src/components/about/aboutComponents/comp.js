import React from 'react';

import '../../../css/comp.css';

class Comp extends React.Component {
  render(){
    return(
      <div className="compContent">
        <div className="logo">
          <img src="./img/about/comp/Bcp_tit.png" alt="브랜드경쟁력" />
        </div>
        <div className="sectionType1 section">
          <div className="img">
            <img src="./img/about/comp/Bcp_img.jpg" alt="해산물 전문 프랜차이즈" />
          </div>
          <div className="text">
            <div className="title">
              해산물 전문 프랜차이즈
            </div>
            <div className="desc">
              해물뚝배기와 꼬막비빔밥, 산해진미 해물탕과 한상가득 모듬회까지<br />신선한 해물들로 조리한 다양하고 탄탄한 메뉴성을 갖춘<br />해산물 전문 음식점입니다.
            </div>
          </div>
        </div>
        <div className="sectionType2 section">
          <div className="text">
            <div className="title">
              맛의 유지
            </div>
            <div className="desc">
              자체 개발한 특제 소스와 육수등 해물한상 비법양념과 레시피를 동일하게 공급하여,<br />전매장에서 본연의 맛을 동일하게 제공하고 있으며<br />전문인력이 아니어도 손쉽게 고의 요리를 선보일 수 있습니다.
            </div>
          </div>
          <div className="img">
            <img src="./img/about/comp/Bcp_img2.jpg" alt="맛의 유지" />
          </div>
        </div>
        <div className="sectionType1 section">
          <div className="img">
            <img src="./img/about/comp/Bcp_img3.jpg" alt="두터운 고객 타깃층" />
          </div>
          <div className="text">
            <div className="title">
              두터운 고객 타깃층
            </div>
            <div className="desc">
              외식을 주로하는 30~50대 사이의 고객을 메인 타켓으로해 꾸준한 매출이 가능하며,<br />해산물 중신의 식사메뉴와 술안주 메뉴들이 풍성하여<br />주거지역, 대학가, 오피스상권, 중심상관등에서 매출을 극대화 할 수 있습니다.
            </div>
          </div>
        </div>
        <div className="sectionType2 section">
          <div className="text">
            <div className="title">
              낮에도 밤에도
            </div>
            <div className="desc">
              해물한상은 제주도나 바닷가에서 맛볼 수 있는 해산물 전문요리 프랜차이즈이며,<br />해물뚝배기, 꼬막비빔밥, 조개미역국 등의 전문 식사메뉴와<br />소주한잔 할 수 있는 시원한 탕류와 모듬회 등 다양한 해산물 메뉴들이 즐비하여,<br />낮이고 밤이고 매장을 가득 채울 수 있는 풍성한 메뉴구성이 강점입니다.
            </div>
          </div>
          <div className="img">
            <img src="./img/about/comp/Bcp_img4.jpg" alt="낮에도 밤에도" />
          </div>
        </div>
      </div>
    );
  };
};

export default Comp;