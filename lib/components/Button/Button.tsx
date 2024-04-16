// import styles from './styles.module.css'
import { ButtonVariants, button } from "./Button.css";
function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants) {
    const { ...rest } = props;
    return <button {...rest} className={button({ size: "lg", full: true })} />;
}
export default Button;
