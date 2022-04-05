import { styled } from '@mui/material';
import { Card } from '@mui/material'; // import { MuiThemeProps } from '@theme/theme'

const ProductCard7Style = styled(Card)(({
  theme
}) => ({
  position: 'relative',
  display: 'flex',
  borderRadius: '10px',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  marginBottom: '1.5rem',
  boxShadow: theme.shadows[2],
  '& .product-details': {
    padding: '20px'
  },
  '& .title': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  '@media only screen and (max-width: 425px)': {
    flexWrap: 'wrap',
    img: {
      height: 'auto',
      minWidth: '100%'
    }
  }
}));
export default ProductCard7Style;