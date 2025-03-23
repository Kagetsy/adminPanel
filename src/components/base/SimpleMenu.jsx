import React from 'react';
import { MenuList, MenuItem, Paper } from '@mui/material';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    menuItem: {
      '&:focus': {
        backgroundColor: "red",
        '& $primary, & $icon': {
          color: theme.palette.common.white,
        },
      },
    },
  });
  
  function ListItemComposition(props) {
    const { classes } = props;
  
    return (
      <Paper>
        <MenuList>
          <MenuItem className={classes.menuItem}>Sent mail
          </MenuItem>
          <MenuItem className={classes.menuItem}>Drafts
          </MenuItem>
          <MenuItem className={classes.menuItem}>Inbox
          </MenuItem>
        </MenuList>
      </Paper>
    );
  }
  
  ListItemComposition.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ListItemComposition);