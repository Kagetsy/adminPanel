export default function ButtonBase({styleBlock, onClick, id, className, defaultValue}){
    return (
        <div className={styleBlock}>
            <button
                className={className}
                id={id}
                onClick={onClick}
                title={defaultValue}
                type="button"
            >{defaultValue}
            </button>
        </div>
    );
}