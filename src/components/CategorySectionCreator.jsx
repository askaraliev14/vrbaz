import { Box, Container } from '@mui/material';
import React from 'react';
import CategorySectionHeader from './CategorySectionHeader';

const CategorySectionCreator = ({
  icon,
  seeMoreLink,
  title,
  children
}) => {
  return <Box mb={7.5}>
      <Container sx={{
      pb: '1rem'
    }}>
        {title && <CategorySectionHeader title={title} seeMoreLink={seeMoreLink} icon={icon} />}

        {children}
      </Container>
    </Box>;
};

export default CategorySectionCreator;