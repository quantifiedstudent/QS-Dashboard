import styles from "../style.module.scss";
interface BaseTotalProps {
    total: number;
}

const BaseTotalGraph = (props: BaseTotalProps) => {
    return (
        <div className={styles.graph_container}>
            <h1 className={styles.graph_header}>{props.total} hours</h1>
        </div>
    );
};

export default BaseTotalGraph;
