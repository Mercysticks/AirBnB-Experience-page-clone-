import React from 'react';
import image from '../Asset/Group 77.png';

export default function Hero () {
    return (
        <section className='hero__section'>
            <img src={image} alt="" className='hero__image'/>
            <h1 className='hero__title'>Online Experiences</h1>
            <p className='hero__desc'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}