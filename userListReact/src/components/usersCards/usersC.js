import React from 'react';
import  {data}  from "../usersData/randomUsers";
import { User } from './userC';
import '../usersCards/usersC.css';

const UsersC = () => {
    return (
        <div className='UsersC__cards disapear'>
            {data.results.map(person => 
            <User
                key={person.login.uuid}
                img={person.picture.thumbnail}
                name={person.name.first}
                email={(person.email).slice(0,3)+"...@"+((person.email).split("@"))[1]}
                dob={person.dob.date} />)}
        </div>
    )
}

export { UsersC }