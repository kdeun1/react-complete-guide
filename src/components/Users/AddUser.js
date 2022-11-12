import { useState, useRef } from 'react';
import Wrapper from '../Helpers/Wrapper';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = props => {
  // 2. useRef()를 사용하여 state를 대체
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // 1. state 사용하여 데이터 관리
  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = e => {
    e.preventDefault();
    const enteredNameRefValue = nameInputRef.current.value;
    const enteredAgeRefValue = ageInputRef.current.value;

    if (
      enteredNameRefValue.trim().length === 0 ||
      enteredAgeRefValue.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAgeRefValue < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser({
      name: enteredNameRefValue,
      age: enteredAgeRefValue,
    });
    // setEnteredUsername('');
    // setEnteredAge('');
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  // const usernameChangeHandler = e => {
  //   setEnteredUsername(e.target.value);
  // };
  // const ageChangeHandler = e => {
  //   setEnteredAge(e.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
