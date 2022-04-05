import BazarCard from "components/BazarCard";
import Carousel from "components/carousel/Carousel";
import Category from "components/icons/Category";
import useWindowSize from "hooks/useWindowSize";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard6 from "../product-cards/ProductCard6";

const Section3 = ({
  categoryList
}) => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 650) setVisibleSlides(1);else if (width < 950) setVisibleSlides(2);else setVisibleSlides(3);
  }, [width]);
  return <CategorySectionCreator icon={<Category color="primary" />} title="Top Categories" seeMoreLink="#">
      <Carousel totalSlides={5} visibleSlides={visibleSlides}>
        {categoryList.map((item, ind) => <Link href={item.categoryUrl} key={ind}>
            <a>
              <BazarCard sx={{
            p: "1rem"
          }} elevation={0}>
                <ProductCard6 title={item.title} subtitle={item.subtitle} imgUrl={item.imgUrl} />
              </BazarCard>
            </a>
          </Link>)}
      </Carousel>
    </CategorySectionCreator>;
};

export default Section3;