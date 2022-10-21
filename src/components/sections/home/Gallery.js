import * as React from 'react';


export default function Gallery() {
  return (
    <div className="container-sm" style={{py: '10%', marginBottom: '13%'}}>
      <h3 className="partner-header">Robotics Competition</h3>
      <div class="gallery">
        <img src={require("./../../../assets/images/section/home/gallery/g1.jpg")} />
        <img src={require("./../../../assets/images/section/home/gallery/g2.jpg")} />
        <img src={require("./../../../assets/images/section/home/gallery/g3.jpg")} />
        <img src={require("./../../../assets/images/section/home/gallery/g4.jpg")} />
        <img src={require("./../../../assets/images/section/home/gallery/g5.jpg")} />
        <img src={require("./../../../assets/images/section/home/gallery/g6.jpg")} />
        <img src={require("./../../../assets/images/section/home/gallery/g7.jpg")} />
        <img src={require("./../../../assets/images/section/home/gallery/g8.jpg")} />
        <img src={require("./../../../assets/images/section/home/gallery/g9.jpg")} />
      </div>
    </div>
  );
}
