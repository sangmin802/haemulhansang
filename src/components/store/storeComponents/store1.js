import React from 'react';

import '../../../css/store1.css';

class Store1 extends React.Component {
  state = {
    apiLoad : false,
    districtData : [],
    storeData : [],
    first : '시/도 선택',
    second : '구/군 선택',
    typeSearch : null
  }
  render(){
    const { apiLoad, districtData, storeData, first, second, typeSearch } = this.state;
    if(!apiLoad){
      return (
        <div>
          Loading...
        </div>
      );
    };
    const keys = [];
    districtData.map(res => {
      keys.push(Object.keys(res)[0]);
      return null;
    });
    let secondList = [];
    districtData.find(res => {
      if(first !== '시/도 선택' && Object.keys(res)[0] === first){
        secondList = res[first];
      };
      return null;
    });
    
    let selectedStore = [];
    if(typeSearch === null){
      if(first === '시/도 선택' && second === '구/군 선택'){
        selectedStore = storeData;
      }else if(first !== '시/도 선택' && second === '구/군 선택'){
        selectedStore = storeData.filter(res => res.position.indexOf(first) !== -1);
      }else if(first !== '시/도 선택' && second !== '구/군 선택'){
        selectedStore = storeData.filter(res => res.position === first+' '+second);
      }
    }else{
      selectedStore = storeData.filter(res => this.removeSpace(res.name).indexOf(this.removeSpace(typeSearch)) !== -1);
    }
    return(
      <div className="store1Content">
        <div className="searchArea">
          <div className="searchTitle">
            <div>지역을 선택하시거나 매장명을 입력하시면<br />해당 지역의 매장이 검색됩니다.</div>
            <img src="/img/store/findstore/store_tit.png" alt="해물한상 매장을 찾으시나요?" />
          </div>
          <div className="searchWrap">
            <div className="searchSelect">
              <div className="first" onClick={this.listUp}>{first}</div>
              <ul className="firstList distrList">
                {keys.map((res, index) => {
                  return <li key={index} onClick={this.firstSelect}>{res}</li>
                })}
              </ul>
              <div className="second" onClick={this.listUp}>{second}</div>
              <ul className="secondList distrList">
                {secondList.map((res, index) => {
                  return <li key={index} onClick={this.secondSelect}>{res}</li>
                })}
              </ul>
            </div>
            <div className="searchTyping">
              <form action="" onSubmit={this.searchSubmit}>
                <input type="text" name="store" className="typing"/>
                <input type="submit" value="매장찾기" placeholder="매장명을 입력하세요." className="button"/>
              </form>
            </div>
          </div>
        </div>
        <div className="stores">
            {selectedStore.map(res => {
              return (
              <div className="store" key={res.id}>
                <div className="img">
                  <img src={`/img/store/findstore/${res.img}`} alt={res.name}/>
                </div>
                <div className="desc">
                  <div className="title">
                    {res.name}
                  </div>
                  <div className="position dataWrap">
                    <div className="label">매장위치</div>
                    <div className="data">{res.address}</div>
                  </div>
                  <div className="tel dataWrap">
                    <div className="label">전화번호</div>
                    <div className="data">{res.tel}</div>
                  </div>
                  <div className="time dataWrap">
                    <div className="label">영업시간</div>
                    <div className="data">{res.time}</div>
                  </div>
                </div>
              </div>
              )
            })}
        </div>
      </div>
    );
  };

  downData = () => {
    const urls = ['/json/storedata.json', '/json/district.json'];
    Promise.all(
      urls.map((res) => {
        return fetch(res).then((response) => {
          return response.json();
        })
      })
    ).then((data) => {
      this.setState({apiLoad : true, storeData : data[0], districtData : data[1]});
    })
  };
  
  componentDidMount = () => {
    this.downData();
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { typeSearch } = this.state;
    if(prevState === null && typeSearch !== null){
      this.setState({typeSearch : null})
    }
  }

  searchSubmit = (e) => {
    e.preventDefault();
    this.setState({first : '시/도 선택', second : '구/군 선택', typeSearch : e.target.store.value});
  };

  listUp = (e) => {
    e.stopPropagation();
    this.setState({typeSearch : null});
    const { first } = this.state;
    const classname = e.target.className;
    const lists = document.querySelectorAll('.distrList');
    Array.from(lists).map(res => {
      res.classList.remove('displayblock');
      return null;
    })
    if(classname === 'first'){
      lists[0].classList.add('displayblock');
    }else if(classname === 'second'){
      if(first !== '시/도 선택'){
        lists[1].classList.add('displayblock');
      };
    };
  };

  firstSelect = (e) => {
    const list = document.querySelector('.firstList');
    list.classList.remove('displayblock');
    this.setState({first : e.target.textContent, second : '구/군 선택'});
  };

  secondSelect = (e) => {
    const list = document.querySelector('.secondList');
    list.classList.remove('displayblock');
    this.setState({second : e.target.textContent});
  };

  removeSpace = (string) => {
    return string.replace(/\s/gi, "");
  }
};

export default Store1;