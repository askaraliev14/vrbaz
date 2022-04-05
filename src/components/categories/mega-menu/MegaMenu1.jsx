import FlexBox from 'components/FlexBox';
import LazyImage from 'components/LazyImage';
import NavLink from 'components/nav-link/NavLink';
import { Box, Card, Grid } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import StyledMegaMenu from './StyledMegaMenu'; // component props with nested interface

const MegaMenu1 = ({
  data: {
    categories,
    rightImage,
    bottomImage
  },
  minWidth
}) => {
  return categories ? <StyledMegaMenu>
      <Card elevation={2} sx={{
      ml: '1rem',
      minWidth
    }}>
        <FlexBox px={2.5} py={1.75} alignItems="unset">
          <Box flex="1 1 0">
            <Grid container spacing={4}>
              {categories?.map((item, ind) => <Grid item md={3} key={ind}>
                  {item.href ? <NavLink className="title-link" href={item.href}>
                      {item.title}
                    </NavLink> : <Box className="title-link">{item.title}</Box>}
                  {item.subCategories?.map((sub, ind) => <NavLink className="child-link" href={sub.href} key={ind}>
                      {sub.title}
                    </NavLink>)}
                </Grid>)}
            </Grid>
          </Box>

          {rightImage && <Box mt={1.5}>
              <Link href={rightImage.href}>
                <a>
                  <LazyImage src={rightImage.imgUrl} objectFit="contain" width={137} height={318} />
                </a>
              </Link>
            </Box>}
        </FlexBox>

        {bottomImage && <Link href={bottomImage.href}>
            <a>
              <Box position="relative" height="170px">
                <LazyImage src={bottomImage.imgUrl} layout="fill" objectFit="cover" />
              </Box>
            </a>
          </Link>}
      </Card>
    </StyledMegaMenu> : null;
};

MegaMenu1.defaultProps = {
  minWidth: '760px'
};
export default MegaMenu1;