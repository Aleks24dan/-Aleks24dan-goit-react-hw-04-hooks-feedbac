import PropTypes from 'prop-types';
import { StatSection } from './Statistics.styled';
import { Container } from './Statistics.styled';
import { Li, Ul } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <Container>
      {
        <StatSection>
          <Ul>

          <Li>Good: {good} </Li>
          <Li>Neutral: {neutral} </Li>
          <Li>Bad: {bad} </Li>
          <Li>Total: {total} </Li>
          <Li>Positive Feedback: {positivePercentage}% </Li>
          </Ul>
        </StatSection>
      }
    </Container>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
