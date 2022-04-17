import React, { FC } from 'react';
import { IPerson } from '../../App.model';
import './Person.css';


const Person: FC<IPerson> = ({name, address, age, phone_number,picture}) => (
  <div className="container">
    <img className="user-avatar"
      src={picture} />

    <div className="sub-container">
      <div className="label">
        {name}, {age}, {phone_number}
      </div>

      <p className="description">
        {address}
      </p>
    </div>
  </div>
);

export default Person;
