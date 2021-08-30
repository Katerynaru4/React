import React from 'react';
import moment from 'moment';

const Profile = (props) => {
  const birthDate = moment(props.userData.birthDate).format('D MMM YY');
  return (
    <>
      <div className="profile__name">
        {`${props.userData.firstName} ${props.userData.lastName}`}
      </div>
      <div className="profile__birth">
        {`Was born ${birthDate} in ${props.userData.birthPlace}`}
      </div>
    </>
  );
};

export default Profile;
