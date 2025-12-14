import styles from "./SignIn.module.css"

function SignIn () {
    return (
        <div className={styles.signin}>
            <div className={styles.welcome}>
                <h1>Bem vindo</h1>
                <p>Aqui você conhece novos sonhos e compartilha os seus.</p>
            </div>
            <div className={styles.signinInputs}>
                <div className={styles.inputs}>
                    <label htmlFor="username">Username:</label>
                    <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder="Username" 
                    required
                    />
                    <label htmlFor="username">Email:</label>
                    <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder="Email" 
                    required
                    />
                    <label htmlFor="username">Senha:</label>
                    <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder="Senha" 
                    required
                    />
                    <label htmlFor="username">Confirmar senha:</label>
                    <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder="Confirmar senha" 
                    required
                    />
                </div>
                <div className={styles.links}>
                    <a href="#">Já sou um sonhador</a>
                </div>
                <button type="submit">Concluir</button>
            </div>
        </div>
    )
}
export default SignIn