import HoverBox from "components/HoverBox";
import LazyImage from "components/LazyImage";
import { H4 } from "components/Typography";
import Link from "next/link";
import React from "react";

const ProductCard2 = props => {
  const {
    imgUrl,
    title,
    price,
    id
  } = props;
  return <Link href={`/product/${id}`}>
      <a>
        <HoverBox borderRadius="8px" mb={1}>
          <LazyImage src={imgUrl} width={0} height={0} layout="responsive" alt={title} />
        </HoverBox>
        <H4 fontWeight="600" fontSize="14px" mb={0.5}>
          {title}
        </H4>
        <H4 fontWeight="600" fontSize="14px" color="primary.main">
          ${Math.ceil(price).toLocaleString()}
        </H4>
      </a>
    </Link>;
};

export default ProductCard2;