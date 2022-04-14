// import FlexBox from 'components/FlexBox';
// import SaleLayout2 from 'components/layout/SaleLayout2';
// import ProductCard1 from 'components/product-cards/ProductCard1';
// import { Span } from 'components/Typography';
// import productDatabase from 'data/product-database';
// import { Container, Grid, Pagination } from '@mui/material';
// import React, { useEffect, useState } from 'react';
//
// const SalePage2 = () => {
//   const productPerPage = 28;
//   const [productList, setProductList] = useState([]);
//   const [page, setPage] = useState(1);
//
//   const handlePageChange = (_e, page) => {
//     console.log(page);
//     setPage(page);
//   };
//
//   const renderProductCount = () => {
//     // starting index = 0
//     let startNumber = (page - 1) * productPerPage;
//     let endNumber = page * productPerPage;
//     let totalProduct = productDatabase.length;
//     if (endNumber > totalProduct) endNumber = totalProduct;
//     return `Showing ${startNumber - 1}-${endNumber} of ${totalProduct} products`;
//   };
//
//   useEffect(() => {
//     setProductList(productDatabase.slice(page * productPerPage, (page + 1) * productPerPage));
//   }, [page]);
//   return <SaleLayout2>
//       <Container sx={{
//       mt: '2rem'
//     }}>
//         <Grid container spacing={3} minHeight={500}>
//           {productList.map((item, ind) => <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
//               <ProductCard1 {...item} />
//             </Grid>)}
//         </Grid>
//
//         <FlexBox flexWrap="wrap" justifyContent="space-between" alignItems="center" my="4rem">
//           <Span>{renderProductCount()}</Span>
//           <Pagination page={page} variant="outlined" color="primary" count={Math.ceil(productDatabase.length / productPerPage)} onChange={handlePageChange} />
//         </FlexBox>
//       </Container>
//     </SaleLayout2>;
// };
//
// export default SalePage2;