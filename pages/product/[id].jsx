import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import bazarReactDatabase from "data/bazar-react-database";
import NavbarLayout from "components/layout/NavbarLayout";
import AvailableShops from "components/products/AvailableShops";
import FrequentlyBought from "components/products/FrequentlyBought";
import ProductDescription from "components/products/ProductDescription";
import ProductIntro from "components/products/ProductIntro";
import ProductReview from "components/products/ProductReview";
import RelatedProducts from "components/products/RelatedProducts";
import { Box, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";
import { H2 } from "components/Typography";
import { getFrequentlyBought, getRelatedProducts } from "utils/api/related-products/products";
const StyledTabs = styled(Tabs)(({
  theme
}) => ({
  marginTop: 80,
  marginBottom: 24,
  minHeight: 0,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  "& .inner-tab": {
    fontWeight: 600,
    minHeight: 40,
    textTransform: "capitalize"
  }
}));

const ProductDetails = props => {
  const {
    frequentlyBought,
    relatedProducts
  } = props;
  const router = useRouter();
  const {
    id
  } = router.query;
  const [product, setProduct] = useState();
  useEffect(() => {
    if (id) {
      const productData = bazarReactDatabase.find(item => item.id === parseInt(`${id}`));
      setProduct(productData);
    }
  }, [id]);
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (_event, newValue) => {
    setSelectedOption(newValue);
  };

  return <NavbarLayout>
      {product ? <ProductIntro product={product} /> : <H2>Loading...</H2>}

      <StyledTabs value={selectedOption} onChange={handleOptionClick} indicatorColor="primary" textColor="primary">
        <Tab className="inner-tab" label="Description" />
        <Tab className="inner-tab" label="Review (3)" />
      </StyledTabs>

      <Box mb={6}>
        {selectedOption === 0 && <ProductDescription />}
        {selectedOption === 1 && <ProductReview />}
      </Box>

      <FrequentlyBought productsData={frequentlyBought} />

      <AvailableShops />

      <RelatedProducts productsData={relatedProducts} />
    </NavbarLayout>;
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    //indicates that no page needs be created at build time
    fallback: "blocking" //indicates the type of fallback

  };
};
export async function getStaticProps() {
  const frequentlyBought = await getFrequentlyBought();
  const relatedProducts = await getRelatedProducts();
  return {
    props: {
      frequentlyBought,
      relatedProducts
    }
  };
}
export default ProductDetails;