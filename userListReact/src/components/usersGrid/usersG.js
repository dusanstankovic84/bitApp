import React from 'react';
import  { data }  from "../usersData/randomUsers";
import { User } from '../usersGrid/userG';
import '../usersGrid/usersG.css';

const UsersG = () => {
    
    return (
        <ul className='Users__list'>
            {data.results.map(person => <User
                key={person.login.uuid}
                img={person.picture.thumbnail}
                name={person.name.first}
                email={(person.email).slice(0,3)+"...@"+((person.email).split("@"))[1]}
                dob={person.dob.date} />)}
        </ul>
    )
}

export { UsersG }