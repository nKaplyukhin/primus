import { Box, Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export const Price = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
      }}
    >
      <Typography variant="h2">990 рублей / месяц</Typography>
      <Typography variant="h5" textAlign="center">
        неограниченный функционал и безлимитное хранилище за 990 рублей.
      </Typography>
      <Typography variant="h5" color={blue[600]} textAlign="center">
        Всего 9900 рублей при оплате за год
      </Typography>

      <Typography variant="h5" padding={5}>
        Полностью бесплатно 30 дней
      </Typography>

      <Button variant="contained" size="large">
        <Typography variant="h3">РЕГИСТРАЦИЯ</Typography>
      </Button>
    </Box>
  );
};
