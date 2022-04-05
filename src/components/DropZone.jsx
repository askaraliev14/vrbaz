import { Button, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { H5, Small } from './Typography';

const DropZone = ({
  onChange
}) => {
  const onDrop = useCallback(acceptedFiles => {
    if (onChange) onChange(acceptedFiles);
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    onDrop,
    multiple: true,
    accept: '.jpeg,.jpg,.png,.gif',
    maxFiles: 10
  });
  return <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="200px" border="1px dashed" borderColor="grey.400" borderRadius="10px" bgcolor={isDragActive ? 'grey.200' : 'none'} sx={{
    transition: 'all 250ms ease-in-out',
    outline: 'none'
  }} {...getRootProps()}>
      <input {...getInputProps()} />
      <H5 mb={2} color="grey.600">
        Drag & drop product image here
      </H5>

      <Divider sx={{
      width: '200px',
      mx: 'auto'
    }} />

      <Typography color="grey.600" bgcolor={isDragActive ? 'grey.200' : 'background.paper'} lineHeight="1" px={2} mt={-1.25} mb={2}>
        on
      </Typography>

      <Button color="primary" type="button" sx={{
      bgcolor: 'primary.light',
      px: '2rem',
      mb: '22px'
    }}>
        Select files
      </Button>

      <Small color="grey.600">Upload 280*280 image</Small>
    </Box>;
};

export default DropZone;