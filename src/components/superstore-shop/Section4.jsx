import BazarCard from "components/BazarCard";
import DottedStar from "components/icons/DottedStar";
import RankBadge from "components/icons/RankBadge";
import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import CategorySectionHeader from "../CategorySectionHeader";
import ProductCard4 from "../product-cards/ProductCard4";
import ProductCard5 from "../product-cards/ProductCard5";

const Section4 = props => {
  const {
    topRatedBrands,
    topRatedList
  } = props;
  return <Box mb={7.5}>
      <Container>
        <Box>
          <Grid container spacing={4}>
            <Grid item lg={6} xs={12}>
              <CategorySectionHeader icon={<RankBadge />} title="Top Ratings" seeMoreLink="#" />
              <BazarCard sx={{
              p: "1rem"
            }}>
                <Grid container spacing={4}>
                  {topRatedList.map(item => <Grid item md={3} sm={6} xs={6} key={item.title}>
                      <Link href={`/product/${item.id}`}>
                        <a>
                          <ProductCard4 {...item} />
                        </a>
                      </Link>
                    </Grid>)}
                </Grid>
              </BazarCard>
            </Grid>
            <Grid item md={6} xs={12}>
              <CategorySectionHeader icon={<DottedStar />} title="Featured Brands" seeMoreLink="#" />
              <BazarCard sx={{
              p: "1rem"
            }}>
                <Grid container spacing={4}>
                  {topRatedBrands.map(item => <Grid item sm={6} xs={12} key={item.title}>
                      <Link href={item.productUrl}>
                        <a>
                          <ProductCard5 {...item} />
                        </a>
                      </Link>
                    </Grid>)}
                </Grid>
              </BazarCard>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>;
};

export default Section4;