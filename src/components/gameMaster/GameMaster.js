import React, { Component } from 'react'
import { connect } from 'react-redux'

import './GameMaster.css'

class GameMaster extends Component {

    render() {
        const { characters } = this.props;
        return (
            <div className="game-master">
                <span className="intro narrative">Bienvenu grand maître du jeu ! Ici tu gardera un oeil sur tous les personnages jouables</span>
                <div className="characters-overview">
                    {characters && Object.values(characters).map(({ Name: name}) => (
                        <div key={name} className="character-overview">
                            <span>{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      characters: state.game.characters
    }
}
export default connect(mapStateToProps)(GameMaster)

