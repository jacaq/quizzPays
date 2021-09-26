import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react"

const Accueil = () => {

    return (
        <div>
            {/* Bouton qui redirige vers le quizz*/}
            <Button as={NavLink} to="/quizz">Lancer le quizz!</Button>
        </div>
    )
}

export default Accueil;