import React, { Component } from 'react';
import './Portfolio.css';

import ProjectList from './Projects/ProjectList';

class Portfolio extends Component {

  state = {
      listClass0: "Portfolio-Active",
      listClass1: "Portfolio-Hidden",
      listClass2: "Portfolio-Hidden",
      listClass3: "Portfolio-Hidden",
      listClass4: "Portfolio-Hidden",
      key: 1
  }

  hidden = "Portfolio-Hidden";
  active = "Portfolio-Active";
  animIn = "fadeInLeft";
  animOut = "fadeOutRight";

  changeTab = tabNumber => {
    var previous;
    if (this.state.listClass0.includes(this.active)) {
      previous = "listClass0";
    }
    if (this.state.listClass1.includes(this.active)) {
      previous = "listClass1";
    }
    if (this.state.listClass2.includes(this.active)) {
      previous = "listClass2";
    }
    if (this.state.listClass3.includes(this.active)) {
      previous = "listClass3";
    }
    
    var current = "listClass" + tabNumber;
    this.animateSwap(previous, current);
  }

  animateSwap = async (keyOut, keyIn) => {
    let tempState = this.state;
    tempState[keyOut] = this.animOut;
    tempState.key++;
    await this.setState(tempState);

    tempState = this.state;
    tempState.listClass0 = this.hidden;
    tempState.listClass1 = this.hidden;
    tempState.listClass2 = this.hidden;
    tempState.listClass3 = this.hidden;
    tempState.listClass4 = this.hidden;
    tempState[keyIn] = " " + this.active + " " + this.animIn;
    tempState.key++;
    await setTimeout(() => this.setState(tempState), 400);

  }

  render() {

    return (
      <div className="Portfolio animated fadeInUp">
        <p>
          This is a collection of my work, my current skills, and my personal experience. Below you can find some of my most important skills and my project showcase. Please keep in mind, not all of my skills and projects are listed here. I have taken effort to keep this list concise.
        </p>
        <h4 className="Home-Topic">Skills</h4>
        <hr />
        <div className="Portfolio-Skills-Tabs">
          <button className="waves-effect waves-light btn btn-flat white Portfolio-Btn" onClick={() => this.changeTab(1)}>Languages</button>
          <button className="waves-effect waves-light btn btn-flat white Portfolio-Btn" onClick={() => this.changeTab(2)}>Node & NPM</button>
          <button className="waves-effect waves-light btn btn-flat white Portfolio-Btn" onClick={() => this.changeTab(3)}>Concepts</button>
          {/* <button className={"waves-effect waves-light btn btn-flat white Portfolio-Btn"} onClick={() => this.changeTab(4)}>Extras</button> */}
        </div>
        <hr />
        <div className="Portfolio-Skills-List">
          <div key={this.state.key + 0} className={"animated " + this.state.listClass0} id="Portfolio-Skill">
            <div className="Skill-Box">
              <p>
                Using the tabs above, you can cycle through my experience and skills in different fields. I would be happy to answer any questions about my skills and experience. Head over to the contact page if you have any questions, comments, or concerns! 
              </p>
            </div>
          </div>
          <div key={this.state.key + 1} className={"animated " + this.state.listClass1} id="Portfolio-Skill">
            <div className="Skill-Box">
              <ul>
                <li><b>JavaScript</b></li>
                <li><b>C#</b></li>
                <li>Python</li>
                <li><b>CSS</b></li>
                <li>HTML</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>RegEx</li>
              </ul>
              <p className="Skills-P">
              My primary languages currently are <b>JavaScript</b> and <b>C#</b>. I am most proficient in JavaScript, and use it professionaly. I use C# for my personal projects, including Unity3D Engine. I mainly use <b>Python</b> for fun!
              </p>
            </div>
          </div>
          <div key={this.state.key + 2} className={"animated " + this.state.listClass2} id="Portfolio-Skill">
            <div className="Skill-Box">
              <ul>
                <li><b>Express</b></li>
                <li>Session</li>
                <li>Cluster</li>
                <li><b>Redis</b></li>
                <li>PM2</li>
                <li><b>Mongoose</b></li>
                <li>Sequelize</li>
                <li>Axios</li>
              </ul>
              <p className="Skills-P">
                Most of my projects contain a Node backend. I build my own routes and APIs with <b>Express</b>. I am experienced tracking users across my site using <b>Express-Session</b>. I also have set-up my own caching service with <b>Redis</b>.
              </p>
            </div>
          </div>
          <div key={this.state.key + 3} className={"animated " + this.state.listClass3} id="Portfolio-Skill">
            <div className="Skill-Box">
              <ul>
                <li>Databases</li>
                <li><b>Authentication</b></li>
                <li><b>Login & Users</b></li>
                <li>Hashing</li>
                <li>Caching</li>
                <li><b>Web Crawling</b></li>
                <li>Cookies</li>
                <li><b>Deployment</b></li>
              </ul>
              <p className="Skills-P">
                I have experience with many advanced web development concepts. I have put many into practice. I am passionate about efficiency and using creative and powerful solutions to common problems
              </p>
            </div>
          </div>
          {/* <div key={this.state.key + 4} className={"animated " + this.state.listClass4} id="Portfolio-Skill">
            <div className="Skill-Box">
              Neque est ipsum repudiandae quisquam temporibus exercitationem. Ut rerum beatae adipisci maxime perferendis. Quas quos molestias est. Et officia enim dolore qui omnis molestiae. Exercitationem inventore mollitia et commodi enim aliquam.
            </div>
          </div> */}
        </div>
        
        <ProjectList />
      </div>
    );
  }
}

export default Portfolio;