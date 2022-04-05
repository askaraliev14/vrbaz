import { compose, display, spacing, styled } from '@mui/system';
const BazarImage = styled('img')(compose(spacing, display));
BazarImage.defaultProps = {
  display: 'block'
};
export default BazarImage; // compose,
// borders,
// display,
// flexbox,
// palette,
// positions,
// shadows,
// sizing,
// spacing,
// typography