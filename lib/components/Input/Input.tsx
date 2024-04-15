// import styles from "./styles.module.css";
import { input } from "./Input.css";
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    const { className, ...rest } = props;
    return <input className={`${className} ${input}`} {...rest} />;
}
export default Input;
