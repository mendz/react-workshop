import React from 'react';

const Smurf = ({ name, desc, src }) => (
  <div className="text-center">
    <img className="mb-5" src={src} width="100" height="100" />
    <h3 className="mb-4">{name}</h3>
    <p className="font-italic">{desc}</p>
  </div>
);

export default Smurf;