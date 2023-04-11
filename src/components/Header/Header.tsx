import { FC } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link
              data-testid='nav-home'
              className='nav-item nav-link active'
              href='/'
            >
              Home
            </Link>
            <Link
              data-testid='nav-wiki'
              className='nav-item nav-link active'
              href='/wiki'
            >
              Short wiki
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
