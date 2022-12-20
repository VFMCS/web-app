import * as React from 'react'
import { IconButton, Paper, InputBase } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search"
import { useNavigate } from "react-router-dom";

let search_query = '';

const SearchBar = () => {
  let [text, setText] = React.useState("");
  let [query, setQuery] = React.useState("");
  let [is_vendor, setIs_Vendor] = React.useState("");
  let navigate = useNavigate();

  const onSubmit = () => {
    setQuery(text);
    search_query = text;

    console.log("searching: " + search_query)

    //navigate to specific search path given the user's type as a vendor or customer
    console.log('curr_user_is_vendor: ' + localStorage.getItem('curr_user_is_vendor'));
    if (localStorage.getItem('curr_user_is_vendor') === 'true'){
      navigate('/farmer-search', { state: { refresh: true } });
    }
    else if(localStorage.getItem('isFarmerSearch') === 'true'){
      navigate('/customer-search-vendor', { state: { refresh: true } });

    }
    else{
      navigate('/customer-search', { state: { refresh: true } });
    }
  }

  const handleKeyPress = (e) => {
    console.log(e.charCode)
    console.log(e.key)
    if (e.key === "Enter") {
      onSubmit()
    }
  }
  return (
    <Paper
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search for products' }}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={handleKeyPress}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={onSubmit}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export { search_query };
export default SearchBar;