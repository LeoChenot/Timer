import React from 'react';
import { useSelector } from 'react-redux';
import Timer from '../Timer';

// import PropTypes from 'prop-types';
import './style.scss';

function Main() {
  const { timersData } = useSelector((state) => state.timersReducer);

  // useEffect(() => {
  //   timersData.forEach((timer) => {
  //     console.log(`${timer.id}: isActive -> ${timer.isActive}`);
  //   });
  // }, [timersData]);

  return (
    <main className="main">
      <h2>Timers :</h2>
      <div className="main__timersList">
        {timersData.map((timer) => (
          <Timer
            key={timer.id}
            id={timer.id}
            name={timer.name}
            delay={timer.delay}
            currentDelay={timer.currentDelay}
            isActive={timer.isActive}
            intervalId={timer.intervalId}
          />
        ))}
      </div>
    </main>
  );
}

Main.propTypes = {

};

export default Main;
