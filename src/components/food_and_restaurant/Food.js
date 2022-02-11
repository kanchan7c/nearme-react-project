import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Food = ({ name, view_count, source }) => {
  return (
    <div
      className='food'
      style={{ backgroundImage: `url(${source})`, backgroundSize: 'cover' }}
    >
      <h1>{name}</h1>
      <p>
        <VisibilityIcon />
        <span>{view_count}</span>
      </p>
    </div>
  );
};

export default Food;
