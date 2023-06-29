import React from 'react';

const Title = ({ title }) => {
  return (
    <h1 className="display-1 fw-medium mt-2 mb-5 about-heading">
      {title}
    </h1>
  );
}

export default Title;
