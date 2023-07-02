import React from 'react';

export default function Title({ title }) {
  return (
    <>
    <div className="ms-2 d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block px-2 ps-xxl-5 py-3">
      <h1 className="display-1 fw-medium m-2 about-heading">
        {title}
      </h1>
    </div>
    
    <div className="ms-2 d-block d-sm-none px-2 ps-xxl-5 py-3">
      <h1 className="display-1 text-center fw-medium mt-2 mb-0 mb-lg-5 mb-xl-5 mb-xxl-5 about-heading">
        {title}
      </h1>
    </div>
    </>
  );
}
