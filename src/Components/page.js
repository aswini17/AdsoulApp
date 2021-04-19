import '../App.css';
import React from 'react';
import icon1 from '../icon1.svg';
import icon2 from '../icon2.svg';
import icon3 from '../icon3.svg';
import icon4 from '../icon4.svg';
import asset1 from '../asset1.svg';
import randomColor from "randomcolor";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillGearFill } from "react-icons/bs";
import { VscArrowRight } from "react-icons/vsc";
import {withRouter} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Page extends React.Component {
  constructor(props) {

      super(props);

      this.state = {
          items: [],
          isLoaded: false
      }

  }
  componentDidMount() {

    fetch('https://api.npoint.io/8b9ea0fb45b9d499e76c')
        .then(res => res.json())
        .then(json => {
            this.setState({
                items: json,
                isLoaded: true, 
            })
        }).catch((err) => {
            console.log(err);
        });

}

render() {
  const { isLoaded, items } = this.state;
  
  if (!isLoaded)
      return <div>Loading...</div>;

  return (
    <div className="App">
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <script src="https://kit.fontawesome.com/fb209b8d44.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;900&display=swap" rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
               integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"/>
        <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/offcanvas/"/>
        <link href="offcanvas.css" rel="stylesheet"/>
      <div class="container-fluid g-0">
            <div class="row g-0">
                <div class="col g-0">
                    <div class="topLeft">
                        <p class="title">
                          ADSOUL
                        </p>
                        <img src={asset1} alt="logo" className="titleImage"/>
                    </div>
                    <div class="row g-0 bottomLeft d-none d-md-block"> 
                        <p class="title1"> Revenue Optimization</p>
                        <div class="row g-0">
                            <div class="col-6">
                                <img className="icon icon-top" src={icon1} alt="logo" />
                                <p class="iconName">Fill Rate</p>
                            </div>
                            <div class="col-6 ">
                                <img class="icon  icon-top" src={icon2} alt="logo" />
                                <p class="iconName">Improve CTR</p>
                            </div>
                        </div>
                        <div class="row g-0 ">
                            <div class="col-6">
                                <img class="icon icon-bottom" src={icon3} alt="logo" />
                                <p class="iconName">Refresh Rate</p>
                                
                            </div>
                            <div class="col-6">
                                <img class="icon icon-bottom" src={icon4} alt="logo" />
                                <p class="iconName">Quick Integration</p>
                                
                            </div>
                        </div>
                     </div>
                </div>
                <div class="col lg g-0">
                    <div class="topRight">
                        <p class="rightTitle">Apps
                          <BsFillGearFill class="settingIcon"/>
                        </p>
                    </div>              
                    <section class="bottomRight">
                    {items.map(item => (
                        <div class="app">
                                    <div class="media text-muted pt-3">
                                    <div className="box1 mr-2 rounded" data-holder-rendered="true" style={{backgroundColor:randomColor()}}></div>
                                        <div class="media-body pb-3 mb-0 small lh-125">
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                        <strong class="appName">{item.appName}</strong>
                                        <Link to={{ pathname: `/next`, state: {item: item, color: randomColor()} }}>
                                            <button class="btn"><VscArrowRight class="arrowIcon"/></button>
                                        </Link>
                                        </div>
                                        <span class="d-block subName">{item.publisherName}</span>
                                    </div>
                                    </div>
                            <ul class="flex-container">
                            <li class="details">Revenue</li>
                            <li class="details">Ad Requests</li>
                            <li class="details">Ad Response</li>
                            <li class="details">Impressions</li>
                            </ul>
                            <ul class="flex-container">
                            <li class="details1">$345</li>
                            <li class="details1">34M</li>
                            <li class="details1">10M</li>
                            <li class="details1">10M</li>
                            </ul>
                        </div>
                       ))}
                    </section>
                </div>
            </div>
        </div>
    </div>
  );
}
}
export default withRouter(Page);
