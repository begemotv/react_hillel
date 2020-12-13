import React from 'react';

import './card-stays.css';

const CardStays = () => {
    return (
        <article>
            <div className="article__photo">
                <img src="https://a0.muscache.com/im/pictures/cd6e3b01-fa55-45f6-8609-c1b92778b6fd.jpg" alt="card photo" />
            </div>
            <div className="article__description">
                <p>Entire apartment in Union Square</p>
                <h2>Cozy Studio in Union Square Park</h2>
                <div>--</div>
                <div className="appartment__features">
                    <span className="appartment__features__item">2 guests</span>
                    <span className="appartment__features__item">Studio</span>
                    <span className="appartment__features__item">2 beds</span>
                    <span className="appartment__features__item">1 bath</span>
                </div>
                <div className="appartment__amenities">
                    <span className="appartment__amenities__item">Wifi</span>
                    <span className="appartment__amenities__item">Air conditioning</span>
                    <span className="appartment__amenities__item">Kitchen</span>
                    <span className="appartment__amenities__item">Self check-in</span>
                </div>
                <div className="appartment__dates">Jan 27 - 30</div>
                <div className="appartment__rating">
                    <span className="star">★</span>
                    <span className="appartment__rating__text">4.61</span>
                    <span className="appartment__rating__reviews">(28)</span>
                </div>
            </div>
            <div className="article__price">
                <button className="appartment__like__btn"></button>
                <div className="appartment__price__detailed">
                    <p className="price__night"><strong>$67</strong> / night</p>
                    <p className="price__total">$241 total</p>
                </div>
            </div>
        </article>
    )
}

export default CardStays;