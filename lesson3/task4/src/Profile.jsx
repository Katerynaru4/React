import React from 'react';

const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const Profile = (props) => {
  const birthDate = new Date(props.userData.birthDate);
  const date = `${birthDate.getDate()} ${month[birthDate.getMonth()]} ${String(
    birthDate.getFullYear()
  ).slice(2)}`;
  return (
    <>
      <div className="profile__name">
        {props.userData.firstName} {props.userData.lastName}
      </div>
      <div className="profile__birth">
        Was born {date} in {props.userData.birthPlace}
      </div>
    </>
  );
};

export default Profile;
