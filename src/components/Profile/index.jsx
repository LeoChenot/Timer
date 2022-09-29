/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import './style.scss';

function Profile() {
  const {
    id, email, createdAt, updatedAt,
  } = useSelector((state) => state.userReducer);

  let formattedCreatedAt;
  if (createdAt) {
    formattedCreatedAt = new Date(createdAt);
    const getDayOfCreatedAt = formattedCreatedAt.getDate().toString().length === 1 ? `0${formattedCreatedAt.getDate()}` : formattedCreatedAt.getDate();
    const getMonthOfCreatedAt = (formattedCreatedAt.getMonth() + 1).toString().length === 1 ? `0${formattedCreatedAt.getMonth() + 1}` : formattedCreatedAt.getMonth() + 1;
    const getYearOfCreatedAt = formattedCreatedAt.getFullYear();
    formattedCreatedAt = `${getDayOfCreatedAt}/${getMonthOfCreatedAt}/${getYearOfCreatedAt}`;
  }

  let formattedUpdatedAt;
  if (updatedAt) {
    formattedUpdatedAt = new Date(updatedAt);
    const getDayOfCreatedAt = formattedUpdatedAt.getDate().toString().length === 1 ? `0${formattedUpdatedAt.getDate()}` : formattedUpdatedAt.getDate();
    const getMonthOfCreatedAt = (formattedUpdatedAt.getMonth() + 1).toString().length === 1 ? `0${formattedUpdatedAt.getMonth() + 1}` : formattedUpdatedAt.getMonth() + 1;
    const getYearOfCreatedAt = formattedUpdatedAt.getFullYear();
    formattedUpdatedAt = `${getDayOfCreatedAt}/${getMonthOfCreatedAt}/${getYearOfCreatedAt}`;
  }

  return (
    <div className="profile">
      profile
      <br />
      <br />
      <p>
        id :
        {' '}
        {id}
      </p>
      <p>
        email :
        {' '}
        {email}
      </p>
      <p>
        createdAt :
        {' '}
        {formattedCreatedAt}
      </p>
      <p>
        updatedAt :
        {' '}
        {formattedUpdatedAt}
      </p>
    </div>
  );
}

Profile.propTypes = {

};

export default Profile;
