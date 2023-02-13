const Home = () => {
    return ( 
        <div className="home-container">
            <div className="home-container-bg">
                <div className="home-container-poster">
                    <h1>Suivie de congé chez MSC</h1>
                    <hr width="100%" size="4" color="black"/>
                    <p>
                    Poursuivre l’integrité et la gestion de votre congé en tant que employé dans notre société.
                    </p>
                    <button>
                        <label>Continuer</label>
                        <div className="right-arrow"></div>
                        </button>
                </div>
            </div>
        </div>

        );
}
 
export default Home;


/*
        <div className="form-registration">
        <div className="registration">
            <h1>Registration</h1>
            <label>Username</label>
            <input type="text" />
            <label >Password</label>
            <input type="text"/>
            <button>Register</button>
        </div>
        <div className="login">
            <div className="login">
                <h1>Login</h1>
                <input type="text" placeholder="Username ..."/>
                <input type="text" placeholder="Password..."/>
                <button>Login</button>
            </div>
        </div>
        </div> 
        */