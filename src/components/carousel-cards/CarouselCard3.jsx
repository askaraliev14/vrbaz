// import BazarCard from "components/BazarCard";
// import BazarImage from "components/BazarImage";
// import FlexBox from "components/FlexBox";
// import { H2, Paragraph, Small } from "components/Typography";
// import { styled } from "@mui/material";
// import Link from "next/link";
// import React from "react"; // styled components
//
// const ContentWrapper = styled(BazarCard)(({
//   theme
// }) => ({
//   boxShadow: theme.shadows[4],
//   borderRadius: "2px",
//   height: "100%"
// }));
// const StyledFlexBox = styled(FlexBox)(() => ({
//   flexDirection: "column",
//   alignItems: "center",
//   padding: "1rem",
//   paddingTop: "3rem"
// }));
// const StyledShopButton = styled(Small)(({
//   theme
// }) => ({
//   fontWeight: 900,
//   borderBottom: `2px solid ${theme.palette.primary.main}`,
//   lineHeight: 1.6
// })); // component props interface
//
// const CarouselCard3 = ({
//   carouselData
// }) => {
//   return <ContentWrapper>
//       <StyledFlexBox>
//         <H2 mb="0.5rem" textAlign="center" lineHeight={1.2}>
//           {carouselData.title}
//         </H2>
//         <Paragraph color="grey.600" textAlign="center" mb="1.5rem">
//           Starting at ${carouselData.price} & save upto {carouselData.off}%
//         </Paragraph>
//
//         <Link href={`/product/${carouselData.id}`}>
//           <a>
//             <StyledShopButton>{carouselData.buttonText}</StyledShopButton>
//           </a>
//         </Link>
//       </StyledFlexBox>
//
//       <BazarImage width="100%" src={carouselData.imgUrl} alt="shoes" />
//     </ContentWrapper>;
// };
//
// export default CarouselCard3;