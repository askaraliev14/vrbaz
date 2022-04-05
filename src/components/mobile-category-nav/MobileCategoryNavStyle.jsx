import { styled } from '@mui/material/styles';
import { layoutConstant } from 'utils/constants';
const MobileCategoryNavStyle = styled('div')(({
  theme
}) => ({
  position: 'relative',
  '& .header': {
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0
  },
  '& .main-category-holder': {
    position: 'fixed',
    left: 0,
    top: layoutConstant.mobileHeaderHeight,
    bottom: layoutConstant.mobileNavHeight,
    background: theme.palette.grey[300],
    overflowY: 'auto',
    '& .main-category-box': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.5rem',
      height: '80px',
      width: '90px',
      borderBottom: '1px solid',
      borderBottomColor: theme.palette.grey[300],
      borderLeftColor: theme.palette.grey[600],
      cursor: 'pointer'
    }
  },
  '& .container': {
    position: 'fixed',
    top: layoutConstant.mobileHeaderHeight,
    bottom: layoutConstant.mobileNavHeight,
    left: '90px',
    padding: '0.5rem 1rem',
    flex: '1 1 0',
    overflowY: 'auto'
  },
  '& .ellipsis': {
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}));
export default MobileCategoryNavStyle;