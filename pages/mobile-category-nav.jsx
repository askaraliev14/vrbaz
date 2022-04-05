import Accordion from 'components/accordion/Accordion';
import AccordionHeader from 'components/accordion/AccordionHeader';
import Header from 'components/header/Header';
import MobileCategoryImageBox from 'components/mobile-category-nav/MobileCategoryImageBox';
import MobileCategoryNavStyle from 'components/mobile-category-nav/MobileCategoryNavStyle';
import MobileNavigationBar from 'components/mobile-navigation/MobileNavigationBar';
import navigations from 'data/navigations';
import { Box, Divider, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';

const MobileCategoryNav = () => {
  const [category, setCategory] = useState(null);
  const [suggestedList, setSuggestedList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);

  const handleCategoryClick = cat => () => {
    let menuData = cat.menuData;

    if (menuData) {
      setSubCategoryList(menuData.categories || menuData);
    } else setSubCategoryList([]);

    setCategory(cat);
  };

  useEffect(() => {
    setSuggestedList(suggestion);
  }, []);
  return <MobileCategoryNavStyle>
      <Header className="header" />
      <div className="main-category-holder">
        {navigations.map(item => <Box className="main-category-box" borderLeft={`${category?.href === item.href ? '3' : '0'}px solid`} onClick={handleCategoryClick(item)} key={item.title}>
            <item.icon sx={{
          fontSize: '28px',
          mb: '0.5rem'
        }} />
            <Typography className="ellipsis" textAlign="center" fontSize="11px" lineHeight="1">
              {item.title}
            </Typography>
          </Box>)}
      </div>
      <Box className="container">
        <Typography fontWeight="600" fontSize="15px" mb={2}>
          Recommended Categories
        </Typography>
        <Box mb={4}>
          <Grid container spacing={3}>
            {suggestedList.map((item, ind) => <Grid item lg={1} md={2} sm={3} xs={4} key={ind}>
                <Link href="/product/search/423423">
                  <a>
                    <MobileCategoryImageBox {...item} />
                  </a>
                </Link>
              </Grid>)}
          </Grid>
        </Box>

        {category?.menuComponent === 'MegaMenu1' ? subCategoryList.map((item, ind) => <Fragment key={ind}>
              <Divider />
              <Accordion>
                <AccordionHeader px={0} py={1.25}>
                  <Typography fontWeight="600" fontSize="15px">
                    {item.title}
                  </Typography>
                </AccordionHeader>
                <Box mb={4} mt={1}>
                  <Grid container spacing={3}>
                    {item.subCategories?.map((item, ind) => <Grid item lg={1} md={2} sm={3} xs={4} key={ind}>
                        <Link href="/product/search/423423">
                          <a>
                            <MobileCategoryImageBox {...item} />
                          </a>
                        </Link>
                      </Grid>)}
                  </Grid>
                </Box>
              </Accordion>
            </Fragment>) : <Box mb={4}>
            <Grid container spacing={3}>
              {subCategoryList.map((item, ind) => <Grid item lg={1} md={2} sm={3} xs={4} key={ind}>
                  <Link href="/product/search/423423">
                    <a>
                      <MobileCategoryImageBox {...item} />
                    </a>
                  </Link>
                </Grid>)}
            </Grid>
          </Box>}
      </Box>

      <MobileNavigationBar />
    </MobileCategoryNavStyle>;
};

const suggestion = [{
  title: 'Belt',
  href: '/belt',
  imgUrl: '/assets/images/products/categories/belt.png'
}, {
  title: 'Hat',
  href: '/Hat',
  imgUrl: '/assets/images/products/categories/hat.png'
}, {
  title: 'Watches',
  href: '/Watches',
  imgUrl: '/assets/images/products/categories/watch.png'
}, {
  title: 'Sunglasses',
  href: '/Sunglasses',
  imgUrl: '/assets/images/products/categories/sunglass.png'
}, {
  title: 'Sneakers',
  href: '/Sneakers',
  imgUrl: '/assets/images/products/categories/sneaker.png'
}, {
  title: 'Sandals',
  href: '/Sandals',
  imgUrl: '/assets/images/products/categories/sandal.png'
}, {
  title: 'Formal',
  href: '/Formal',
  imgUrl: '/assets/images/products/categories/shirt.png'
}, {
  title: 'Casual',
  href: '/Casual',
  imgUrl: '/assets/images/products/categories/t-shirt.png'
}];
export default MobileCategoryNav;