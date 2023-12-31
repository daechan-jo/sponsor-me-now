import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/Layout.Nav.module.scss';
import { useEffect } from 'react';
import { PATHNAME_LIST } from './Layout.Header';

const Nav = ({ toggleIsOpenNav }: { toggleIsOpenNav: () => void }) => {
  const navigator = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/main') {
      toggleIsOpenNav();
    }
  }, [location.pathname, toggleIsOpenNav]);
  return (
    <nav className={styles.nav}>
      <button className={styles.cancel} onClick={toggleIsOpenNav}>
        X
      </button>
      <div className={styles.links}>
        {PATHNAME_LIST.map((item) => (
          <Link
            to={item.to}
            className={location.pathname === item.to ? styles.active : ''}
          >
            {item.name}
          </Link>
        ))}
        <Link to="/question">Q&A</Link>
      </div>
      <div>
        <button
          onClick={() => {
            toggleIsOpenNav();
            navigator('/');
          }}
        >
          logout
        </button>
      </div>
    </nav>
  );
};

export default Nav;
