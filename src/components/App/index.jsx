import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkLoginWithToken } from '../../actions/auth';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import './index.scss';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('check');
    dispatch(checkLoginWithToken());
  }, []);
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
