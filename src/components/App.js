import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom'

import Components from '../components.js';

import '../css/App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    const { goIndex, mobile, pc } = this.props;
    
    window.addEventListener('touchmove', () => {
      this.scrollTop = window.pageYOffset;
    })

    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      if(width <= 1180){
        mobile();
      }else if(width > 1180){
        pc();
        if(window.location.hash === '#/' || window.location.hash === ''){
          goIndex();
        };
      };
    });
  };

  hanAniCount = false;
  scrollTop = null;

  render(){
    const { isIndex, selectedPage, goIndex, selectedSubPage, isLoading, routeList, subRouteList, isMobile } = this.props;
    if(isLoading){
      return <div className="loading">Loading...</div>
    }
    let menubar = null
    if(isMobile){
      menubar = 
        <div className="mobileMenu">
          <div className="logo">
            <Link to='/' onClick={() => {
              goIndex(); 
              window.scrollTo(0,0);
              const line = document.querySelectorAll('.line');
              const mobileMenu = document.querySelector('.mobileMenuWrap');
              const root = document.querySelector('#root');
              this.hanAniCount = false;
              Array.from(line).map((res, index) => {
                res.classList.remove(`line${index}Move`);
                return null;
              });
              mobileMenu.classList.remove('mdisplayblock');
              root.style.cssText = '';
            }}>
              <img src="/haemulhansang/img/index/logo.jpg" alt="해물한상" />
            </Link>
          </div>
          <div className ="hamburger" onClick={this.hamAni}>
            <div className="line line0"></div>
            <div className="line line1"></div>
            <div className="line line2"></div>
          </div>
        </div>
    }else{
      if(isIndex){
        menubar = 
          <div className="indexRoute">
            <div className="logo">
              <img src="/haemulhansang/img/index/main_logo.png" alt="해물한상" />
            </div>
            <ul className="route">
              <li className="normal"><Link to='/about/oper' data-index = '1' onClick={this.goPage.bind(this)}>ABOUT US</Link></li>
              <li className="normal"><Link to='/menu/menu1' data-index = '2' onClick={this.goPage.bind(this)}>MENU</Link></li>
              <li className="normal"><Link to='/franchise/fran1' data-index = '3' onClick={this.goPage.bind(this)}>FRANCHISE</Link></li>
              <li className="normal"><Link to='/store/store1' data-index = '4' onClick={this.goPage.bind(this)}>STORE</Link></li>
              <li className="normal"><Link to='/community/commu1' data-index = '5' onClick={this.goPage.bind(this)}>COMMUNITY</Link></li>
              <li className="notNormal1 notNormal"><Link to='/franchise/fran2' data-index = '3' data-subindex = '10' onClick={this.goPage.bind(this)}>메뉴경쟁력</Link></li>
              <li className="notNormal2 notNormal"><Link to='/store/store1' data-index = '4' onClick={this.goPage}>매장찾기</Link></li>
            </ul>
          </div>
      }else{
        menubar = 
          <div className="pageRouteWrap" onMouseLeave={this.returnSelectedRoute}>
            <div className="pageRoute">
              <div className="innerPageRoute">
                <div className="top">
                  <div className="logo">
                    <Link to='/' onClick={() => {goIndex(); window.scrollTo(0,0)}}><img src="/haemulhansang/img/index/logo.jpg" alt="해물한상" /></Link>
                  </div>
                  <div className="route">
                    {routeList.map(res => {
                      let className = 'pageLink';
                      if(selectedPage === res.id){
                        className = 'pageLink selected';
                      }
                      return <div className="normal" key={res.id}><Link to={res.link} className={className} data-index={res.id} onClick={this.selectedRoute} onMouseEnter={this.selectedRoute}>{res.title}</Link></div>
                    })}
                  </div>
                </div>
                <div className="bottom">
                  <div className="botWrap">
                    {subRouteList.map(res => {
                      let className = 'subRoute';
                      let className2 = 'subPageLink';
                      if(selectedPage === res.mainId){
                        className = 'subRoute displayBlock';
                      }
                      if(selectedSubPage === res.id){
                        className2 = 'subPageLink subSelected';
                      }
                      return <div className={className} key={res.id} ><Link to={res.link} className={className2} data-id={res.id} data-index={res.subId} onClick={this.selectedSubPage}>{res.title}</Link></div>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>        
      }
    }
    return (
      <div className="App">
        <HashRouter>
          {menubar}
          <div className="mobileMenuWrap">
            <div className="menu">
              {routeList.map((title) => {
                const ul = subRouteList.filter((sub) => title.id === sub.mainId)
                return (
                  <ul key={title.id}>
                    <li className="title">{title.title}</li>
                    {ul.map(li => {
                      let className = 'subRoute';
                      let className2 = 'subPageLink';
                      // if(selectedPage === sub.mainId){
                      //   className = 'subRoute displayBlock';
                      // }
                      if(selectedSubPage === li.id){
                        className2 = 'subPageLink subSelected';
                      }
                      return <li className={className} key={li.id}><Link to={li.link} className={className2} data-id={li.id} data-index={li.subId} data-mainindex={li.mainId} onClick={this.selectMobilePage}>{li.title}</Link></li>                     
                    })}
                  </ul>
                )
              })}
            </div>
          </div>
          <Route exact path="/" component={Components.Main} />
          <Route path="/about/:value" component={Components.About} />
          <Route path="/menu/:value" component={Components.Menu} />
          <Route path="/franchise/:value" component={Components.Fran} />
          <Route path="/store/:value" component={Components.Store} />
          <Route path="/community/:value" component={Components.Commu} />
          <footer className="footer">
            <div className="topWrap">
              <div className="brand">
                <img src="/haemulhansang/img/index/f_logo.png" alt="해물한상" />
              </div>
              <div className="sns">
                <div className="facebook">
                  <img src="/haemulhansang/img/index/face.png" alt="페이스북" />
                </div>
                <div className="insta">
                  <img src="/haemulhansang/img/index/insta.png" alt="인스타그램" />
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
        </HashRouter>
      </div>
    );
  };

  downData = () => {
    const { loaded } = this.props;
    fetch('/haemulhansang/json/data.json').then((response) => response.json()).then((data) => {
      loaded(data);
    }).catch((err) => {
      console.log(err);
    });
  };

  componentDidMount = () => {
    const { goIndex, mobile, pc } = this.props;
    const width = window.innerWidth;
    if(width <= 1180){
      this.downData();
      mobile();
    }else if(width > 1180){
      pc();
      this.slideMenu();
      console.log(window.location)
      if(window.location.hash === '#/' || window.location.hash === ''){
        this.downData();
        goIndex();
      }
      window.onpopstate  = () => {
        if(window.location.hash === '#/' || window.location.hash === ''){
          goIndex();
        };
      };
    }
  };
  
  componentDidUpdate(){
    this.slideMenu();
  }

  goPage = (e) => {
    const { goPage, subRouteList, subPageSelect } = this.props;
    const baseSubMenuId = subRouteList.filter(res => res.mainId === Number(e.target.dataset.index))[0].id;
    window.scrollTo(0,0);
    if(e.target.dataset.subindex === undefined){
      goPage(e.target.dataset.index, null);
      subPageSelect(baseSubMenuId);
    }else{
      goPage(e.target.dataset.index, e.target.dataset.subindex);
    }
  };

  selectedRoute = (e) => {
    const { pageSelect, subPageSelect } = this.props;
    const index = Number(e.target.dataset.index);
    pageSelect(index);
    const { subRouteList } = this.props;
    if(e.nativeEvent.type === 'click'){
      const subId = subRouteList.filter(res => res.mainId === index)[0].id;
      window.scrollTo(0,0);
      subPageSelect(subId);
    }
  };

  returnSelectedRoute = () => {
    const { selectedSubPage, pageSelect, subRouteList } = this.props;
    const returnId = subRouteList.filter(res => res.id === selectedSubPage)[0].mainId;
    pageSelect(returnId);
  };

  selectedSubPage = (e) => {
    const { subPageSelect } = this.props;
    const index = e.target.dataset.id;
    window.scrollTo(0,0);
    subPageSelect(index);
  }

  selectMobilePage = (e) => {
    const { goPage } = this.props;
    const line = document.querySelectorAll('.line');
    const mobileMenu = document.querySelector('.mobileMenuWrap');
    const root = document.querySelector('#root');
    this.hanAniCount = false;
    Array.from(line).map((res, index) => {
      res.classList.remove(`line${index}Move`);
      return null;
    });
    mobileMenu.classList.remove('mdisplayblock');
    root.style.cssText = '';
    goPage(e.target.dataset.mainindex, e.target.dataset.id);
  }

  slideMenu = () => {
    const { isIndex } = this.props;
    const indexRoute = document.querySelector('.indexRoute');
    if(isIndex && indexRoute !== null){
      setTimeout(() => {
        indexRoute.classList.add('indexRouteAni');
      }, 2000);
    };
  }

  hamAni = () => {
    const line = document.querySelectorAll('.line');
    const mobileMenu = document.querySelector('.mobileMenuWrap');
    const root = document.querySelector('#root');
    if(!this.hanAniCount){
      this.hanAniCount = true;
      Array.from(line).map((res, index) => {
        res.classList.add(`line${index}Move`);
        return null;
      });
      mobileMenu.classList.add('mdisplayblock');
      root.style.cssText = 'height : 100vh; overflow-y : hidden;';
    }else{
      this.hanAniCount = false;
      Array.from(line).map((res, index) => {
        res.classList.remove(`line${index}Move`);
        return null;
      });
      mobileMenu.classList.remove('mdisplayblock');
      root.style.cssText = '';
      window.scrollTo(0, this.scrollTop);
    }
  }
};

export default App;
