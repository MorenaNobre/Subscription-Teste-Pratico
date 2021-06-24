import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  { id: 1, name: "FullDev", description: "Full Development Kit", price: "$5", image:'https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 2, name: "Dev", description: "Development Kit +", price: "$5", image:'https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 3, name: "BeginnerDev", description: "Beginner Kit +", price: "$5", image:'https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
