import React from 'react';
import styles from './Homepage.module.css'; 
import HERO from '../../components/Hero/HERO'; 
import Card from '../../components/Card/Card'; 

function Homepage() {
  return (
    <div className={styles.homePage}>
      <HERO />
      <div className={styles.cardContainer}>
        <Card />
        <Card color="#e3fc87" />
        <Card color="#ffb6e6"/>
      </div>
    </div>
  );
}

export default Homepage;