import PropTypes from 'prop-types';
function Button({ children, version, isDisabled, type }) {
  return (
    <button disabled={isDisabled} type={type} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}
export default Button;

Button.defaultProps = {
  version: 'primary',
  isDisabled: false,
  type: 'button',
};
Button.propType = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
  type: PropTypes.string,
};
