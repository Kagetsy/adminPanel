import { FormControlLabel, Checkbox } from "@mui/material";

export default function CheckBoxWithLabelBase({checked, disabled, checkBoxInfo, handleChange}){
    return (
        <div>
            <FormControlLabel 
                sx={{
                    "&.MuiFormControlLabel-root": {
                        margin: "5px"
                    },
                    "&.MuiFormControlLabel-root .MuiFormControlLabel-label.Mui-disabled": {
                        color: "black"
                    }
                }}
                control={
                    <Checkbox checked={checked}
                        disabled={disabled}
                        onChange={handleChange}
                        size="small"
                        style={{ width: "20px", padding: 0, marginLeft: 5 }}
                    />
                }
                label={checkBoxInfo}
                labelPlacement="start"
            />
        </div>
    );
}