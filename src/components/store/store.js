import React from 'react';

import MenuTitle from '../menutitle.js';

import Store1 from './storeComponents/store1.js';
import Store2 from './storeComponents/store2.js';
import Store3 from './storeComponents/store3.js';

import '../../css/store.css';

class Store extends React.Component {
  render(){
    const { match : { params : { value } } } = this.props;
    const { match : { url } } = this.props;
    const { subRouteList } = this.props;
    const matchMenu = subRouteList.find(res => res.link === url)

    let component;
    const { title } = matchMenu;
    if(value === 'store1'){
      component = <Store1 />;
    }else if(value === 'store2'){
      component = <Store2 />;
    }else if(value === 'store3'){
      component = <Store3 />;
    }

    return(
      <div className="store" onClick={(e) => {
        const lists = document.querySelectorAll('.distrList');
        Array.from(lists).map(res => {
          res.classList.remove('displayblock');
          return null;
        })
      }}>
        <div className="mainBg"></div>
        <div className="content">
          <MenuTitle title={title} url={url} />
          {component}
        </div>
      </div>
    );
  };
};

export default Store;