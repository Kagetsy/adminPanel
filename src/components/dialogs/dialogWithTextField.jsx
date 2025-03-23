import { useState } from "react";
import Button from "../base/buttonAuthBase";
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from "@mui/material";

export default function DialogWithTextField(){
    const [state, setState] = useState(false);
    const handleClickOpen = () => {
        setState(true);
    };

    const handleClose = () => {
        setState(false);
    };
    return (
    <div>
        <Button onClick={handleClickOpen} className={"editButton"} id={"edit"} defaultValue={"Добавить роль"} />
        <Dialog
          open={state}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className={"cancelEditButton"} id={"edit"} defaultValue={"Отмена"} />
            <Button onClick={handleClose} className={"editButton"} id={"edit"} defaultValue={"Добавить"} >
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>);
}