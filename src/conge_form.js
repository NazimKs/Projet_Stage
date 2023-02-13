const CongeForm = () => {
    return ( 
        <div className="conge-form-container">
            <div className="image-conge"></div>
            <hr width="100%" />
            <div className="conge-form-container-bg">
                <h1>Demande de congé</h1>
                <form className="form-container" id="form-container">
                <div className="form-elem">
                <div className="elem">
                <div className="elem1">
                <label> Nom * : </label>
                <input required type="text" placeholder="votre nom ..."/>
                </div>
                <div className="elem1">
                <label> Prenom * : </label>
                <input required type="text" placeholder="votre prenom ..."/>
                </div>
                </div>
                <div className="elem">
                <label> Fonction * : </label>
                <input required type="text" placeholder="votre fonction ..."/>
                </div>
                
                </div>
                <div className="form-elem">
                <div className="elem">
                <label> Structure * : </label>
                <input required type="text" placeholder="votre structure ..."/>
                </div>
               <div className="elem">
               <label> Agence * : </label>
                <input required type="text" placeholder="votre agence ..."/>
                </div>
               </div>
                
                <div className="form-elem">
                <label> Nature de Congé * : </label>
                <select name="type-conge" id="type-conge">
                    <option value="Annuel" className="opt">Annuel</option>
                    <option value="Exceptionnel" className="opt">Exceptionnel</option>
                    <option value="Recupération" className="opt">Récupération</option>
                </select>
                </div>
               <div className="form-elem">
                <div className="elem">
                <label> Date de depart * : </label>
                <input required type="date" placeholder="votre fonction ..." min="2022-01-08" />
                </div>
               <div className="elem">
               <label> Date de depart * : </label>
                <input required type="date" placeholder="votre fonction ..." min="2022-01-08" />
               </div>
               </div>
                <div className="form-elem">
                    <div className="elem">
                    <label> Nom du remplacant : </label>
                    <input type="text" placeholder="votre nom ..."/>
                    <label> Prenom du remplacant : </label>
                    <input type="text" placeholder="votre prenom ..."/>
                    </div>
                    <div className="elem">
                    <label> Fonction du remplacant : </label>
                    <input type="text" placeholder="votre fonction ..."/>
                    </div>
                    
                </div>
                <div className="form-elem">
                    <div className="elem">
                    <label> Adresse : </label>
                    <input type="text" placeholder="votre adresse ..."/>
                    </div>
                    <div className="elem">
                    <label> Telephone : </label>
                    <input type="text" placeholder="votre telephone ..."/>
                    </div>
                    
                </div>
                <div className="form-elem text-el">
                <input type="checkbox" required></input>
                <label> J'accepte les conditions générales et la politique de confidentialité</label>
                </div>
                <button>Valider</button>
                </form>
            </div>
        </div>
     );
}
 
export default CongeForm;