import { FC } from 'react';
import { IPerson } from '../../App.model';
import './Person.css';


const Person: FC<IPerson> = ({name, address, age, phone_number,picture}) => (
  <div className="container" data-testid="Person">
    <img className="user-avatar" src={picture} alt="profile" data-testid="img"/>

    <div className="sub-container">
      <div className="label" data-testid="label">
        {name}, {age}, {phone_number}
      </div>

      <p className="description" data-testid="description">
        {address}
      </p>
    </div>
  </div>
);

export default Person;
