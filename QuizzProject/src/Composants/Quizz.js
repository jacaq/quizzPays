import { useEffect, useState } from "react/cjs/react.development";
import { Button } from "semantic-ui-react";
import Question from "./Question/Question";
import Reponse from "./Reponse/Reponse";
import { NavLink } from "react-router-dom";
//Au cas où l'API ne fonctionne pas
//import paysData from "../Json/quiz.json";


const Quizz = () => {

    //Booléen pour savoir si le quizz est lancé ou non
    const [lance, setLance] = useState(false);
    //Table contenant les données récupérées de l'API
    const [pays, setPays] = useState([]);
    //Index servant à savoir à quel groupe de 4 pays le quizz est rendu
    const [index, setIndex] = useState(0);
    //Index indiquant laquelle des propositions est la réponse active
    const [reponse, setReponse] = useState(Math.floor(Math.random() * 4));
    //Booléen pour savoir si le joueur a répondu
    //Quand le joueur a répondu, on affiche les réponses
    const [repondu, setRepondu] = useState(false);
    //Total du score
    const [score, setScore] = useState(0);
    //test variable qui prendre la vleur du selected dans question
    const [selection, setSelection] = useState(0);

    //Fonction pour la requête de l'API
    const onClickCategorie = (region) => {
        fetch(`https://restcountries.com/v2/continent/${region}?fields=name,capital,flags`)
            .then((response) => response.json())
            .then((data) => setPays(
                //On récupère aléatoirement 32 pays pour avoir 8 questions (4 pays par question)
                data.sort(() => Math.random() - Math.random()).slice(0, 32)
            ));

        //Si l'API ne fonctionne pas:
        //setPays(paysData.data);

        setLance(true); //Le quizz est lancé
    }

    //Le useEffect est utilisé pour changer le state reponse
    useEffect(() => {
        setReponse(Math.floor(Math.random() * 4));
    }, [index]);

    return (
        <div >
            {lance ?
                pays.length > 0 ?
                    index < pays.length ?
                        !repondu ? <Question propositions={pays.slice(index, index + 4)} reponse={reponse} onSetRepondu={setRepondu} onSetScore={setScore} leScore={score} onSetSelection={setSelection} />
                            : <Reponse propositions={pays.slice(index, index + 4)} reponse={reponse} onSetRepondu={setRepondu} onSetIndex={setIndex} index={index} selectionJoueur={selection} />
                        :
                        <div>
                            <h1>Votre score: </h1>
                            <h2>{score}/{pays.length / 4}</h2>
                            {/* Bouton qui redirige vers le quizz*/}
                            <Button as={NavLink} to="/">Faire un autre quizz</Button>
                        </div>
                    : <p>Téléchargement...</p>
                : <div>
                    <h2>Choisissez une catégorie:</h2>
                    <Button onClick={() => onClickCategorie('africa')}>Afrique</Button>
                    <Button onClick={() => onClickCategorie('americas')}>Amériques</Button>
                    <Button onClick={() => onClickCategorie('asia')}>Asie</Button>
                    <Button onClick={() => onClickCategorie('europe')}>Europe</Button>
                </div>}
        </div>
    )
}

export default Quizz;