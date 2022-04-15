import FlexBox from 'components/FlexBox';
import BeautyProducts from 'components/icons/BeautyProducts';
import Camera from 'components/icons/Camera';
import Sofa from 'components/icons/Sofa';
import WomenDress from 'components/icons/WomenDress';
import SaleLayout1 from 'components/layout/SaleLayout1';
import SaleNavbar from 'components/navbar/SaleNavbar';
import ProductCard1 from 'components/product-cards/ProductCard1';
import Sticky from 'components/sticky/Sticky';
import { H1, H5, Span } from 'components/Typography';
import { default as productDB } from 'data/product-database';
import { Chip, Container, Grid, Pagination } from '@mui/material';
import { Box } from '@mui/system';
import React, { useCallback, useEffect, useState } from 'react';

const SalePage1 = () => {
  const productPerPage = 28;
  const [productList, setProductList] = useState([]);
  const [isFixed, setIsFixed] = useState(false);
  const [selected, setSelected] = useState(1);
  const [page, setPage] = useState(1);
  const handleCategoryClick = useCallback(category => () => {
    setSelected(category);
  }, []);
  const toggleIsFixed = useCallback(fixed => {
    setIsFixed(fixed);
  }, []);

  const handlePageChange = (_e, page) => {
    console.log(page);
    setPage(page);
  };

  const renderProductCount = () => {
    // starting index = 0
    let startNumber = (page - 1) * productPerPage;
    let endNumber = page * productPerPage;
    let totalProduct = productDB.length;
    if (endNumber > totalProduct) endNumber = totalProduct;
    return `Showing ${startNumber - 1}-${endNumber} of ${totalProduct} products`;
  };

  useEffect(() => {
    setProductList(productDB.slice(page * productPerPage, (page + 1) * productPerPage));
  }, [page]);
  return <SaleLayout1>
      <Container sx={{
      mt: '2rem'
    }}>
        <Sticky fixedOn={0} onSticky={toggleIsFixed}>
          {!isFixed ? <Box display="none" /> : <SaleNavbar saleCategoryList={saleCategoryList} />}
        </Sticky>

        <Box>
          <FlexBox mb={4} flexWrap="wrap">
            <H1 color="primary.main" mr={1} lineHeight="1">
              Flash Deals,
            </H1>
            <H1 color="grey.600" lineHeight="1">
              Enjoy Upto 80% discounts
            </H1>
          </FlexBox>
          <Box mb={4} overflow="hidden">
            <FlexBox m={-1.5} flexWrap="wrap">
              {saleCategoryList.map((item, ind) => <FlexBox sx={{
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'grey.400',
              minWidth: '200px',
              height: '175px',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              m: '0.75rem',
              flex: '1 1 0',
              position: 'relative',
              background: ind === selected ? 'white' : 'transparent',
              transition: 'all 250ms ease-in-out',
              cursor: 'pointer'
            }} key={ind} onClick={handleCategoryClick(ind)}>
                  <item.icon fontSize="inherit" sx={{
                fontSize: 44
              }} color={ind === selected ? 'primary' : 'secondary'} />

                  <H5 color={ind === selected ? 'primary.main' : 'inherit'}>
                    {item.title}
                  </H5>
                  <Chip label="Upto 40% off" color="primary" size="small" sx={{
                fontWeight: 600,
                fontSize: '10px',
                p: '5px 10px',
                backgroundColor: ind === selected ? 'primary.main' : 'grey.300',
                color: ind === selected ? 'white' : 'inherit',
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                boxShadow: ind === selected ? '0px 8px 20px -5px rgba(255, 103, 128, 0.9)' : 'inherit'
              }} />
                </FlexBox>)}
            </FlexBox>
          </Box>
        </Box>

        <Grid container spacing={3} minHeight={500}>
          {productList.map((item, ind) => <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
              <ProductCard1 {...item} />
            </Grid>)}
        </Grid>

        <FlexBox flexWrap="wrap" justifyContent="space-between" alignItems="center" my="4rem">
          <Span>{renderProductCount()}</Span>
          <Pagination page={page} variant="outlined" color="primary" count={Math.ceil(productDB.length / productPerPage)} onChange={handlePageChange} />
        </FlexBox>
      </Container>
    </SaleLayout1>;
};

const saleCategoryList = [{
  icon: WomenDress,
  title: 'Women'
}, {
  icon: BeautyProducts,
  title: 'Cosmetics'
}, {
  icon: Camera,
  title: 'Eelctronics'
}, {
  icon: Sofa,
  title: 'Furniture'
}];
export default SalePage1;