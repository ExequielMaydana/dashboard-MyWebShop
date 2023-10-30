import React from "react";
import Layout from "@/components/dashboard/Layout";
import ListProducts from "@/components/dashboard/products/ListProducts";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";
import { useRouter } from "next/router";

const theme = createTheme({
  palette: {
    btnForm: {
      main: indigo[500],
      contrastText: "#FFF",
    },
  },
});

const Products = () => {
  const router = useRouter();

  return (
    <Layout page="Productos">
      <header className="w-full flex items-center justify-between flex-wrap gap-4">
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <h2 className="font-semibold text-xl">Productos</h2>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="text.primary" href="/dashboard">
              Panel
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/dashboard/products"
            >
              Productos
            </Link>
            <Link underline="none" color="inherit" href="#" aria-current="page">
              Lista
            </Link>
          </Breadcrumbs>
        </Box>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            style={{
              minWidth: "100px",
              width: "200px",
              backgroundColor: theme.palette.btnForm.main,
            }}
            onClick={() => router.push("/dashboard/products/add")}
          >
            + Nuevo Producto
          </Button>
        </ThemeProvider>
      </header>
      <ListProducts />
    </Layout>
  );
};

export default Products;
