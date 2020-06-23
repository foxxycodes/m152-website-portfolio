import {
  createStyles,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as React from 'react';

export interface IStyleRule {
  title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    panel: {},
    styleBody: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: 15,
    },
  })
);

const StyleSet: React.FC<IStyleRule> = (props) => {
  const { title } = props;
  const classes = useStyles();

  return (
    <ExpansionPanel className={classes.panel}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.styleBody}>{props.children}</div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default StyleSet;
