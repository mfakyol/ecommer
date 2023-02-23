import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import classes from "./style.module.scss";

interface ButtonComponentProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

function Button({ children, className = "", ...props }: ButtonComponentProps) {
  return (
    <button className={`${classes.button} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
