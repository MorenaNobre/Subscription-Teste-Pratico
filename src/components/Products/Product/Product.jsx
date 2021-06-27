import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  // IconButton,
  Button,
} from "@material-ui/core";
import { CheckCircleOutline } from "@material-ui/icons";
import useStyles from "./styles";

export function Product({ product, onAddToCart }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button
          color="default"
          variant="outlined"
          className={classes.button}
          startIcon={<CheckCircleOutline />}
          onClick={() => onAddToCart(product.id, 1)}
        >
          Assinar
        </Button>
        {/* <IconButton aria-label="Add to Cart">
          <Payment />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}
