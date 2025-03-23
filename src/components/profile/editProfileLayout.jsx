import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../user/userProvider';
import { InputNames } from '../../ts/constants/inputNames';
import Button from '../base/buttonHomeBase';
import TextField from '../base/textFieldBase';
import { GetUser, Update } from '../../api/apiService';
import { Box, Typography } from '@mui/material';
import CheckBox from '../base/checkBoxWithLabelBase';
import Form from '../base/formControlHomeBase';
import { withStyles } from '@mui/styles';

const styles = theme => ({
  cancelEditButton: {
    "&.MuiButtonBase-root": {
        backgroundColor: "inherit",
        width: "100%",
        border: "1px solid #ccc",
        textAlign: "center",
        cursor: "pointer",
        transition: "0.3s",
        borderRadius: "15px",
        color: "black"
    },
    "&:hover.MuiButtonBase-root": {
      background: "red"
    }
  },
  editButton: {
    "&.MuiButtonBase-root": {
        backgroundColor: "inherit",
        width: "100%",
        border: "1px solid #ccc",
        textAlign: "center",
        cursor: "pointer",
        transition: "0.3s",
        borderRadius: "15px",
        color: "black"
    },
    "&:hover.MuiButtonBase-root": {
        backgroundColor: "rgb(24, 243, 24)"
    }
  }
});

function EditProfileLayout(props){
    const { classes } = props;
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [canCreateRole, setCanCreateRole] = useState(user.canCreateRole);
    const [email, setEmail] = useState(user.email);
    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === InputNames.CanCreateRole){
            setCanCreateRole(value)
        }
        else if (id === InputNames.Email){
            setEmail(value)
        }
    };
    async function update(){
        let result = await Update(email, canCreateRole, user);
        if (result){
            var userInfo = await GetUser(user, setUser);
            if (userInfo !== null){
                setUser({...user, canCreateRole: userInfo.CanCreateNewRole, email: userInfo.Email});
            }
            navigate("/");
        }
    }

    function cancel(){
        setEmail(user.email);
        setCanCreateRole(user.canCreateRole);
    }

    return (
        <Form>
            <Box component="div"
                sx={{ '&.MuiBox-root': { m: 0, width: '100%' } }}
                noValidate
                className="boxEmail"
                autoComplete="off">
                <Typography style={{ marginTop: "12.5px", marginLeft: 5, marginRight: 5}}>Email</Typography>
                <TextField type={"email"} id={InputNames.Email} handleChange={handleChange} info={email}/>
            </Box>
            <CheckBox handleChange={handleChange} info={canCreateRole} checkBoxInfo={"Можно добавить роль?"} disabled={false}/>
            <Box className="editButtons" 
                component="div"
                sx={{ '&.MuiBox-root': { 
                        display: "flex",
                        flexDirection: "row",
                        textAlign: "left"
                    } 
                }}
                noValidate
                autoComplete="off">
                <Button onClick={cancel} className={classes.cancelEditButton} id={"cancel"} defaultValue={"Отменить"} />
                <Button onClick={update} className={classes.editButton} id={"edit"} defaultValue={"Обновить"} />
            </Box>
        </Form>
    );
}

export default withStyles(styles)(EditProfileLayout);