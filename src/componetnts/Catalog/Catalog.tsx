import { Box, Typography } from "@mui/material";
import { mockCatalog } from "../../mock/catalog_mock";
import { CatalogBlock } from "./CatalogBlock";

export const Catalog = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography>Каталог услуг в Красноярске</Typography>
      <Box
        sx={{
          columnCount: 5,
        }}
      >
        {mockCatalog.map((item, index) => (
          <CatalogBlock
            key={index}
            image={item.image}
            name={item.name}
            list={item.children}
          />
        ))}
      </Box>
    </Box>
  );
};
