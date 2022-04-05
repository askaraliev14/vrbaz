import { IconButton } from '@mui/material';
import { bgcolor, border, compose, positions, sizing, spacing, styled, typography } from '@mui/system';
const BazarIconButton = styled(IconButton)(compose(spacing, positions, typography, sizing, border, bgcolor));
export default BazarIconButton;