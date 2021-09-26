import { Button, Card } from "semantic-ui-react";
import './Reponse.css';


const Reponse = ({ propositions, reponse, onSetRepondu, onSetIndex, index, selectionJoueur }) => {

    //Clique pour passer à la prochaine question
    const nextClickHandler = (e) => {
        //On remet repondu à false
        onSetRepondu(false);
        //Incrémentation de l'index
        onSetIndex(index + 4);
    }
    //   i===parseInt(selectionJoueur)? "repIdentique" : "bonneRep"
    //avant
    //<section className={i === reponse ? "bonneRep" : "mauvaiseRep"} key={i}>
    return (
        <div >
            <h2>{propositions[reponse].capital} est la capital de quel pays?</h2>
            <h3>Réponse:</h3>
            <div>
                <Card.Group className="centrer">
                    {propositions.map((choix, i) => (
                        <section className={i === reponse ? (i === (selectionJoueur) ? "repIdentique" : "bonneRep") : "mauvaiseRep"} key={i}>
                            <Card fluid >
                                <Card.Content className="imgCarte">
                                    <img src={choix.flags[0]} alt={choix.name} />
                                </Card.Content>
                                <Card.Content>
                                    <Card.Header>{choix.name}</Card.Header>
                                    <Card.Description>Sa capital est {choix.capital}</Card.Description>
                                </Card.Content>
                            </Card>
                        </section>
                    ))
                    }
                </Card.Group>
            </div>
            <Button className="button is-link is-medium is-fullwidth mt-4" onClick={() => nextClickHandler()}>Question suivante</Button>
        </div>
    );
}

export default Reponse;