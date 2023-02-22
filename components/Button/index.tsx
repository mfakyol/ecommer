import { ReactNode } from "react";
import classes from "./style.module.scss";

function Button({ children, className= "" }: { children: ReactNode, className?: string }) {
  return <button className={`${classes.button} ${className}`}>{children}</button>;
}

export default Button;
