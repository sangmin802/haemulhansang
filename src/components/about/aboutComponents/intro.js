import React from 'react';

import '../../../css/intro.css';

class Intro extends React.Component {
  render(){
    return(
      <div className="introContent">
        <div className="section1">
          <div className="img">
            <img src="/haemulhansang/img/about/intro/Binfo_img.jpg" alt="해물한상" />
          </div>
          <div className="text">
            <div className="text1 halfTitle">
              “ 낮에도 밤에도 ”
            </div>
            <div className="text2 halfText">
              해물한상은 제주도나 바닷가에서 맛볼수 있는 해산물 전문요리 프랜차이즈 브랜드이며,<br />
              해물뚝배기, 꼬막비빔밥,조개미역국 등의 전문 식사메뉴와 소주한잔 할 수 있는 시원한 탕류<br />모듬회 등 다양한 해산물 메뉴들이 즐비하여,<br />
              낮이고 밤이고 매장을 가득 채울수 있는 풍성한 메뉴구성이 강점입니다.
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="text">
            <div className="text1 fullTitle">
              “ 경험을 성공으로 바꾸는 기술이 있습니다 ”
            </div>
            <div className="text2 fullText">
              외식 전문 프랜차이즈 해물한상은<br />
              일반적인 프랜차이즈 브랜드들과는 분야별로 메리트 있는<br />
              브랜드들만을 운영하고 소비자들의 트렌드와 패턴을 분석하고<br />
              연구와 분석을 반복한 후 비즈니스 모델을 완성해 나가고 있습니다.
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="text">
            <div className="text1 halfTitle">
              “ 두터운 고객 타깃층 ”
            </div>
            <div className="text2 halfText">
              외식을 주로하는 30~50대 사이의 고객을 메인 타겟으로해 꾸준한 매출이 가능하며,<br />해산물 중심의 식사메뉴와 술안주 메뉴들이 풍성하여 주거지역, 대학가, 오피스상권,<br />중심상권등에서 매출을 극대화 할 수 있습니다.
            </div>
          </div>
          <div className="img">
            <img src="/haemulhansang/img/about/intro/Binfo_img2.jpg" alt="식당내부" />
          </div>       
        </div>
        <div className="section4">
          <div className="text">
            <div className="text1 fullTitle">
              “ 다양한 메뉴구성과 높은 객단가! ”
            </div>
            <div className="text2 fullText">
              식사로 술 한잔과 함게 즐기는 푸짐한 안주메뉴로<br />
              다양한 아이디어 넘치는 메뉴구성으로<br />
              소비자들의 마음을 사로잡고<br />
              높은 수익구조를 실현해나가는 브랜드가 되기 위해<br />
              매출 극대화에 앞장서고 있습니다.
            </div>
          </div>
        </div>
        <div className="section5">
          <div className="img">
            <img src="/haemulhansang/img/about/intro/Binfo_img3.png" alt="고소함" />
          </div>   
          <div className="text">
            <div className="text1 halfTitle">
              “ 고소함의 차이를 비교하라! ”
            </div>
            <div className="text2 halfText">
              해물한상은 비슷하게 흉내만 낸 미투브랜드들과는 다른 고소함을 자랑합니다.<br />
              유통경로가 확실한 참기름을 사용하고 있으며, 100% 통참깨를 찜누름 방식으로 추출하여 마지막 한방울까지도<br />
              고소한 맛을 유지하며, 깊은 풍미의 요리를 선사해 드리고 있습니다.
            </div>
          </div>    
        </div>            
        <div className="section6">
          <div className="img">
            <img src="/haemulhansang/img/about/intro/Binfo_img6.jpg" alt="2019고객선호브랜드지수1위" />
          </div>   
          <div className="text">
            <div className="text1 halfTitle">
              “ 고객이 인정한 브랜드 ”
            </div>
            <div className="text2 halfText">
              2019 고객선호브랜지수 1위 해물전문점 해물한상<br />
              다양한 해산물 메뉴들이 즐비한 매장<br />
              식사는 물론 소주한잔과 어울리는 술안주 메뉴까지<br />
              해물한상은 풍성한 메뉴들이 가득한 해산물 전문 브랜드입니다.
            </div>
          </div>    
        </div>            
      </div>
    );
  };
};

export default Intro;