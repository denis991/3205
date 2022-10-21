import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchRates } from '../../store/api-actions';

const ErrorPage = () => {
  const dispatch = useDispatch();
  
  return (
    <React.Fragment>
      <main>
        <h1>something happened wrong</h1>
        <button
          onClick={() => dispatch(fetchRates())}
        >Try again</button>
      </main>
    </React.Fragment>
  );
};

export default ErrorPage;