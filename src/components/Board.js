import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: CARD_DATA.cards
    };
  }
  
  render() {
    const cardList =this.state.cards.map((card) => {
      const {id, text, emoji} = card;
      return (<Card key={id} text={text} emoji={emoji} /> );
    });

    
    return (
      <div className ="board">
        {cardList}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
