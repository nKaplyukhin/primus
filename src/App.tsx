import { Box } from "@mui/material";
import { Header } from "./componetnts/Header";
import { Catalog } from "./componetnts/Catalog";
import { Search } from "./componetnts/Search";
import { Price } from "./componetnts/Price";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        margin: "auto",
        maxWidth: "1400px",
      }}
    >
      <Header />
      <Search />
      <Catalog />
      <Price />
    </Box>
  );
}

export default App;
