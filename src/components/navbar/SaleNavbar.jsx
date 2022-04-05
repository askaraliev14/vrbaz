// import React, { useCallback, useState } from 'react';
// import FlexBox from '../FlexBox';
// import { H5 } from '../Typography';
//
// const SaleNavbar = ({
//   saleCategoryList,
//   onChange
// }) => {
//   const [selected, setSelected] = useState(1);
//   const handleCategoryClick = useCallback(categoryIndex => () => {
//     setSelected(categoryIndex);
//     if (onChange) onChange(saleCategoryList[categoryIndex]);
//   }, []);
//   return <FlexBox
//       sx={{
//     bgcolor: 'white',
//     overflowX: 'auto',
//     height: '5rem'
//   }}>
//       {saleCategoryList.map((item, ind) => <FlexBox sx={{
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       cursor: 'pointer',
//       minWidth: '100px',
//       ml: ind === 0 ? 'auto' : 'unset',
//       mr: ind === saleCategoryList.length - 1 ? 'auto' : 'unset',
//       background: ind === selected ? 'primary.light' : 'transparent'
//     }} key={ind} onClick={handleCategoryClick(ind)}>
//           <item.icon sx={{
//         fontSize: '1.75rem'
//       }} color={ind === selected ? 'primary' : 'secondary'} />
//           <H5 fontSize="12px" textAlign="center" color={ind === selected ? 'primary.main' : 'inherit'} fontWeight={ind === selected ? '600' : '400'}>
//             {item.title}
//           </H5>
//         </FlexBox>)}
//     </FlexBox>;
// };
//
// export default SaleNavbar;