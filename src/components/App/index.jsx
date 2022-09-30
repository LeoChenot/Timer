import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchReadUserWithToken } from '../../actions/user';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import './index.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReadUserWithToken());
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
