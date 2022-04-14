import BazarMenu from "components/BazarMenu";
import FlexBox from "components/FlexBox";
import KeyboardArrowDownOutlined from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Box, Button, Card, MenuItem, TextField } from "@mui/material";
import TouchRipple from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import { debounce } from "@mui/material/utils";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react"; // styled components
// also used in the GrocerySearchBox component

export const SearchOutlinedIcon = styled(SearchOutlined)(({ theme }) => ({
  color: theme.palette.grey[600],
  marginRight: 20,
})); // also used in the GrocerySearchBox component

export const SearchResultCard = styled(Card)(() => ({
  position: "absolute",
  top: "100%",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  width: "100%",
  zIndex: 99,
}));

const SearchBox = () => {
  const [category, setCategory] = useState("All Categories");
  const [resultList, setResultList] = useState([]);
  const parentRef = useRef();

  const handleCategoryChange = (cat) => () => {
    setCategory(cat);
  };

  const search = debounce((e) => {
    const value = e.target?.value;
    if (!value) setResultList([]);
    else setResultList(dummySearchResult);
  }, 200);
  const hanldeSearch = useCallback((event) => {
    event.persist();
    search(event);
  }, []);

  const handleDocumentClick = () => {
    setResultList([]);
  };

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  return (
    <Box
      position="relative"
      flex="1 1 0"
      maxWidth="600px"
      mx="auto"
      {...{
        ref: parentRef,
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Искать..."
        fullWidth
        onChange={hanldeSearch}
        InputProps={{
          sx: {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#64D7F4",
            },
            borderRadius: 2,
            height: 44,
            paddingRight: 0,
            overflow: "hidden",
          },
          endAdornment: (
            <Button
              variant="outlined"
              endIcon={<SearchOutlinedIcon sx={{ marginRight: 0 }} />}
              sx={{
                border: "#64D7F4",
                borderRadius: 2,
                color: "grey.700",
                height: 44,
                overflow: "hidden",
                "&:hover": {
                  backgroundColor: "#64D7F4",
                },
              }}
            >
              Hайти
            </Button>
          ),
        }}
      />

      {!!resultList.length && (
        <SearchResultCard elevation={2}>
          {resultList.map((item) => (
            <Link href={`/product/search/${item}`} key={item}>
              <MenuItem key={item}>{item}</MenuItem>
            </Link>
          ))}
        </SearchResultCard>
      )}
    </Box>
  );
};

export default SearchBox;
