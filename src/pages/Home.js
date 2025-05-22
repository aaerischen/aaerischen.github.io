import React, { useRef, useState } from 'react';
import '../css/Home.css';
import icon1 from "../assets/planetico_transp.png";
import icon2 from "../assets/folderico.png";
import icon3 from "../assets/mailico.png";
import icon4 from "../assets/homeico.png";
import star from "../assets/Untitled2.png";
import Portfolio from './Portfolio';
import About from './About';
import Contacts from './Contacts';


function Home() {
    const nodeRef = useRef(null);
    React.useEffect(() => {
        const node = nodeRef.current;
        console.log(node); // Access the DOM node here
    }, []);

    const [isWindowOpen2, setIsWindowOpen2] = useState(false);
    const [isWindowOpen3, setIsWindowOpen3] = useState(false);
    const [isWindowOpen4, setIsWindowOpen4] = useState(false);

    return (
        <div className="home" ref={nodeRef}>
            <button className="icon_btn" onClick={() => {window.location.reload()}}>
                    <img src={icon4} />
                    <p>Home</p>
            </button>
            <button className="icon_btn" onClick={() => {setIsWindowOpen2(!isWindowOpen2)}}>
                <img src={icon2} />
                <p>Portfolio</p>
            </button>
            <button className="icon_btn" onClick={() => {setIsWindowOpen3(!isWindowOpen3)}}>
                <img src={icon3} />
                <p>Contact me</p>
            </button>
            <button className="icon_btn" onClick={() => {setIsWindowOpen4(!isWindowOpen4)}}>
                <img src={icon1} />
                <p>About me</p>
            </button>
            <div className="headerContainer">
                <div className="HC1">
                    <h1> Vera's personal page </h1>
                    <hr />
                    <h2> Welcome</h2>
                </div>
                <img src={star} className="star" />
            </div>
            {isWindowOpen2 && (
                <Portfolio />
            )}

            {isWindowOpen3 && (
                <Contacts />
            )}

            {isWindowOpen4 && (
                <About />
            )}
        </div>
    );

}

export default Home;