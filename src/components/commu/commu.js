import React from 'react';

import Commu1 from './commuComponents/commu1.js'
import Commu2 from './commuComponents/commu2.js'
import MenuTitle from '../menutitle.js';

import '../../css/commu.css';

class Commu extends React.Component {
  render(){
    const { match : { params : { value } } } = this.props;
    const { match : { url } } = this.props;
    const { subRouteList } = this.props;
    const matchMenu = subRouteList.find(res => res.link === url)

    let component;
    const { title } = matchMenu;
    if(value === 'commu1'){
      component = <Commu1 />;
    }else if(value === 'commu2'){
      component = <Commu2 />;
    }

    return(
      <div className="commu">
        <div className="mainBg"></div>
        <div className="content">
          <MenuTitle title={title} url={url} />
          {component}
        </div>
      </div>
    );
  };
};

export default Commu;