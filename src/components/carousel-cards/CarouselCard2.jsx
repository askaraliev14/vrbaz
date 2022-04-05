// import BazarButton from "components/BazarButton";
// import BazarImage from "components/BazarImage";
// import Countdown from "components/fashion-shop/countdown";
// import { H2, H3, H4, Paragraph } from "components/Typography";
// import { Favorite } from "@mui/icons-material";
// import { Box, Grid, styled } from "@mui/material";
// import React from "react"; //component props interface
//
// // styled component
// const ContentWrapper = styled(Box)(({
//   theme
// }) => ({
//   [theme.breakpoints.down("sm")]: {
//     "&": {
//       padding: "2rem",
//       width: "100%"
//     }
//   },
//   [theme.breakpoints.between("sm", "md")]: {
//     "&": {
//       padding: "0 3rem",
//       paddingBottom: "2rem",
//       width: "80%"
//     }
//   }
// }));
//
// const CarouselCard2 = ({
//   imgUrl,
//   productName,
//   expireDate
// }) => {
//   return <Grid container alignItems="center">
//       <Grid item lg={6} md={5} sm={12} xs={12}>
//         <BazarImage src={imgUrl} alt="xiaomi-watch-1" sx={{
//         display: "block",
//         mx: "auto",
//         maxWidth: "100%",
//         p: "2.5rem"
//       }} />
//       </Grid>
//       <Grid item lg={4} md={5} sm={12} xs={12}>
//         <ContentWrapper>
//           <H3 color="primary.500" mb="0.2rem">
//             Deal Of The Day
//           </H3>
//           <H2>{productName}</H2>
//           <Paragraph mt="0.3rem">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
//             lobortis consequat eu, quam etiam at quis ut convallis.
//           </Paragraph>
//           <H4 mt="1.5rem" mb="0.3rem">
//             Fresh Deal Everyday, Get It Now!
//           </H4>
//
//           {
//           /* countdown time */
//         }
//           <Countdown expireDate={expireDate} />
//
//           <Box mt="1.5rem">
//             <BazarButton className="button-link" variant="contained" color="primary" disableElevation sx={{
//             px: "1.75rem",
//             height: "44px",
//             borderRadius: "8px",
//             mr: "1rem"
//           }}>
//               BUY NOW
//             </BazarButton>
//             <BazarButton sx={{
//             px: "1rem",
//             height: "44px",
//             borderRadius: "8px",
//             backgroundColor: "grey.500",
//             color: "white",
//             "&:hover": {
//               backgroundColor: "grey.500"
//             }
//           }}>
//               <Favorite />
//             </BazarButton>
//           </Box>
//         </ContentWrapper>
//       </Grid>
//     </Grid>;
// };
//
// export default CarouselCard2;