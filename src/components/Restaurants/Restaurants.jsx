import React, { useState } from 'react';
import { ButtonRestaurant } from '../ButtonRestaurant/ButtonRestaurant';
import { Restaurant } from "../Restaurant/Restaurant";

import styles from './styles.module.css';

export const Restaurants = ({ restaurants }) => {
    const [activeRestaurant, setActiveRestaurant] = useState(0);

    return (<div className={styles.root}>
        <div>
            <ButtonRestaurant restaurants = {restaurants} setActiveRestaurant={setActiveRestaurant}/>
            <Restaurant restaurant={restaurants[activeRestaurant]} />
        </div>
    </div>)
}