import Layout from "@/components/dashboard/Layout";
import FormAddProduct from "@/components/dashboard/products/FormAddProduct";
import React from "react";

const AddProduct = () => {
  return (
    <Layout page="Añadir producto">
      <FormAddProduct />
    </Layout>
  );
};

export default AddProduct;
