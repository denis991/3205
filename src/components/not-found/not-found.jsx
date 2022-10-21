import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <main>
        <h1>Page Not Found 404</h1>
        <Link to='/'>to main page</Link>
      </main>
    </React.Fragment>
  );
};

export default NotFoundPage;