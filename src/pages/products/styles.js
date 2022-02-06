import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  root: {
    display: 'flex',
    height: 400
  },
  img: {
    width: 400,
    height: 400
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    paddingLeft: 170,
    paddingTop: 50
  },
  content: {
    // flex: '1 0 auto',
    // display: 'flex',
    // alignItems: 'center',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));
