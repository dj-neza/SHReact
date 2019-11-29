import React, { Component } from 'react';
import './App.css';
import 'modern-normalize/modern-normalize.css';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Navbar, Row } from "react-bootstrap";
import { MdClose, MdMenu } from 'react-icons/md';
import { Link, Element, Events, scroller } from 'react-scroll';
import YouTube from 'react-youtube';

import logo from './images/logo_full_blue.png';
import logoS from './images/logo_sh_orange.png';
import bcg from './images/background.png';
import mission from './images/mission.jpg';
import problemSolution from './images/background.svg';
import neza from './images/neza.png';
import ivan from './images/ivan.png';
import gian from './images/gian.png';
import linkedin from './images/linkedin.png';
import excitera from './images/excitera_white.png';
import kth from './images/kthinno_2.png';
import fb from './images/fb_white.png';
import insta from './images/insta_white.png';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          open: true,
          navbarHeight: 54,
          windowHeight: 0,
          windowWidth: 0
      };
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  toggleBurger () {
      this.setState({
          open: !this.state.open, 
          navbarHeight: (this.state.open === true) ? 107 : 54,
      });
  }
  
  componentDidMount() {
    const high = this.navBarEl.clientHeight;
    this.setState({ navbarHeight: high });
    console.log(high);

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 500,
      delay: 1000,
    })
  }
  
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  goToWhat() {
    return (0-this.state.navbarHeight);
  }
  goToWhatMobile() {
    return (0-this.state.navbarHeight*2);
  }
  updateWindowDimensions() {
    let navbarH = this.state.navbarHeight;
    let open = this.state.open;
    if (window.innerWidth > 767) {
      navbarH = 54;
      open = true;
    }
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight, navbarHeight: navbarH, open: open});
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }

  
  render() {
    let w = this.state.windowWidth * 0.8;
    let h = this.state.windowWidth * 0.45;
    const opts = {
      width: w,
      height: h,
    };
    return (
        <div>
          <div className="nav-fixed-top" style={((this.state.windowWidth <= 767 ? {backgroundColor: "#0ab"} : {}))} ref={ (navBarEl) => this.navBarEl = navBarEl}>
            <Navbar style={{justifyContent: "space-between"}}>
                <Col md={{span: 5}} xs={{span: 6}}>
                  <a href="www.sockethacker.com">
                    <img
                      src={logo}
                      alt="SocketHacker"
                      className="image-8 d-none d-md-block"
                    />
                    <img
                      src={logoS}
                      alt="SocketHacker"
                      className="image-max d-md-none"
                    />
                  </a>
                </Col>
                <Col xs={{span: 2, offset: 1}} className="d-md-none">
                    <Button onClick={this.toggleBurger.bind(this)} style={{backgroundColor: "#0ab"}}>
                        {this.state.open? <MdMenu /> : <MdClose />}
                    </Button>
                </Col>
                <Col md={{span: 5}}
                    className={
                        "d-none d-md-block" 
                    }
                    >
                    <div align="center" style={{width: "100%"}}>
                      <Link activeClass="active" className="what" to="what" spy={true} smooth={true} offset={this.goToWhat()} onClick={() => this.scrollTo()}><div className="heading-neza nav-item" style={(this.state.windowWidth >= 1121 ? {fontSize: "28px"} : {})}>What</div></Link>
                      <Link activeClass="active" className="who" to="who" spy={true} smooth={true} offset={this.goToWhat()} onClick={() => this.scrollTo()}><div className="heading-neza nav-item" style={(this.state.windowWidth >= 1121 ? {fontSize: "28px"} : {})}>Team</div></Link>
                      <Link activeClass="active" className="mission" to="mission" spy={true} smooth={true} offset={this.goToWhat()} onClick={() => this.scrollTo()}><div className="heading-neza nav-item" style={(this.state.windowWidth >= 1121 ? {fontSize: "28px"} : {})}>Mission</div></Link>
                    </div>
                </Col>
            </Navbar>
              <Col xs={{span: 10, offset: 1}} className={
                        "d-" +
                        (this.state.open ? "none" : "block") +
                        " d-md-none" 
                    }
                    style={{borderBottom: "2px solid white"}}
              ></Col>
              <Col  xs={12}
                    className={
                        "d-" +
                        (this.state.open ? "none" : "block") +
                        " d-md-none" 
                    }
                    style={{padding: "10px"}}
                    >
                    <div align="center" style={{width: "100%"}}>
                      <Link activeClass="active" className="what" to="what" spy={true} smooth={true} offset={this.goToWhatMobile()} onClick={() => this.scrollTo()}><div className="heading-neza-2 nav-item" style={{display: "inline"}}>What</div></Link>
                      <Link activeClass="active" className="who" to="who" spy={true} smooth={true} offset={this.goToWhatMobile()} onClick={() => this.scrollTo()}><div className="heading-neza-2 nav-item" style={{display: "inline"}}>Team</div></Link>
                      <Link activeClass="active" className="mission" to="mission" spy={true} smooth={true} offset={this.goToWhatMobile()} onClick={() => this.scrollTo()}><div className="heading-neza-2 nav-item" style={{display: "inline"}}>Mission</div></Link>
                    </div>
                </Col>
        </div>
        <div style={{height: this.state.navbarHeight}}></div>
        <div style={{"backgroundImage": `url(${bcg})`}} className="section center parallax">
          <div
            className="hero-content"
          ><h3 className="heading-8-2">
              Do you own an electric vehicle charging station?{" "}
            </h3>
            <Link activeClass="active" className="who" to="who" spy={true} smooth={true} offset={this.goToWhat()} onClick={() => this.scrollTo()}>
            <div className="button w-button">
              TALK TO US
            </div>
            </Link>
          </div>
        </div>
        
        <Element name="what" className="element"><div style={{"backgroundImage": `url(${problemSolution})`}} className="section center parallax">
          <Row noGutters="true" style={{width: "100%"}} align="center"> 
            <Col xs={{span: 10, offset: 1}} md={{span: 5, offset: 1}} lg={{span: 4, offset: 1}} align="center" style={{backgroundColor: "white", width: "40vw", padding: "20px", marginTop: "5px"}}>
                <div className="heading-10">PROBLEM </div>
                <div className="textbig" style={(this.state.windowWidth <= 767 ? {fontSize: "2.5vw"} : {fontSize: "1.5vw"})}>2050 Goal = Fossil Fuel free Sweden</div>
                <div className="textsmall" style={(this.state.windowWidth <= 767 ? {fontSize: "2vw"} : {fontSize: "1vw"})}>*amount of electric vehicles has doubled since 2016</div>
                <div className="textbig" style={(this.state.windowWidth <= 767 ? {fontSize: "2.5vw"} : {fontSize: "1.5vw"})}>74% of transport projected to turn to electricity as an alternative</div>
                <div className="textbig" style={(this.state.windowWidth <= 767 ? {fontSize: "2.5vw"} : {fontSize: "1.5vw"})}>Increasing peak load problem (times of high electricity demand) - could lead to congestions / blackouts</div>
                <div className="textbig" style={(this.state.windowWidth <= 767 ? {fontSize: "2.5vw"} : {fontSize: "1.5vw"})}>Currently solved using environmentally unfriendly power plants </div>
                <div className="textsmall" style={(this.state.windowWidth <= 767 ? {fontSize: "2vw"} : {fontSize: "1vw"})}>*cause a lot of CO2 emissions, higher electricity prices</div>
            </Col>
            <Col xs={{span: 10, offset: 1}} md={{span: 5, offset: 0}} lg={{span: 4, offset: 2}} align="center" style={{backgroundColor: "white", width: "40vw", padding: "20px", marginTop: "5px"}}>
                <div className="heading-10">SOLUTION</div>
                <div className="textbig" style={(this.state.windowWidth <= 767 ? {fontSize: "2.5vw"} : {fontSize: "1.5vw"})}>A network of EV charging stations that offers their owners smart charging using real-time data and predictions about electricity demand to increase/decrease the grid load and balance it.</div>
                <div className="textbig" style={(this.state.windowWidth <= 767 ? {fontSize: "2.5vw"} : {fontSize: "1.5vw"})}>Benefits: </div>
                <ul>
                  <li className="textsmall" style={(this.state.windowWidth <= 767 ? {fontSize: "2vw"} : {fontSize: "1vw"})}>Unique - electric vehicles help solve the problem instead of contributing to it</li>
                  <li className="textsmall" style={(this.state.windowWidth <= 767 ? {fontSize: "2vw"} : {fontSize: "1vw"})}>Reduced electricity costs (price varies based on demand) for charging station owners + monetary compensations for balancing services</li>
                  <li className="textsmall" style={(this.state.windowWidth <= 767 ? {fontSize: "2vw"} : {fontSize: "1vw"})}>Customers charging the cars experience little change (our system only minimally affects total charging time)</li>
                  <li className="textsmall" style={(this.state.windowWidth <= 767 ? {fontSize: "2vw"} : {fontSize: "1vw"})}>Reduced environmental impact</li>
                </ul>
            </Col>
          </Row>
          
        </div>
        <div style={{backgroundColor: "#0ab"}}>
          <Row style={{width: "100%", paddingTop: "20px"}} align="center"> 
            <Col xs={{span: 6, offset: 3}}><div className="heading-8-white" style={(this.state.windowWidth <= 767 ? {fontSize: "3vw"} : {fontSize: "2vw"})}>Want to know more?</div></Col>
          </Row>
          <div style={{width: "100%", paddingTop: "20px", paddingBottom: "20px"}} align="center"> 
              <YouTube videoId="9seHKhlGoSA" opts={opts}/>
          </div>
        </div>
        </Element>
        
        <Element name="who" className="element">
        <div className="section">
          <h2 className="heading-10">THE TEAM</h2>
          <h3 className="heading-8">contact@sockethacker.com</h3>
          <Row noGutters="true">
            <Col md={{span: 4, offset: 0}} xs={{span: 10, offset: 1}} align="center" style={{paddingLeft: "5%", paddingRight: "5%"}}>
              <img
                  src={ivan}
                  alt=""
                  className="feature-icon"
                />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <a href='https://www.linkedin.com/in/imayor1995/'><img src={linkedin} alt="LinkedIn Profile" width={30} height={30} style={{padding: "5px"}}/></a>
                  <div className="names" style={(this.state.windowWidth <= 767 ? {fontSize: "3vw"} : {fontSize: "2vw"})}>Ivan Mayordomo</div>
                </div>
                <p className="paragraph-3" style={(this.state.windowWidth <= 767 ? {fontSize: "2.5vw"} : {fontSize: "1.5vw"})}>
                  An EIT InnoEnergy student of Master in Energy for Smart
                  cities. Spanish guy, who enjoys deep discussions on life and
                  is not afraid to take risks, passionate about making
                  efficient innovative energy systems.
                </p>
            </Col>
            <Col md={{span: 4, offset: 0}} xs={{span: 10, offset: 1}} align="center" style={{paddingLeft: "5%", paddingRight: "5%"}}>
              <img
                  src={neza}
                  alt=""
                  className="feature-icon"
                />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <a href='https://www.linkedin.com/in/nezadukic/'><img src={linkedin} alt="LinkedIn Profile" width={30} height={30} style={{padding: "5px"}} /></a>
                  <div className="names" style={(this.state.windowWidth <= 767 ? {fontSize: "3vw"} : {fontSize: "2vw"})}>Neza Dukic</div>
                </div>
                <p className="paragraph-3" style={(this.state.windowWidth <= 767 ? {fontSize: "2.5vw"} : {fontSize: "1.5vw"})}>
                  An EIT Digital student of Master in Human-Computer
                  Interaction and Design. Coffee addict from Slovenia, who
                  wants to make a difference in this world, hopefully save
                  environment and make people happy.
                </p>
            </Col>
            <Col md={{span: 4, offset: 0}} xs={{span: 10, offset: 1}} align="center" style={{paddingLeft: "5%", paddingRight: "5%"}}>
              <img
                  src={gian}
                  alt=""
                  className="feature-icon"
                />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <a href='https://www.linkedin.com/in/giancarlomarzano/'><img src={linkedin} alt="LinkedIn Profile" width={30} height={30} style={{padding: "5px"}} /></a>
                  <div className="names" style={(this.state.windowWidth <= 767 ? {fontSize: "3vw"} : {fontSize: "2vw"})}>Giancarlo Marzano</div>
                </div>
                <p className="paragraph-3" style={(this.state.windowWidth <= 767 ? {fontSize: "2.5vw"} : {fontSize: "1.5vw"})}>
                  An EIT InnoEnergy Master student in Smart Electrical Networks. 
                  Ambitious and curious italian guy all about how AI, Blockchain and 
                  Machine Learning can enhance new efficient solutions in the 
                  electrical energy industry.

                </p>
            </Col>
          </Row>
        </div></Element>

        <Element name="mission" className="element">
        <div style={{"backgroundImage": `url(${mission})`}} className="section parallax">
          <h2 className="heading-10-2">OUR MISSION</h2>
          <Row style={{width: "100%"}}>
            <Col xs={{span: 8, offset: 2}} md={{span: 10, offset: 1}} align="center" className="heading-7-2">"For a greener transportation, cheaper electricity and a healthy grid."</Col>
          </Row>
          <Row style={{width: "100%"}}>
            <Col xs={{span: 10, offset: 1}} md={{span: 6, offset: 3}} align="center" className="heading-9-2" style={{paddingBottom: 20, paddingTop: 20}}>We believe in
            the future, where electric vehicles will have a key role in avoiding a climate disaster, but to do so the current system
            must be upgraded to seamlessly integrate them into the grid. SocketHacker does this by making charging smarter.</Col>
          </Row>
        </div></Element>

        <div className="footer">
          <div className="wrap" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: "5px"}}>
            <div style={this.state.windowWidth < 576 ? {} : {display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <img
                  src={logoS}
                  width={136}
                  alt=""
                />
                <div style={{padding: "5px"}}>
                  <div className="heading-9-noShadow" style={(((this.state.windowWidth/50) - 5 <= 10 ? {fontSize: "10px"} : {}))}>Lindstedtsvägen 24</div>
                  <div className="heading-9-noShadow" style={(((this.state.windowWidth/50) - 5 <= 10 ? {fontSize: "10px"} : {}))}>11428 Stockholm</div>
                  <div className="heading-9-noShadow" style={(((this.state.windowWidth/50) - 5 <= 10 ? {fontSize: "10px"} : {}))}>Sweden</div>
                </div>
              </div>
              <div align="center">
                <a href="https://www.facebook.com/sockethacker"><img style={{padding: "5px"}}
                    src={fb}
                    width={56}
                    alt=""
                  /></a>
                  <a href="https://www.instagram.com/sockethacker/"><img style={{padding: "5px"}}
                    src={insta}
                    width={56}
                    alt=""
                  /></a>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}} className="d-none d-md-block">
              <div className="nameswhite" style={{padding: "5px", marginRight: "10px"}}>Working with </div>
                <a href="https://www.kth.se/en/innovation" ><img style={{padding: "5px"}}
                src={kth}
                width={100}
                alt=""
              /></a>
              <a href="http://excitera.se" ><img style={{padding: "5px"}}
                src={excitera}
                width={100}
                alt=""
              /></a>
            </div>
          </div>

          <div className="wrap" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}} align="center">
            <div style={{color: "white"}}><small>SocketHacker, 2019 &copy;</small></div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
