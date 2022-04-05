// import FlexBox from 'components/FlexBox';
// import LazyImage from 'components/LazyImage';
// import NavLink2 from 'components/nav-link/NavLink2';
// import { H3, Paragraph } from 'components/Typography';
// import { AccessTime, CommentOutlined } from '@mui/icons-material/';
// import { Box } from '@mui/system';
// import format from 'date-fns/format';
// import React from 'react'; // component props interface
//
// const BlogCard1 = ({
//   blog
// }) => {
//   // common icon style
//   const iconStyle = {
//     color: 'grey.600',
//     mr: '0.3rem',
//     fontSize: '1rem'
//   };
//   return <Box>
//       <LazyImage src={blog.imgUrl} width={588} height={272} layout="responsive" sx={{
//       '&:hover': {
//         transition: '0.3s ease-in-out',
//         transform: 'scale(1.1)',
//         cursor: 'pointer'
//       }
//     }} />
//       <Box py="1.5rem">
//         <H3 lineHeight={1.3} color="secondary.900">
//           {blog.title}
//         </H3>
//         <FlexBox alignItems="center" mt="5px">
//           <FlexBox alignItems="center" mr="1.5rem">
//             <AccessTime sx={iconStyle} />
//             <Paragraph>
//               {format(new Date(blog.createdAt), 'dd MMMM, yyyy')}
//             </Paragraph>
//           </FlexBox>
//
//           <FlexBox alignItems="center">
//             <CommentOutlined sx={iconStyle} />
//             <Paragraph>{blog.comments} comments</Paragraph>
//           </FlexBox>
//         </FlexBox>
//
//         <Paragraph mt="1.2rem" mb="0.7rem">
//           {blog.description}
//         </Paragraph>
//
//         <NavLink2 title="CONTINUE READING" url={blog.url} />
//       </Box>
//     </Box>;
// };
//
// export default BlogCard1;