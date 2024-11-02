import React from 'react';

const Info = ({ info_map }) => {
    return (
      <div>
        {Array.from(info_map.entries()).map(([title, information], index) => (
          <p key={index}>
            <strong>{title}:</strong> {information}
          </p>
        ))}
      </div>
    );
  };
  

export default Info;
