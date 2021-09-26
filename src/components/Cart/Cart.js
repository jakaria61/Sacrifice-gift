import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    // total calculation 
    let total = 0;
    for (const cost of cart) {
        total = total + cost.donate;
    }
    return (
        <div className='right-side'>
            <h3><i class="far fa-user"></i> Donated Person: {cart.length}</h3>
            <h3>Total Donation:${total}/-</h3>

            <div>

                {
                    cart.map(data => <div className="added-people">
                        <img src={data.img} alt="" />
                        <p>{data.name}</p>

                    </div>
                    )
                }
            </div>
            <button className='regular-btn'>View Details</button>
        </div>
    );
};

export default Cart;