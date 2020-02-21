import React from 'react';

import '../../../css/store3.css';

class Store3 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      interior : true,
      touchEnd : null,
      width : null,
      prevIndex : null
    };
    let resizeId;
    window.addEventListener('resize', () => {
      clearTimeout(resizeId);
      resizeId = setTimeout(() => {
        window.location.reload();
      }, 500);
    });
  };
  
  render(){
    const { interior } = this.state;
    const arr = [7,1,2,3,4,5,6];
    const arr2 = [1,2,3,4,5,6,7];
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
            <div className="interiorBtn btn selectedBtn" onClick={this.btnClick} >
              <img src="/img/store/interior/interior_tab.png" alt="인테리어" />
            </div>
            <div className="exteriorBtn btn" onClick={this.btnClick}>
              <img src="/img/store/interior/interior_tab2.png" alt="익스테리어" />
            </div>
          </div>
          {interior ? 
            <div className="imgSlide">
              {arr.map((res, index) => {
                return <img key={index} src={`/img/store/interior/interior${res}.jpg`} width="100%" alt={`interior${res}`} className="slideImg" onMouseDown={this.mouseDown} onMouseMove={this.mouseMove} onMouseUp={() => {
                  this.touch = false;
                }} />
              })}
            </div>
            :
            <div className="imgSlide">
              {arr.map((res, index) => {
                return <img key={index} src={`/img/store/interior/exterior${res}.jpg`} alt={`exterior${res}`} className="slideImg" onMouseDown={this.mouseDown} onMouseMove={this.mouseMove} onMouseUp={() => {
                  this.touch = false;
                }} />
              })}                  
            </div>
          }
          {interior ? 
            <div className="imgSelect">
              {arr2.map((res, index) => {
                return <img key={index} src={`/img/store/interior/interior${res}.jpg`} alt={`interior${res}`} />
              })}               
            </div>
            :
            <div className="imgSelect">
              {arr2.map((res, index) => {
                return <img key={index} src={`/img/store/interior/exterior${res}.jpg`} alt={`exterior${res}`} />
              })}                  
            </div>
          }
        </div>
      </div>
    );
  };

  touch = false;
  slide = false;
  count = 0;
  touchStart = null;

  componentDidMount = () => {
    const img = document.querySelectorAll('.slideImg');
    Array.from(img).map((res, index) => {
      const width = res.width;
      this.setState({width : width});
      if(index === 0){
        res.style.left = -width+'px';
      }else{
        res.style.left = (index-1)*width+'px';
      }
      return null
    });
  };

  mouseDown = (e) => {
    if(!this.touch){
      this.touch = true;
      this.touchStart = e.screenX;
    }
  };
  
  mouseMove = (e) => {
    if(this.touch && !this.slide){
      if(this.touchStart - e.screenX > 300){
        if(this.count === 6){
          this.count = 0;
        }else{
          this.count = this.count+1;
        }
        this.slideNext();
        setTimeout(() => {
          this.slide = false;          
        }, 500);
      }else if(this.touchStart - e.screenX < -300){
        if(this.count === 0){
          this.count = 6;
        }else{
          this.count = this.count-1;
        }
        this.slidePrev();
        setTimeout(() => {
          this.slide = false;          
        }, 500);
      }
    }
  };

  slideNext = () => {
    this.touch = false;
    this.slide = true;
    const slideList = document.querySelectorAll('.slideImg');
    const { width } = this.state;
    Array.from(slideList).map((res, index) => {
      if(this.count-1 === index){
        res.style.left = width*(slideList.length-2)+'px';
      }else{
        const preleft = Number(res.style.left.replace('px', ''));
        res.animate([
          {left : preleft+'px'},
          {left : preleft-width+'px'},
        ], {
          duration : 500,
          easing : 'ease-in-out',
          iterations : 1,
          fill : 'forwards'
        });
        res.style.left = preleft-width+'px';
      }
      return null;
    });
  };

  slidePrev = () => {
    this.touch = false;
    this.slide = true;
    const slideList = document.querySelectorAll('.slideImg');
    const { width } = this.state;
    Array.from(slideList).map((res, index) => {
      if(this.count === index){
        res.style.left = -width+'px';
      }else{
        const preleft = Number(res.style.left.replace('px', ''));
        res.animate([
          {left : preleft+'px'},
          {left : preleft+width+'px'},
        ], {
          duration : 500,
          easing : 'ease-in-out',
          iterations : 1,
          fill : 'forwards'
        });
        res.style.left = preleft+width+'px';
      }
      return null;
    });
  };

  btnClick = (e) => {
    const target = e.currentTarget;
    const btn = document.querySelectorAll('.btn');
    Array.from(btn).map(res => {
      if(res === target){
        res.classList.add('selectedBtn');
        if(Array.from(res.classList).indexOf('interiorBtn') !== -1){
          this.setState({interior : true})
        }else{
          this.setState({interior : false})
        }
      }else{
        res.classList.remove('selectedBtn');
      }
      return null;
    });
  };
};

export default Store3;