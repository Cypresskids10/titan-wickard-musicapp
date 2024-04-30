import styles from './styles.css'
import MusicBox from './MusicBox'
export default function Body(){ //body component
    return (
        <div className='body-content'>
            <MusicBox name={"THE MOST FASHIONABLE FACTION"} artist={"The Stupendium"} album={"N/A"} link={"https://www.youtube.com/watch?v=y1IE9zLKBrw"} lyric={"I've got a cranium laced with uranium"} source={"mom.jpg"}/>
            <MusicBox name={"Meet The Crew"} artist={"JT Music"} album={"N/A"} link={"https://www.youtube.com/watch?v=VpJE714_ltc"} lyric={"I mean do you even know who you're talking to?"} source={"download.jpg"}/>
            <MusicBox name={"SOMBRA VS SPY RAP BATTLE"} artist={"JT Music"} album={"N/A"} link={"https://www.youtube.com/watch?v=Ep1PTvHlMwg&list=PLjO04ZlrzPli-WzmZ2bSMi5MC9vnczhhX&index=10"} lyric={"That is why I call you half-wit."} source={"BIG B.jpg"}/>
            <MusicBox name={"Mei vs Pyro Rap Battle"} artist={"JT Music"} album={"N/A"} link={"https://www.youtube.com/watch?v=9oZ3Y2Hn10U"} lyric={"ARG! Welcome to Hell!"} source={"h.jpg"}/>
            <MusicBox name={"JUNKRAT VS DEMOMAN RAP BATTLE"} artist={"JT Music"} album={"N/A"} link={"https://www.youtube.com/watch?v=UlHDGBWJOkQ"} lyric={"If I'm your blueprint, why aren't you a inprovement?"} source={"DEMO.jpg"}/>
            <MusicBox name={"SNIPER VS WIDOWMAKER RAP BATTLE"} artist={"JT Music"} album={"N/A"} link={"https://www.youtube.com/watch?v=MXbHr1zte-E"} lyric={"I feel your pain, I still hate you though"} source={"nuts.jpg"}/>
            <MusicBox name={"Team Fortress Main Theme"} artist={"Valve Studio"} album={"Team Fortress Soundtrack"} link={"https://www.youtube.com/watch?v=PDM2qukzKwg"} lyric={"none"} source={"SNIPER!!!.jpg"}/>
            <MusicBox name={"More Gun (Version 1)"} artist={"Valve Studio"} album={"Team Fortress Soundtrack"} link={"https://www.youtube.com/watch?v=6NTfCbfvwM8&list=PL4E9ABD7FF1106BD3&index=11"} lyric={"ENGINEER GAMING!!!"} source={"LEVEL 4 SENTRY!.jpg"}/>
            <MusicBox name={"TF2 Saxxy 2011 Theme"} artist={"Valve Studio"} album={"Team Fortress Soundtrack"} link={"https://www.youtube.com/watch?v=pW-9JlII3UU&list=PL4E9ABD7FF1106BD3&index=16"} lyric={"saxxy"} source={"SAXTON.jpg"}/>
            <MusicBox name={"ROBOTS!"} artist={"Valve Studio"} album={"Team Fortress Soundtrack"} link={"https://www.youtube.com/watch?v=vw-WJkJK210&list=PL4E9ABD7FF1106BD3&index=22"} lyric={"NONE"} source={"MVM!.jpg"}/>
        </div>
    )
}

