import { Box, Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <TextField
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <Button size="small" variant="outlined">
        Найти
      </Button>
    </Box>
  );
};
