import { Box, Typography } from "@mui/material";
import { mockCatalog } from "../../mock/catalog_mock";
import { CatalogBlock } from "./CatalogBlock";

export const Catalog = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Typography>Каталог услуг в Красноярске</Typography>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "stretch",
          flexDirection: "column",
          flexWrap: "wrap",
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
