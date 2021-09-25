import PropTypes from 'prop-types';
import { Title } from './SectionTitle.styled';

export default function SectionTitle({ title, children }) {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
