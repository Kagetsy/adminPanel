import { FormControl } from "@mui/material";
  
export default function FormControlAuthBase(props){
    const { children } = props;
    return (
        <FormControl sx={{
            flexDirection: 'column',
            margin: "auto",
            border: "1px solid black",
            borderRadius: "15px",
            padding: "10px",
            textAlign: "center"}} 
            component="form">{children}</FormControl>
    );
}