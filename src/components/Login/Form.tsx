import React, { useRef } from "react";

import { connect } from "react-redux";

import { loginUser } from "@store/actions/authActions";
import styles from "@styles/Login/form.module.scss";

type Props = {
  loginUser: () => void;
};

const Form: React.FC<Props> = ({ loginUser }) => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const submit = (form: React.FormEvent) => {
    form.preventDefault();

    const data = {
      email: email.current?.value,
      password: email.current?.value,
    };

    localStorage.setItem("user", JSON.stringify(data));

    loginUser();
  };

  return (
    <form className={styles.container__form} onSubmit={submit}>
      <div className={styles.form__input}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" ref={email} />
      </div>

      <div className={styles.form__input}>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" ref={password} />
      </div>

      <button type="submit" className={styles.form__submit}>
        Login
      </button>
    </form>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = { loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(Form);
