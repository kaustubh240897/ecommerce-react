import { Container, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar(props) {
    console.log(props);
  const [searchTerm, setSearchTerm] = useState("");
  const [skipCount, setSkipCount] = useState(true);

  useEffect(() => {
    if (skipCount) setSkipCount(false);
    if (!skipCount){ 
        // Set a timeout to execute the searchProducts function after 500ms of inactivity
        const timeoutId = setTimeout(() => {
        props.searchProducts({ name: searchTerm });
        }, 500);

        // Clean up the timeout when the component unmounts or the searchTerm changes
        return () => clearTimeout(timeoutId);
    }
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    //props.searchProducts({name: event.target.value})
  };


  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={handleChange}
        sx={{  display:"flex", justifyContent:"center" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}