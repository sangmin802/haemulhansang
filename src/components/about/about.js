import React from 'react';

import Comp from './aboutComponents/comp.js';
import Intro from './aboutComponents/intro.js';
import Oper from './aboutComponents/oper.js';
import MenuTitle from '../menutitle.js';

import '../../css/about.css';

class About extends React.Component {
  render(){
    const { match : { params : { value } } } = this.props;
    const { match : { url } } = this.props;
    const { subRouteList } = this.props;
    const matchMenu = subRouteList.find(res => res.link === url)

    let component;
    const { title } = matchMenu;
    if(value === 'oper'){
      component = <Oper />;
    }else if(value === 'intro'){
      component = <Intro />;
    }else if(value === 'comp'){
      component = <Comp />;
    }
    return(
      <div className="about">
        <div className="mainBg"></div>
        <div className="content">
          <MenuTitle title={title} url={url} />
          {component}
        </div>
      </div>
    );
  };
};

export default About;