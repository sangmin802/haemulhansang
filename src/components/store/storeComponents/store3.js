import React from 'react';

import '../../../css/store3.css';

class Store3 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      interior : true
    };
    window.addEventListener('resize', () => {
      const img = document.querySelectorAll('.slideImg');
      Array.from(img).map((res, index) => {
        const width = res.width;
        if(index === 6){
          res.style.left = -width+'px';
        }else{
          res.style.left = index*width+'px';
        }
        return null
      });
    });
  };
  render(){
    const { interior } = this.state;
    const arr = [1,2,3,4,5,6,7];
    return(
      <div className="store3Content">
        <div className="section1">
          <div className="img">
            <img src="/img/store/interior/interior_img.jpg" alt="인테리어컨셉" />
          </div>
          <div className="desc">
            <div className="title">
              <img src="/img/store/interior/interior_tit.png" alt="인테리어컨셉" />
            </div>
            <div className="info1 info">
              <div className="label">
                제주의 감성을 입히다
              </div>
              <div className="text">
                시원한 화이트 & 그린 타일, 빈티지한 요소를 배치하여 현대적인 감각을 강조 하였습니다.<br />
                돌하루방, 해녀이미지, 격자무의 나무배열, 목조천장 등 제주 앞바다에서 즐기는 한끼 식사 공간으로 연출하였습니다.
              </div>
            </div>
            <div className="info2 info">
              <div className="label">
                빠른 회전율을 위한 최적의 서비스 공간
              </div>
              <div className="text">
                공간에 맞게 배치한 2인/4인 테이블 배치로 작은 공간도 놓치지 않는 효율적인 동선 구성
              </div>
            </div>
            <div className="info3 info">
              <div className="label">
                최적화된 컬러 연출
              </div>
              <div className="text">
                시원한 화이트와 자연친화적인 그린컬러 배합을 통해, 메뉴의 신선함과 매장의 청결함을 동시에 느낄 수 있습니다.
              </div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="section2ContWrap">
            <div className="title">
              <img src="/img/store/interior/interior_tit2.png" alt="해물한상" />
            </div>
            <div className="desc">
              해물한상의 인테리어는 그린 계열의 컬러를 메인으로 사용하여 제주 청정 해역이 주는 생동감을 연출하였으며,<br />
              주 재료인 해산물들의 생동감이 느껴지는 이미지들과 고급스런 소품들로 차별화된 인테리어를 연출 하였습니다.
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="btnWrap">
            <div className="interiorBtn">
              <img src="/img/store/interior/interior_tab.png" alt="인테리어" />
            </div>
            <div className="exteriorBtn">
              <img src="/img/store/interior/interior_tab2.png" alt="익스테리어" />
            </div>
          </div>
          {interior ? 
            <div className="imgSlide">
              {arr.map((res, index) => {
                return <img key={index} src={`/img/store/interior/interior${res}.jpg`} width="100%" alt={`interior${res}`} className="slideImg" onMouseDown={this.mouseDown} />
              })}
            </div>
            :
            <div className="imgSlide">
              {arr.map((res, index) => {
                return <img key={index} src={`/img/store/exterior1/exterior${res}.jpg`} alt={`exterior${res}`} className="slideImg" />
              })}                  
            </div>
          }
          {interior ? 
            <div className="imgSelect">
              {arr.map((res, index) => {
                return <img key={index} src={`/img/store/interior/interior${res}.jpg`} alt={`interior${res}`} />
              })}               
            </div>
            :
            <div className="imgSelect">
              {arr.map((res, index) => {
                return <img key={index} src={`/img/store/exterior1/exterior${res}.jpg`} alt={`exterior${res}`} />
              })}                  
            </div>
          }
        </div>
      </div>
    );
  };

  componentDidMount = () => {
    const img = document.querySelectorAll('.slideImg');
    Array.from(img).map((res, index) => {
      // res.style.width = '100%';
      const width = res.width;
      if(index === 6){
        res.style.left = -width+'px';
      }else{
        res.style.left = index*width+'px';
      }
      return null
    });
  };

  mouseDown = (e) => {
    console.log('?')
    console.log(e)
  };
};

export default Store3;