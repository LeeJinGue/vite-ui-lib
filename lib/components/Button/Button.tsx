import styles from './styles.module.css'
function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const {className, ...rest} = props;
    return <button className={`${className} ${styles.button}`} {...rest} />;
}
export default Button;
