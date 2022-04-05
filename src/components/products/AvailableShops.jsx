import BazarAvatar from 'components/BazarAvatar';
import FlexBox from 'components/FlexBox';
import { H3, H4 } from 'components/Typography';
import { Box, Card, Grid } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const AvailableShops = () => {
  return <Box mb={7.5}>
      <H3 mb={3}>Also Available at</H3>
      <Grid container spacing={4}>
        {shopList.map(item => <Grid item lg={2} md={3} sm={4} xs={12} key={item.name}>
            <Link href="/shop/53324">
              <a>
                <FlexBox component={Card} p={3.25} flexDirection="column" justifyContent="center" alignItems="center" width="100%">
                  <BazarAvatar height="48px" width="48px" src={item.imgUrl} />
                  <H4 mt={1.5} color="grey.800">
                    {item.name}
                  </H4>
                </FlexBox>
              </a>
            </Link>
          </Grid>)}
      </Grid>
    </Box>;
};

const shopList = [{
  name: 'Tech Friend',
  imgUrl: '/assets/images/faces/propic.png'
}, {
  name: 'Smart Shop',
  imgUrl: '/assets/images/faces/propic(1).png'
}, {
  name: 'Gadget 360',
  imgUrl: '/assets/images/faces/propic(8).png'
}];
export default AvailableShops;