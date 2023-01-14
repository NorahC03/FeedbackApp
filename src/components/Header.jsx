import PropTypes from 'prop-types';
function Header({ text, bgColor, Color }) {
  const headerColor = {
    backgroundColor: bgColor,
    color: Color,
  };
  return (
    <>
      <header style={headerColor}>
        <div className="container">
          <h2>{text}</h2>
        </div>
      </header>
    </>
  );
}
Header.defaultProps = {
  text: 'Its a new life.....I am felling good',
  bgColor: 'rgba(0,0,0,0.4)',
  color: '#13e0e3',
};
Header.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  Color: PropTypes.string,
};
export default Header;
