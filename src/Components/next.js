import "../next.css";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { VscArrowLeft } from "react-icons/vsc";
import randomColor from "randomcolor";
import { Link } from 'react-router-dom';


export default class Next extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: true,
    };
  }

  componentDidMount() {
    const item = this.props.history.location.state.item;
    const id = item.id;
    const url = "https://api.npoint.io/d734975d2aee62d197ef/" + id;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const item = this.props.history.location.state.item;
    const { isLoaded, items } = this.state;
    var nf = new Intl.NumberFormat();
    if (!isLoaded) return <div>Loading...</div>;
    return (
      <div className="Home">
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="http://fonts.cdnfonts.com/css/arial-nova"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;600&family=Arimo&display=swap"
          rel="stylesheet"
        />
        <div className="box2">
        <Link to={{ pathname: `/AdsoulApp` }}>
        <button class="btn1"><VscArrowLeft class="arrowIcon"/></button>
        </Link>
          <p class="title">ADSOUL</p>
        </div>
        <div class="media text-muted pt-3">
          <div
            className="box1 mr-2 rounded"
            data-holder-rendered="true"
            style={{ backgroundColor: randomColor() }}
          ></div>
          <div class="media-body pb-3 mb-0 small lh-125">
            <div class="d-flex justify-content-between align-items-center w-100">
              <strong class="appName">{item.appName}</strong>
            </div>
            <span class="d-block subName">{item.publisherName}</span>
          </div>
        </div>
        <section>
          <div class="app1">
            <table class="center">
              <tr className="topics">
                <th className="th1 leftBorder">Date</th>
                <th className="alignright th1">Revenue</th>
                <th className="alignright th1">Ad Requests</th>
                <th className="alignright th1">Ad Responses</th>
                <th className="alignright th1">Impressions</th>
                <th className="alignright th1">Clicks</th>
                <th className="alignright rightBorder">Render Rate</th>
              </tr>
              {items.map((item) => (
                <tr className="detail">
                  <td className="leftBorder">{item.date}</td>
                  <td className="alignright">
                    {"$" + nf.format(Number(item.revenue))}
                  </td>
                  <td className="alignright">
                    {nf.format(Number(item.adRequest))}
                  </td>
                  <td className="alignright">
                    {nf.format(Number(item.adResponse))}
                  </td>
                  <td className="alignright">
                    {nf.format(Number(item.impressions))}
                  </td>
                  <td className="alignright">
                    {nf.format(Number(item.clicks))}
                  </td>
                  <td className="alignright rightBorder">
                    {Math.round((item.impressions * 100) / item.adResponse) +
                      "%"}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </section>
      </div>
    );
  }
}
