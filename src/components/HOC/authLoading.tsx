import styles from "@styles/AuthLoading/index.module.scss";

const AuthLoading: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loading} />
    </div>
  );
};

export default AuthLoading;
