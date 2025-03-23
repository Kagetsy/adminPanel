import { forwardRef } from 'react';

const ButtonRef = forwardRef(({ styleBlock, onClick, id, className, defaultValue }, ref) => {
  return (
    <div className={styleBlock}>
        <button
            ref={ref}
            className={className}
            id={id}
            onClick={onClick}
            title={defaultValue}
            type="button"
        >{defaultValue}
        </button>
    </div>)
})

export default ButtonRef;