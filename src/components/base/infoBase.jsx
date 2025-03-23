import { FormLabel } from "@mui/material";
import { withStyles } from '@mui/styles';

const styles = theme => ({
    info: {
      "&.MuiFormLabel-root": {
        display: "inline-block",
        margin: "5px",
        color: "black",
      }
    }
  });

function InfoBase(props){
    const { classes, nameBlock, content } = props;
    return (
        <div>
            <FormLabel sx={{ "&.MuiFormLabel-root": { paddingRight: "10px" }}} className={classes.info}>{nameBlock}</FormLabel>
            <FormLabel className={classes.info}>{content}</FormLabel>
        </div>);
}

export default withStyles(styles)(InfoBase);