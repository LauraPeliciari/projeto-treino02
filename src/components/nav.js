import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faGlobeAmericas, faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
  constructor () {
    super();

    this.state = { showMenu: false, showAbout: false, showDiscover: false, showNews: false, showContact: false, Menu: [0, 0, 0, 0] }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.showAbout = this.showAbout.bind(this);
    this.showDiscover = this.showDiscover.bind(this);
    this.showNews = this.showNews.bind(this);
    this.showContact = this.showContact.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    this.setState({ showMenu: true });
  }

  closeMenu () {
    this.setState({ showMenu: false, showAbout: false, showDiscover: false, showNews: false, showContact: false });
  }

  showAbout () {
    this.setState( state => ({ showAbout: !state.showAbout, showDiscover: false }));
  }

  showDiscover () {
    this.setState( state => ({ showDiscover: !state.showDiscover }));
  }

  showNews () {
    this.setState( state => ({ showNews: !state.showNews }));
  }
  
  showContact () {
    this.setState( state => ({ showContact: !state.showContact }));
  }
  
  handleMenu = (e) => {
    let tempArray = [];
    for (let i = 0; i < this.state.Menu.length; i++) {
      if ( e.target.value == i ) {
        if(this.state.Menu[i] == 1) {
          tempArray[i] = 0;
        } else {
          tempArray[i] = 1;
        }
        continue;
      }
      tempArray[i] = 0;      
    }

    this.setState({
      Menu: tempArray
    })
  }

  render() {
    return (
      <nav className="main-nav">
        <div className="nav-icons main-grid">
          <div className="icons-left">
            <a href="#menu" onClick={this.showMenu} ><FontAwesomeIcon icon={faBars} /></a>
          </div>
          <div className="menu-item">
            <ul className="linear-menu">
              <li><button value={0} onClick={(evt) => this.handleMenu(evt)}>about<FontAwesomeIcon icon={faAngleDown} /></button></li>
              { this.state.Menu[0] ? (
                <div className="showAbout">
                  <a href="#text">some text</a>
                  <a href="#text">some text</a>
                </div>
                ) : ( null )}
              <li><button value={1} onClick={this.handleMenu}>discover<FontAwesomeIcon icon={faAngleDown} onClick={this.showDiscover} /></button></li>
              { this.state.Menu[1] ? (
                <div className="showDiscover">
                  <a href="#text">some text</a>
                  <a href="#text">some text</a>
                  <a href="#text">some text</a>
                  <a href="#text">some text</a>
                </div>
              ) : ( null )}
              <li><button value={2} onClick={this.handleMenu}>news<FontAwesomeIcon icon={faAngleDown} onClick={this.showNews} /></button></li>
              { this.state.Menu[2] ? (
                <div className="showNews">
                  <a href="#text">some text</a>
                  <a href="#text">some text</a>
                  <a href="#text">some text</a>
                </div>
              ) : ( null )}
              <li><button value={3} onClick={this.handleMenu}>contact<FontAwesomeIcon icon={faAngleDown} onClick={this.showContact} /></button></li>
              { this.state.Menu[3] ? (
                <div className="showContact">
                  <a href="#text">some text</a>
                  <a href="#text">some text</a>
                </div>
              ) : ( null )}
            </ul>
          </div>
          <div className="icons-right">
            <a href="#globe"><FontAwesomeIcon icon={faGlobeAmericas} /></a>
            <a href="#search"><FontAwesomeIcon icon={faSearch} /></a>
          </div>
        </div>
        { this.state.showMenu ? ( 
          <div className="nav-content main-grid">
            <button className="icon-close" onClick={this.closeMenu}><FontAwesomeIcon icon={faTimes} /></button>
            <ul className="nav-menu">
              <li><a href="#about">about<FontAwesomeIcon icon={faAngleDown} onClick={this.showAbout} /></a></li>
              { this.state.showAbout ? (
                <div className="showAbout">
                  <a href="#text">some text</a>
                  <a href="#text">some text</a>
                </div>
              ) : ( null )}
              <li><a href="#discover">discover<FontAwesomeIcon icon={faAngleDown} onClick={this.showDiscover} /></a></li>
              { this.state.showDiscover ? (
                <div className="showDiscover">
                  <a href="#text">some text</a>
                  <a href="#text">some text</a>
                  <a href="#text">some text</a>
                  <a href="#text">some text</a>
                </div>
              ) : ( null )}
              <li><a href="#news">news<FontAwesomeIcon icon={faAngleDown} onClick={this.showNews}/></a></li>
              { this.state.showNews ? (
                <div className="showNews">
                  <a href="#text">some text</a>
                  <a href="#text">some text</a>
                  <a href="#text">some text</a>
                </div>
              ) : ( null )}
              <li><a href="#contact">contact<FontAwesomeIcon icon={faAngleDown} onClick={this.showContact} /></a></li>
              { this.state.showContact ? (
                <div className="showContact">
                  <a href="#text">some text</a>
                  <a href="#text">some text</a>
                </div>
              ) : ( null )}
            </ul>
          </div> ) : (null)}
      </nav>
    );
  }
}

export default Nav;
