import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);

  return (
    <>
      {keys.map(key => (
        <button key={key} onClick={() => onLeaveFeedback(key)}>
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </button>
      ))}
    </>
  );
};

Controls.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Controls;
