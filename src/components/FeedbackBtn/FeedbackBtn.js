import PropTypes from 'prop-types';
import React from 'react';
import { Button } from './FeedbackBtn.styled';

export default function FeedbackBtn({ options, onFeedbackBtn }) {
  return options.map(option => (
      <Button type="button" key={option} onClick={() => onFeedbackBtn(option)}>
      {option}
    </Button>
  ));
}
FeedbackBtn.propTypes = {
  options: PropTypes.array,
  handleIncrement: PropTypes.func,
};
