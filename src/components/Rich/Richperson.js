import React from 'react';
import './Richperson.css'
const Richperson = (props) => {
    const { name, age, country, img, donate, Role } = props.richman;
    return (
        <div className='richman-container'>
            <img src={img} alt="" />
            <div className='details-container'>
                <h2>{name}</h2>
                <p>Role: {Role}</p>
                <p>Age: {age}</p>
                <p>Country: {country}</p>
                <h4>Donation:${donate}</h4>
                <button onClick={() => props.handelButton(props.richman)} className='regular-btn'> <i class="far fa-handshake"></i> Donate Now</button>
                <div className='icon-container'>
                    <h1> <a href=""><i class="fab fa-instagram"></i></a> </h1>
                    <h1> <a href=""><i class="fas fa-envelope"></i></a> </h1>
                    <h1> <a href=""><i class="fas fa-phone-alt"></i></a> </h1>
                </div>
            </div>
        </div>
    );
};

export default Richperson;