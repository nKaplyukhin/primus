import { Box, List, ListItem, Typography } from "@mui/material";
import { CatalogItem } from "./types";

type CatalogBlockProps = {
  image: string;
  name: string;
  list: CatalogItem[];
};

export const CatalogBlock = ({ image, name, list }: CatalogBlockProps) => {
  return (
    <Box
      sx={{
        p: 1,
        justifySelf: "left",
        width: "100%",
        maxWidth: "300px",
      }}
    >
      <img
        style={{
          width: "70px",
          height: "70px",
        }}
        src={image}
        alt={name}
      />
      <Typography
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        {name}
      </Typography>
      <List>
        {list.map((item, index) => (
          <ListItem
            sx={{
              padding: "3px",
            }}
            key={index}
          >
            {item.name}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
