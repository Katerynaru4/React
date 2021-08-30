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

const getFormattedDate = (birthDate) =>
  `${birthDate.getDate()} ${month[birthDate.getMonth()]} ${String(
    birthDate.getFullYear()
  ).slice(2)}`;

const Profile = (props) => {
  const birthDate = getFormattedDate(new Date(props.userData.birthDate));

  return (
    <>
      <div className="profile__name">
        {props.userData.firstName} {props.userData.lastName}
      </div>
      <div className="profile__birth">
        {`Was born ${birthDate} in ${props.userData.birthPlace}`}
      </div>
    </>
  );
};

export default Profile;
