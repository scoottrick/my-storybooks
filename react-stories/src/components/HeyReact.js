import React from 'react';
import PropTypes from 'prop-types';

const HeyReact = props => {
  return (
    <h1
      style={{
        textAlign: 'center',
        color: props.color || 'black',
        backgroundColor: props.backgroundColor || 'transparent',
      }}
    >
      Hey {props.name}
    </h1>
  );
};

HeyReact.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default HeyReact;
