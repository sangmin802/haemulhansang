import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Components from '../components.js';

import '../css/App.css';

class App extends React.Component {
  render(){
    if(window.location.pathname === '/'){
      this.goPage(true)
    };

    const { isIndex, selectedPage } = this.props;
    const routeList = [
      { id : 1, title : 'ABOUT US', link : '/about/about' },
      { id : 2, title : 'MENU', link : '' },
      { id : 3, title : 'FRANCHISE', link : '' },
      { id : 4, title : 'STORE', link : '' },
      { id : 5, title : 'COMMUNITY', link : '' },
    ];
    const subRouteList = [
      { id : 1, subId : 1, mainId : 1, title : '회사소개', link : '/about/about' },
      { id : 2, subId : 2, mainId : 1, title : '브랜드 소개', link : '/about/intro' },
      { id : 3, subId : 3, mainId : 1, title : '브랜드 경쟁력', link : '/about/comp' },

      { id : 4, subId : 1, mainId : 2, title : '뚝배기', link : '/menu/menu1' },
      { id : 5, subId : 2, mainId : 2, title : '회', link : '/menu/menu2' },
      { id : 6, subId : 3, mainId : 2, title : '비빔밥/탕', link : '/menu/menu3' },
      { id : 7, subId : 4, mainId : 2, title : '찜/무침', link : '/menu/menu4' },
      { id : 8, subId : 5, mainId : 2, title : '특선메뉴', link : '/menu/menu5' },

      { id : 9, subId : 1, mainId : 3, title : '가맹절차', link : '/franchise/fran1' },
      { id : 10, subId : 2, mainId : 3, title : '메뉴 경쟁력', link : '/franchise/fran2' },
      { id : 11, subId : 3, mainId : 3, title : '가맹문의', link : '/franchise/fran3' },

      { id : 12, subId : 1, mainId : 4, title : '매장찾기', link : '/store/store1' },
      { id : 13, subId : 2, mainId : 4, title : '사진갤러리', link : '/store/store2' },
      { id : 14, subId : 3, mainId : 4, title : '인테리어', link : '/store/store3' },

      { id : 15, subId : 1, mainId : 5, title : '공지사항', link : '/community/commu1' },
      { id : 16, subId : 2, mainId : 5, title : '언론보도', link : '/community/commu2' },
    ]

    return (
      <div className="App">
        <Router>
          {isIndex ?
            <div className="indexRoute">
              <div className="logo">
                <img src="/img/index/main_logo.png" alt="해물한상" />
              </div>
              <ul className="route">
                <li className="normal"><Link to='/about/about' onClick={this.goPage}>ABOUT US</Link></li>
                <li className="normal"><Link to='' onClick={this.goPage}>MENU</Link></li>
                <li className="normal"><Link to='' onClick={this.goPage}>FRANCHISE</Link></li>
                <li className="normal"><Link to='' onClick={this.goPage}>STORE</Link></li>
                <li className="normal"><Link to='' onClick={this.goPage}>COMMUNITY</Link></li>
                <li className="notNormal1 notNormal"><Link to='' onClick={this.goPage}>메뉴경쟁력</Link></li>
                <li className="notNormal2 notNormal"><Link to='' onClick={this.goPage}>매장찾기</Link></li>
              </ul>
            </div>
          :
            <div className="pageRoute">
              <div className="top">
                <div className="logo">
                  <Link to='/' onClick={this.goPage.bind(this, true)}><img src="/img/index/logo.jpg" alt="해물한상" /></Link>
                </div>
                <div className="route">
                  {routeList.map(res => {
                    if(selectedPage === res.id){
                      return <div className="normal" key={res.id}><Link to={res.link} className="pageLink selected" data-index={res.id} onClick={this.selectedRoute}>{res.title}</Link></div>
                    }
                    return <div className="normal" key={res.id}><Link to={res.link} className="pageLink" data-index={res.id} onClick={this.selectedRoute}>{res.title}</Link></div>
                  })}
                </div>
              </div>
              <div className="bottom">
                <div>
                  {subRouteList.map(res => {
                    return <div className="subRoute" key={res.id}><Link to={res.link} className="subPageLink subSelected" data-id={res.mainId} data-index={res.subId}>{res.title}</Link></div>
                  })}
                </div>
              </div>
            </div>
          }
          <Route exact path="/"  component={Components.Main} />
          <Route path="/about/about" component={Components.About} />
          <Route path="/about/intro" component={Components.Intro} />
          <Route path="/about/comp" component={Components.Comp} />
          <footer className="footer">
            <div className="topWrap">
              <div className="brand">
                <img src="/img/index/f_logo.png" alt="해물한상" />
              </div>
              <div className="sns">
                <div className="facebook">
                  <img src="/img/index/face.png" alt="페이스북" />
                </div>
                <div className="insta">
                  <img src="/img/index/insta.png" alt="인스타그램" />
                </div>
              </div>
            </div>
            <div className="bottomWrap">
              <div className="top">
                <span>상호명 : 제주 양가네 해물한상</span>
                <span>대표자명 : 양동모</span>
                <span>사업장소재지 : 서울특별시 강동구 올림픽로 664, 4층 404,405,406호(천호동, 대우한강베네시티)</span>
              </div>
              <div className="bottom">
                <span>대표전화 : 02-2038-8444</span>
                <span>팩스번호 : 02-2038-8446</span>
                <span>이메일 : nuclearsteak@naver.com</span>
              </div>
            </div>
            <div className="copyright">Copyright (C) 2019 jeju. All Rights Reservered</div>
          </footer>
        </Router>
      </div>
    );
  };

  componentDidMount = () => {
    this.slideMenu();
    window.onpopstate  = () => {
      if(window.location.pathname === '/'){
        this.goPage(true)
      };
    };
  };
  
  componentDidUpdate(){
    this.slideMenu();
  }

  goPage = (bool) => {
    const { indexChange } = this.props;
    if(bool === true){
      indexChange(true);
    }else{
      indexChange(false);
    }
  };

  selectedRoute = (e) => {
    const { pageSelect } = this.props;
    const index = e.target.dataset.index;
    const link = document.querySelectorAll('.pageLink');
    Array.from(link).map(res => {
      res.classList.remove('selected');
      return null;
    });
    link[index-1].classList.add('selected');
    pageSelect(index);
  };

  slideMenu = () => {
    const { isIndex } = this.props;
    if(isIndex){
      setTimeout(() => {
        document.querySelector('.indexRoute').classList.add('indexRouteAni');
      }, 2000)
    };
  }
};

export default App;
