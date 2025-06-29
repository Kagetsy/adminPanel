import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../user/userProvider';
import { InputNames } from '../../ts/constants/inputNames';
import Button from '../base/buttons/buttonHome';
import TextField from '../base/textFields/textField';
import { GetUser, Update } from '../../api/apiService';
import { Box, Typography } from '@mui/material';
import CheckBox from '../base/checkBoxWithLabelBase';
import Form from '../formControls/formControlProfile';
import { withStyles } from '@mui/styles';
import Title from '../base/titleBase';
import exportedObject from '../store/store';
import { updateUserResult } from '../store/user/slices';

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
    const dispatch = exportedObject.useDispatch();
    const navigate = useNavigate();
    const user = useContext(UserContext);
    const [canCreateRole, setCanCreateRole] = useState(user.state.canCreateRole);
    const [email, setEmail] = useState(user.state.email);
    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === InputNames.CanCreateRole){
            setCanCreateRole(e.target.checked)
        }
        else if (id === InputNames.Email){
            setEmail(value)
        }
    };
    async function update(){
        let result = await Update(email, canCreateRole, user.state);
        if (result){
            var userInfo = await GetUser(user.state);
            if (userInfo !== null){
                dispatch(updateUserResult(userInfo));
            }
            navigate("/");
        }
    }

    function cancel(){
        setEmail(user.email);
        setCanCreateRole(user.canCreateRole);
    }

    return (
        <>
            <Title title="Редактировать мой профиль" />
            <Form>
                <Box component="div"
                    sx={{ '&.MuiBox-root': { m: 0, width: '100%' } }}
                    noValidate
                    className="boxEmail"
                    autoComplete="off">
                    <Typography style={{ marginTop: "12.5px", marginLeft: 5, marginRight: 5}}>Email</Typography>
                    <TextField type={"email"} id={InputNames.Email} handleChange={handleChange} info={email}/>
                </Box>
                <CheckBox handleChange={handleChange} info={canCreateRole} id={InputNames.CanCreateRole} checkBoxInfo={"Можно добавить роль?"} disabled={false}/>
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
        </>
    );
}

export default withStyles(styles)(EditProfileLayout);