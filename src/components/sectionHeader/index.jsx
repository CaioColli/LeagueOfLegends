import styles from "./index.module.scss";

const SectionHeader = ({ title }) => {
    return (
        <header className={styles.header}>
            <span>Escolha seu</span>
            <h1>{title}</h1>
        </header>
    )
}

export default SectionHeader;