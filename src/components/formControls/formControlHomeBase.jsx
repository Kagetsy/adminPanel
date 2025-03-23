import { FormControl } from "@mui/material";
  
export default function FormControlHomeBase(props){
    const { children } = props;
    return (
        <FormControl sx={{
            flexDirection: 'column',
            margin: "10px",
            border: "1px solid #ccc",
            borderRadius: "15px",
            height: "98%",
            width: "100%",
            padding: "10px 16px",
            textAlign: "left"}} 
            component="form">{children}</FormControl>
    );
}