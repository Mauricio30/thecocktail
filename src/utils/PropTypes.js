import PropTypes from 'prop-types';

export const BUTTON_TYPES = ['primary', 'secondary', 'empty'];
export const BUTTON_SIZES = ['small', 'medium', 'large'];

export default {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
      ])
    )
  ]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  stringOrNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  animation: PropTypes.shape({
    initial: PropTypes.objectOf([PropTypes.string, PropTypes.number]),
    animate: PropTypes.objectOf([PropTypes.string, PropTypes.number]),
    transition: PropTypes.objectOf([PropTypes.string, PropTypes.number]),
    variants: PropTypes.objectOf([PropTypes.string, PropTypes.number])
  }),
  button: PropTypes.oneOf(BUTTON_TYPES),
  buttonSizes: PropTypes.oneOf(BUTTON_SIZES),
  ...PropTypes
};
