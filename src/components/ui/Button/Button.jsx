import { Button as ButtonMUI } from '@mui/material'
import styles from "./Button.module.css"
import cn from 'classnames';


const Button = ({
    variant = "contained",
    size = "medium",
    children,
    className,
    onClick,
}) => {
    return (
        <ButtonMUI 
            variant={variant}
            size={size} 
            className={cn(styles.btn, className)}
            onClick={onClick}
        >
            {children}
        </ButtonMUI>
    )
}

export default Button