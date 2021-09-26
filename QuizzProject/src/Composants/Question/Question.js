import { Button } from "semantic-ui-react";
import { useState, useRef } from "react";
import "./Question.css";

const Question = ({ propositions, reponse, onSetRepondu, onSetScore, leScore, onSetSelection }) => {

    //Message d'erreur
    const [error, setError] = useState('');
    //Pour récupérer la sélection du joueur
    const [selected, setSelected] = useState('');

    const radioWrapper = useRef();

    //Effet sur "CHANGEMENT"
    const changeHandler = (e) => {
        setSelected(e.target.value);

        //POUR ENLEVER L'ERREUR du manque de sélection
        if (error) {
            setError('');
        }

    }

    //Fonction quand le joueur clique sur le bouton valider
    const validerClickHandler = () => {
        //Si le joueur n'a rien sélection on affiche un message d'erreur
        if (selected === '') { return setError('SVP faites une sélection!'); }
        else {
            //Pour dire que le joueur a répondu
            onSetRepondu(true);
            //Incrémentation du score
            if (parseInt(selected) === reponse) {
                onSetScore(leScore + 1);
                //envois de la reponse du joueur pour tester laffichage dans Reponse.js
                onSetSelection(parseInt(selected));
            }
            //Réinitialisation de la sélection
            setSelected('');
        }
    }

    return (
        <div>
            <h2>{propositions[reponse].capital} est la capital de quel pays?</h2>

            <div className="control" ref={radioWrapper} >
                {propositions.map((choix, i) => (
                    <label className="radio has-background-light" key={i}>
                        <input style={{ marginRight: "5px" }} type="radio" name="answer" value={i} onChange={changeHandler} />
                        {choix.name}
                    </label>
                ))}
            </div>
            {error && <div className="has-text-danger">{error}</div>}


            <Button onClick={validerClickHandler} className="bouton">Valider</Button>
        </div>
    )
}

export default Question;