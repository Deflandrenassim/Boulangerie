import React from 'react'
import '../css/GameInformation.css'


const GameInformation = () => {
    return (
        <div className='game_information'>
            <div className="welcome"> Welcome à BoulangeRiz</div>
            <div className='information'>Le but est simple appuie sur le bouton +1 pour pouvoir debloqué
                des bonnes patisseries et gateaus
            </div>
        </div>
    )
}

export default GameInformation;