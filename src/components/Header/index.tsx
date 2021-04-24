import React from "react";
import Link from "next/link";

import { connect } from "react-redux";

import { RootState } from "@store/reducers/index";
import { logOut } from "@store/actions/authActions";
import navMenu, { Authorizatin } from "@utils/navMenu";
import styles from "@styles/Header/index.module.scss";

type Props = {
  isAuthenticated: boolean;
  logOut: () => void;
};

const Header: React.FC<Props> = ({ isAuthenticated, logOut }) => {
  const logOutUser = () => {
    localStorage.removeItem("user");
    logOut();
  };

  return (
    <header className={styles.container}>
      <div className={styles.container__wrapper}>
        <div className={styles.container__logo}>
          <Link href="/">
            <a>
              <h3 className={styles.brand__title}>NextJS</h3>
            </a>
          </Link>
        </div>

        <nav className={styles.container__nav}>
          <ul className={styles.nav__menu}>
            {navMenu.map((item, index) => {
              const { url, title, protectedRoute } = item;

              if (
                isAuthenticated &&
                protectedRoute === Authorizatin.unAuthorized
              ) {
                return null;
              }

              if (
                !isAuthenticated &&
                protectedRoute === Authorizatin.authorized
              ) {
                return null;
              }

              return (
                <li className={styles.menu__item} key={index}>
                  <Link href={url}>
                    <a className={styles.item__link}>{title}</a>
                  </Link>
                </li>
              );
            })}

            {isAuthenticated && (
              <li className={styles.menu__item} onClick={logOutUser}>
                <a className={styles.item__link}>Log Out</a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = { logOut };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
