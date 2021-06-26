import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  quantity: {
    marginInline: 20,
  },
  buttons: {
    marginInline: 20,
    display: "flex",
    alignItems: "center",
  },
}));
