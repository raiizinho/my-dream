import styles from './Login.module.css'

function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.welcome}>
        <h1>Bem-vindo de volta</h1>
      </div>

      <div className={styles.loginInputs}>
        <div className={styles.inputs}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Senha"
            required
          />
        </div>

        <div className={styles.links}>
          <a href="#">Esqueceu a senha?</a>
          <a href="#">Registre-se</a>
        </div>

        <button type="submit">Concluir</button>
      </div>
    </div>
  )
}

export default Login
