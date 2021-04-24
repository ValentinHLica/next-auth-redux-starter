import { HeartIcon } from "@icons";

import styles from "@styles/Footer/index.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.container__text}>
        Created with <HeartIcon /> Valentin Lica
      </p>
    </footer>
  );
};

export default Footer;
