import React, { Component } from 'react';
import Hangman from './Hangman';
import Letters from './Letters';
import GameStatus from './GameStatus';
import styles from './Game.css';

export default class Game extends Component {

  render() {

    return (
      <section className={styles.game}>
        <h1>Skyrim Hangman</h1>
        <Hangman />
        <Letters />
        <GameStatus />
      </section>
    );
  }
}

