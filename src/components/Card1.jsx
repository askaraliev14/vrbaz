import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
const Card1 = styled(Card)({
  position: 'relative',
  padding: '1.5rem 1.75rem',
  ['@media only screen and (max-width: 678px)']: {
    padding: '1rem'
  }
});
export default Card1;