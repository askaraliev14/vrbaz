import BazarButton from "components/BazarButton";
import BazarRating from "components/BazarRating";
import FlexBox from "components/FlexBox";
import HoverBox from "components/HoverBox";
import LazyImage from "components/LazyImage";
import { H4 } from "components/Typography";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const ProductCard3 = ({
  id,
  imgUrl,
  rating,
  title,
  price,
  off = 20,
  hideReview,
  hideFavoriteIcon
}) => {
  const [favorite, setFavorite] = useState(false);
  return <Box>
      <Link href={`/product/${id}`}>
        <a>
          <HoverBox>
            <LazyImage src={imgUrl} width={0} height={0} layout="responsive" alt={title} mx="auto" />
          </HoverBox>
        </a>
      </Link>

      <FlexBox justifyContent="space-between" mt="1rem">
        <Box>
          <H4 fontWeight="600" fontSize="14px" mb={0.5} title={title} ellipsis>
            {title}
          </H4>
          {!hideReview && <BazarRating value={rating} color="warn" readOnly />}

          <FlexBox alignItems="center">
            <Box pr={1} fontWeight="600" color="primary.main">
              ${(price - price * off / 100).toFixed(2)}
            </Box>
            {!!off && <Box color="grey.600" fontWeight="600">
                <del>{price?.toFixed(2)}</del>
              </Box>}
          </FlexBox>
        </Box>

        {!hideFavoriteIcon && <BazarButton disableRipple disableElevation sx={{
        alignItems: "flex-start",
        height: "0",
        "&:hover": {
          backgroundColor: "transparent"
        }
      }} onClick={() => setFavorite(state => !state)}>
            {favorite ? <Favorite fontSize="small" color="primary" /> : <FavoriteBorder fontSize="small" sx={{
          opacity: 0.5
        }} />}
          </BazarButton>}
      </FlexBox>
    </Box>;
};

export default ProductCard3;