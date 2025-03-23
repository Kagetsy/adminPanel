import { TextField } from '@mui/material';

export default function TextFieldBase({type, id, handleChange, info}){
    return (
            <TextField
                size="small"
                error={false}
                type={type}
                id={id}
                value={info}
                onChange={handleChange}
                className="input"
            />
    );
}