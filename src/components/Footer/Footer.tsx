import { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      APG tool project. Created at NextJS. 2023
    </footer>
  );
};

export default Footer;
