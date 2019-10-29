import React from 'react';

const Content = () => {
  return (
    <section className="main-grid main-container">
      <h2>subtitle</h2>
      <div className="cards-container">
        <div className="cards">
          <img src="https://picsum.photos/id/360/1925/1280" alt=""/>
          <h3>title</h3>
          <p className="description">text text text text</p>
        </div>
        <div className="cards">
          <img src="https://picsum.photos/id/152/3888/2592" alt=""/>
          <h3>title</h3>
          <p className="description">text text text text</p>
        </div>
        <div className="cards">
          <img src="https://picsum.photos/id/306/1024/768" alt=""/>
          <h3>title</h3>
          <p className="description">text text text text</p>
        </div>
        <div className="cards">
          <img src="https://picsum.photos/id/701/1858/1393" alt=""/>
          <h3>title</h3>
          <p className="description">text text text text</p>
        </div>
        <div className="cards">
          <img src="https://picsum.photos/id/696/4310/2864" alt=""/>
          <h3>title</h3>
          <p className="description">text text text text</p>
        </div>
      </div>
    </section>
  )
}

export default Content;
