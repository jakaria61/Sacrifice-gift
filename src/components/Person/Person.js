import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Richperson from '../Rich/Richperson';
import './Person.css'

const Person = () => {
    const [richmans, setRichman] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./FakeData.JSON')
            .then(res => res.json())
            .then(data => setRichman(data))
    }, [])
    const handelButton = (richman) => {
        const newValue = [...cart, richman];
        setCart(newValue);
    }
    return (
        <div className="body-container">
            <div className='left-side'>
                {
                    richmans.map(richman => <Richperson
                        handelButton={handelButton}
                        key={richman.id}
                        richman={richman}></Richperson>)
                }
            </div>
            <div >
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Person;