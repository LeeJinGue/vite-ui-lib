import styles from "./styles.module.css";
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    const { className, ...rest } = props;
    return <input className={`${className} ${styles.input}`} {...rest} />;
}
export default Input;
