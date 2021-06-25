import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  teste: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    flexGrow: 1,
  },
}));