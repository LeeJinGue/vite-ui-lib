// import styles from './styles.module.css'
import { button } from "./Button.css";
function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { className, ...rest } = props;
    return <button className={`${className} ${button}`} {...rest} />;
}
export default Button;
