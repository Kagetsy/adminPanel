export default function CheckBoxBase({className, idInput, checked, disabled, checkBoxInfo}){
    return (
        <div>
            <p className={className}>{checkBoxInfo}</p>
            <input className={className} id={idInput} type="checkbox" checked={checked} disabled={disabled} />
        </div>
    );
}