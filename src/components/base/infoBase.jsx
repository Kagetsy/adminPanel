export default function InfoBase({className, idLabel, nameBlock, content}){
    return (
        <div>
            <p className={className}>{nameBlock}</p>
            <p className={className} id={idLabel}>{content}</p>
        </div>);
}