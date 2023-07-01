import React from 'react';

export default function Title({ title }) {
  return (
    <div className="ms-2 px-2 ps-xxl-5 py-3">
      <h1 className="display-1 fw-medium mt-2 mb-0 mb-lg-5 mb-xl-5 mb-xxl-5 about-heading">
        {title}
      </h1>
    </div>
  );
}
