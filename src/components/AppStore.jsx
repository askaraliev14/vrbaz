import { Box } from '@mui/material';
import React from 'react';
import FlexBox from './FlexBox';
import AppleStore from './icons/AppleStore';
import PlayStore from './icons/PlayStore';

const AppStore = () => {
  return <FlexBox flexWrap="wrap" m={-1}>
      {appList.map(item => <a href="/" key={item.title} target="_blank" rel="noreferrer noopener">
          <Box display="flex" alignItems="center" borderRadius="5px" bgcolor="#0C2A4D" color="white" p="10px 16px" m={1}>
            <item.icon>{item.icon}</item.icon>

            <Box ml={1}>
              <Box fontSize="8px" fontWeight="600" lineHeight="1">
                {item.subtitle}
              </Box>
              <Box fontSize="14px" fontWeight="900">
                {item.title}
              </Box>
            </Box>
          </Box>
        </a>)}
    </FlexBox>;
};

const appList = [{
  icon: PlayStore,
  title: 'Google Play',
  subtitle: 'Get it on',
  url: '/'
}, {
  icon: AppleStore,
  title: 'App Store',
  subtitle: 'Download on the',
  url: '/'
}];
export default AppStore;