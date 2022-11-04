import * as React from 'react'
import {IconButton, Paper, InputBase} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search"
import { useNavigate } from "react-router-dom";

let search_query = '';

const SearchBar = () => {
    let [text, setText] = React.useState("");
    let [query, setQuery] = React.useState("");
    let navigate = useNavigate();

    const onSubmit = () => {
        setQuery(text);
        search_query = text;

        console.log("searching: " + search_query)

        navigate('/customer-search', {state:{refresh:true}});
        //window.location.reload(false);
<<<<<<< HEAD

=======
>>>>>>> af06bcb6 (syntax error)
    }
    return (
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for products"
          inputProps={{ 'aria-label': 'search for products' }}
          onChange={(event) => setText(event.target.value)}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={onSubmit}>
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }

  export {search_query};
  export default SearchBar;