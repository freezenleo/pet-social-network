import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../../utils/mutations';

// import Auth from '../../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  // const [login, { error }] = useMutation(LOGIN_USER);.

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await login({
  //       variables: { ...formState },
  //     });

  //     Auth.login(data.login.token);
  //   } catch (e) {
  //     console.error(e);
  //   }

  //   // clear form values
  //   setFormState({
  //     email: '',
  //     password: '',
  //   });
  // };

  return (
    <div>
      <h3>Welcome back!</h3>
      <h4>Login</h4>
        {/* <form onSubmit={handleFormSubmit}> */}
        <form>
          <label htmlFor="email">Email:</label> 
          <input
            className='form-input'
            placeholder='Your email'
            name='email'
            type='email'
            id='email'
            value={formState.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            className='form-input'
            placeholder='******'
            name='password'
            type='password'
            id='password'
            value={formState.password}
            onChange={handleChange}
          />
          <button className='btn d-block w-100' type='submit'>
            Submit
          </button>
        </form>
        {/* {error && <div>Login failed</div>} */}
    </div>
      
  );
};

export default Login;