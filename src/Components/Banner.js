import { NavLink } from 'react-router-dom';

function Banner() {
    return (
        <div className="row">
            <div className="col text-center pt-3" style={{background: 'darkred'}}>
                <p style={{ color: 'white' }}><b>Free Shipping</b> On Orders 45 EUR or More | Use promo code <b>CFDR</b> in cart | <u>SEE TERMS</u></p>
            </div>
        </div>
    )
}

export default Banner;