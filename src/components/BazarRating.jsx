import { Rating } from '@mui/material';
import { compose, spacing, styled, typography } from '@mui/system';
const BazarRating = styled(Rating)(compose(spacing, typography));
BazarRating.defaultProps = {
  fontSize: '1.25rem'
};
export default BazarRating;