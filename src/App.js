import React from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Banner from './components/banner';
import Content from './components/content';
import './styles/header.scss';
import './styles/nav.scss';
import './styles/banner.scss';
import './styles/content.scss';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <Banner />
      <Content />
    </React.Fragment>
  );
}

export default App;
