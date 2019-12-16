import React, { Component } from 'react'
import { database } from 'database/InitializeDatabase'
import { DATA_MODEL } from 'database/DataModel'
import { objectToArray } from 'database/Tools'

import './GameMaster.css'
import CharacterOverview from './CharacterOverview'

class GameMaster extends Component {
    constructor (props) {
        super(props);
        this.state = {
          characters: null
        }
        this.charactersRef = database.ref(DATA_MODEL.CHARACTERS.name);
        this.updateCharacters = (snapshot)  => { this.setState({ characters: objectToArray(snapshot.val()) }); }
    }

    componentDidMount() {
        this.charactersRef.on('value', this.updateCharacters);
    }
    componentWillUnmount() {
        this.charactersRef.off('value', this.updateCharacters);
    }

    render() {
        const { characters } = this.state;
        return (
            <div className="game-master">
                <span className="intro narrative">Bienvenu grand maître du jeu ! Ici tu gardera un oeil sur tous les personnages jouables</span>
                <div className="characters-overview">
                    {characters && Object.values(characters).map((character) => (
                        <CharacterOverview key={character.Id} character={character} />
                    ))}
                </div>
            </div>
        )
    }
}

export default GameMaster

