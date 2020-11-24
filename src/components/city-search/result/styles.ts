import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => createStyles({
  table: {
    '& td': {
      padding: '5px',
    },
  },
  tableHeading: {
    fontSize: '1.5rem',
  },
}));
