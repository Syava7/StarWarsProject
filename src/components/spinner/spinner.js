import React from 'react';

import './spinner.css';
import { randomFillSync } from 'crypto';

const Spinner = () => {
  return (
    <div className="lds-css">
      <div className="lds-double-ring">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;


