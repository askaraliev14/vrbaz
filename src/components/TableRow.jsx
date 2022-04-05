import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
const TableRow = styled(Card)({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  borderRadius: '10px',
  cursor: 'pointer',
  '& > *': {
    flex: '1 1 0'
  },
  '& .pre': {
    whiteSpace: 'pre'
  }
});
export default TableRow;