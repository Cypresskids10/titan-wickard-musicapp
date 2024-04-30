'use client'
import { useState } from "react"
import styles from "./styles.css"

export default function MusicBox(props){ // component
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <div className="music-grid">
            <div className="image-box">
                <img src={props.source} alt="cover" className="music-image" onClick={() => {
                    window.open(props.link, '_blank')
                }} onMouseEnter={() => {
                    setIsHovered(true)
                }} onMouseLeave={() => {
                    setIsHovered(false)
                }}/>
                {isHovered ? <img src="play-b.webp" className="play-button" /> : <></>}
            </div>
            <div className="music-info-box">
                <h1 className="song-name">{props.name}</h1>
                <p className="music-supp-text">on</p>
                <p className="album">{props.album}</p>
                <p className="music-supp-text">by</p>
                <h1 className="artist-name">{props.artist}</h1>
                <p className="lyric">{props.lyric}</p>
            </div>
        </div>
    )
}

/*
    THE MOST FASHIONABLE FACTION: N/A: The Stupendium: https://www.youtube.com/watch?v=y1IE9zLKBrw 'I’ve got a cranium laced with uranium'
    Meet The Crew: N/A: JT Music: https://www.youtube.com/watch?v=VpJE714_ltc: 'I mean do you even know who you're talking to?'
    SOMBRA VS SPY RAP BATTLE: N/A: JT Music: https://www.youtube.com/watch?v=Ep1PTvHlMwg&list=PLjO04ZlrzPli-WzmZ2bSMi5MC9vnczhhX&index=10: 'That is why I call you half-wit.'
    Mei vs Pyro Rap Battle: N/A: JT Music: https://www.youtube.com/watch?v=9oZ3Y2Hn10U: 'Arg! Welcome to Hell!'
    JUNKRAT VS DEMOMAN RAP BATTLE: N/A: JT Music:https://www.youtube.com/watch?v=UlHDGBWJOkQ:'If I'm your blueprint, why aren't you a inprovement?'
    SNIPER VS WIDOWMAKER RAP BATTLE: N/A: JT Music: https://www.youtube.com/watch?v=MXbHr1zte-E: 'I feel your pain, I still hate you though'
    Team Fortress Main Theme: Team Fortress Soundtrack: Valve Studio: https://www.youtube.com/watch?v=PDM2qukzKwg: no lyrics 
    More Gun (Version 1): Team Fortress Soundtrack: Valve Studio: https://www.youtube.com/watch?v=6NTfCbfvwM8&list=PL4E9ABD7FF1106BD3&index=11: no lyrics
    TF2 Saxxy 2011 Theme: Team Fortress Soundtrack: Valve Studio: https://www.youtube.com/watch?v=pW-9JlII3UU&list=PL4E9ABD7FF1106BD3&index=16: no lyrics
    ROBOTS!: Team Fortress Soundtrack: Valve Studio: https://www.youtube.com/watch?v=vw-WJkJK210&list=PL4E9ABD7FF1106BD3&index=22: no lyrics
*/