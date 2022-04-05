import FlexBox from 'components/FlexBox';
import NavbarLayout from 'components/layout/NavbarLayout';
import ProductCard1List from 'components/products/ProductCard1List';
import ProductCard9List from 'components/products/ProductCard9List';
import ProductFilterCard from 'components/products/ProductFilterCard';
import Sidenav from 'components/sidenav/Sidenav';
import { H5, Paragraph } from 'components/Typography';
import useWindowSize from 'hooks/useWindowSize';
import Apps from '@mui/icons-material/Apps';
import FilterList from '@mui/icons-material/FilterList';
import ViewList from '@mui/icons-material/ViewList';
import { Card, Grid, IconButton, MenuItem, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useCallback, useState } from 'react';

const ProductSearchResult = () => {
  const [view, setView] = useState('grid');
  const width = useWindowSize();
  const isTablet = width < 1024;
  const toggleView = useCallback(v => () => {
    setView(v);
  }, []);
  return <NavbarLayout>
      <Box pt={2.5}>
        <Card sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: '55px',
        p: {
          xs: '1.25rem 1.25rem 0.25rem',
          sm: '1rem 1.25rem',
          md: '0.5rem 1.25rem'
        }
      }} elevation={1}>
          <div>
            <H5>Searching for “ mobile phone ”</H5>
            <Paragraph color="grey.600">48 results found</Paragraph>
          </div>
          <FlexBox alignItems="center" flexWrap="wrap" my="0.5rem">
            <FlexBox alignItems="center" flex="1 1 0">
              <Paragraph color="grey.600" mr={2} whiteSpace="pre">
                Short by:
              </Paragraph>
              <TextField variant="outlined" size="small" placeholder="Short by" select defaultValue={sortOptions[0].value} fullWidth sx={{
              flex: '1 1 0',
              mr: '1.75rem',
              minWidth: '150px'
            }}>
                {sortOptions.map(item => <MenuItem value={item.value} key={item.value}>
                    {item.label}
                  </MenuItem>)}
              </TextField>
            </FlexBox>

            <FlexBox alignItems="center" my="0.25rem">
              <Paragraph color="grey.600" mr={1}>
                View:
              </Paragraph>
              <IconButton onClick={toggleView('grid')}>
                <Apps color={view === 'grid' ? 'primary' : 'inherit'} fontSize="small" />
              </IconButton>
              <IconButton onClick={toggleView('list')}>
                <ViewList color={view === 'list' ? 'primary' : 'inherit'} fontSize="small" />
              </IconButton>

              {!!isTablet && <Sidenav handle={<IconButton>
                      <FilterList fontSize="small" />
                    </IconButton>}>
                  <ProductFilterCard />
                </Sidenav>}
            </FlexBox>
          </FlexBox>
        </Card>

        <Grid container spacing={3}>
          <Grid item lg={3} xs={12} sx={{
          '@media only screen and (max-width: 1024px)': {
            display: 'none'
          }
        }}>
            <ProductFilterCard />
          </Grid>

          <Grid item lg={9} xs={12}>
            {view === 'grid' ? <ProductCard1List /> : <ProductCard9List />}
          </Grid>
        </Grid>
      </Box>
    </NavbarLayout>;
};

const sortOptions = [{
  label: 'Relevance',
  value: 'Relevance'
}, {
  label: 'Date',
  value: 'Date'
}, {
  label: 'Price Low to High',
  value: 'Price Low to High'
}, {
  label: 'Price High to Low',
  value: 'Price High to Low'
}];
export default ProductSearchResult;