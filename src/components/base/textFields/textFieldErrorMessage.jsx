import { TextField } from '@mui/material';

export default function TextFieldErrorMessageBase({type, id, placeholder, handleChange, info}){
    return (
        <TextField
            size="small"
            error={info.error !== ""}
            type={type}
            id={id}
            label={placeholder}
            value={info.value}
            onChange={handleChange}
            helperText={info.error}
            className="input"
        />
    );
}