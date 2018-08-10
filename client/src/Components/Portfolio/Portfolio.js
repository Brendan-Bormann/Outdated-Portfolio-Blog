import React, { Component } from 'react';
import './Portfolio.css';

import ProjectList from './Projects/ProjectList';

class Portfolio extends Component {

  state = {}

  render() {
    return (
      <div className="Portfolio">
        <p>Welcome to my Portfolio!</p>
        <br />
        <p>
          Placeat eius quasi quo. Animi sed qui facere. Sit voluptatum sit dolor. Animi blanditiis fugit a sapiente soluta sapiente.
 
          Porro magni reprehenderit aut sint esse maiores. Iusto quia aspernatur at natus consequuntur porro animi possimus dolores. Ut sunt fuga illo repellat alias repellat cupiditate omnis suscipit. Ipsam quasi eligendi. Fuga fugiat beatae eaque delectus rerum at. Esse porro est perferendis labore sunt tenetur laborum.
          
          Iure suscipit maiores voluptas. Consectetur qui officiis optio rerum. Eveniet nisi aut ea sunt commodi. Quia animi sint libero dolores est qui. Dolor quis labore eum similique vel. Fugit assumenda officia.
        </p>
        <ProjectList />
      </div>
    );
  }
}

export default Portfolio;