import React from 'react';

import MenuTitle from '../menutitle.js';
import Fran1 from './franComponents/fran1.js';
import Fran2 from './franComponents/fran2.js';
import Fran3 from './franComponents/fran3.js';

import '../../css/fran.css';

class Fran extends React.Component {
  render(){
    const { match : { params : { value } } } = this.props;
    const { match : { url } } = this.props;
    const { subRouteList } = this.props;
    const matchMenu = subRouteList.find(res => res.link === url)

    let component;
    const { title } = matchMenu;
    if(value === 'fran1'){
      component = <Fran1 />;
    }else if(value === 'fran2'){
      component = <Fran2 />;
    }else if(value === 'fran3'){
      component = <Fran3 />;
    }

    return(
      <div className="fran">
        <div className="mainBg"></div>
        <div className="content">
          <MenuTitle title={title} url={url} />
          {component}
        </div>
      </div>
    );
  };
};

export default Fran;