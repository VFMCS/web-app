import * as React from 'react'
import {IconButton, Paper, InputBase} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search"

const SearchBar = () => {
    let [text, setText] = React.useState("")
    let [query, setQuery] = React.useState("")
    const onSubmit = () => {
        setQuery(text)
        console.log(query)
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

  export default SearchBar;