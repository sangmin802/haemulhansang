import React from 'react';

import '../../../css/store2.css';

class Store2 extends React.Component {
  state = {
    isLoading : true,
    gallery : []
  }

  render(){
    const { isLoading, gallery } = this.state;

    if(isLoading){
      return (
        <div className="loading">Loading</div>
      );
    };
    gallery.sort((a, b) => {
      return b.id-a.id;
    });

    return(
      <div className="store2Content">
        <div className="title">
          <img src="./img/store/gallery/photo_tit.png" alt="사진갤러리"/>
        </div>
        <div className="galleryWrap">
          {gallery.map(res => {
            return (
              <div className="gallery" key={res.id}>
                <img src={`./img/store/gallery/${res.img}`} alt={res.name}/>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  downGallery = async () => {
    await fetch('https://raw.githubusercontent.com/sangmin802/haemulhansang/master/public/json/gallery.json').then(response => response.json()).then(data => {
      this.setState({isLoading : false, gallery : data})
    });
  }

  componentDidMount = () => {
    this.downGallery();
  };
};

export default Store2;