import React, { PureComponent } from 'react'
import { gameDatabase } from 'database/InitializeDatabase'
import { DATA_MODEL } from 'database/DataModel'
import { objectToArray } from 'database/Tools'
import { updateNotes, ALL_CHARACTERS_ID } from 'database/PersistNotes';

import './GameMaster.css'
import CharacterOverview from './CharacterOverview'
import GeneralNotesComponent from 'components/user/GeneralNotesComponent';

const GM_NAME = "GM";
class GameMaster extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
          characters: null,
          generalNotes: []
        }
        this.charactersRef = gameDatabase.ref(DATA_MODEL.CHARACTERS.name);
        this.updateCharacters = (snapshot)  => { this.setState({ characters: snapshot.val() && Object.values(objectToArray(snapshot.val())) }); }
        this.generalNotesRef = gameDatabase.ref(DATA_MODEL.NOTES.name+"/"+ALL_CHARACTERS_ID);
        this.updateGeneralNotes = (snapshot) => {
            const newState = snapshot.val() && Object.values(snapshot.val());
            this.setState({generalNotes: newState});
        }
    }

    componentDidMount() {
        this.charactersRef.on('value', this.updateCharacters);
        this.generalNotesRef.on('value', this.updateGeneralNotes);
    }
    componentWillUnmount() {
        this.charactersRef.off('value', this.updateCharacters);
        this.generalNotesRef.off('value', this.updateGeneralNotes);
    }

    render() {
        const { characters, generalNotes } = this.state;
        return (
            <div className="game-master">
                <span className="intro narrative">Bienvenu grand maître du jeu ! Ici tu gardera un oeil sur tous les personnages jouables</span>
                <GeneralNotesComponent notes={generalNotes} editorCharacter={GM_NAME} onChange={(value) => updateNotes(value, ALL_CHARACTERS_ID) } />
                <div className="characters-overview">
                    {characters?.map((character) => (
                        <CharacterOverview key={character.Id} character={character} />
                    ))}
                </div>
            </div>
        )
    }
}

export default GameMaster

