import React from 'react';
import { connect } from 'react-redux';
import { Route,Routes} from 'react-router-dom';
import Converter from './components/converter/converter';
import CurrentRate from './components/current-rate/current-rate';
import ErrorPage from './components/error-page/error-page';
// import NotFoundPage from './components/not-found/not-found';


const App = ({ currentLanguage, currentRate }) => {
  if(!currentRate) {
    return <ErrorPage/>
  }

  return(
    <Routes>
      <Route path="/" element={<Converter currentLanguage={currentLanguage} currentRate={currentRate}/>} />
      <Route path="/current-rate" element={<CurrentRate currentLanguage={currentLanguage} />} />
    </Routes>
  );
};

const mapStateToProps = (state) => {
  return {
    currentLanguage: state.currentLanguage,
    currentRate: state.currentRate,
  };
};

export default connect(mapStateToProps, null)(App);
