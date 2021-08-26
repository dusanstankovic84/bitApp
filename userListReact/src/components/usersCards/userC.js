  
import React from 'react';
import '../usersCards/userC.css';

const User = (props) => {
    let day = new Date(props.dob).getDate();
    let month = new Date(props.dob).getMonth() + 1;
    let year = new Date(props.dob).getFullYear();
    let dob = `${day}-${month}-${year}`;
    return (

        <div className='UserC__wrapper'>
            <div>
                <img className='UserC__img' src={props.img} alt='Users'></img>
                <p className="userCname">{props.name}</p>
            </div>
            <div className='UserC__info'>
                <p>Email:{props.email}</p>
                <p>DOB:{dob}</p>
            </div>
        </div>

    )
}


export { User };