  
import React from 'react';
import '../usersGrid/userG.css';
import PropTypes from 'prop-types';

const User = (props) => {
    let day = new Date(props.dob).getDate();
    let month = new Date(props.dob).getMonth() + 1;
    let year = new Date(props.dob).getFullYear();
    let dob = `${day}-${month}-${year}`;
    return (
        <div className='User__wrapper'>
            <img className='User__img' src={props.img} alt='Users'></img>
            <div className='User__info'>
                <p>Name:{props.name}</p>
                <p>Email:{props.email}</p>
                <p>DOB:{dob}</p>
            </div>
        </div>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired
}

export { User };