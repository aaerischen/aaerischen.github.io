import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/starico.png";
import "../css/Toolbar.css";
import myphoto from "../assets/me.jpg";
import react from "../assets/reacticon.gif";
import love from "../assets/love.gif";

function Toolbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="wrapper">
      <button className="btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>╰┈➤MENU✨</span>
      </button>
      <div className={`toolbar ${isOpen ? "open" : "closed"}`}>
        <div className = "content_list"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >            
        
          <div className="toolbar-item">
          <svg className="icon_tool" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M18.303 16a2.662 2.662 0 0 0-1.908.806l-.393.405l-.397-.405a2.662 2.662 0 0 0-3.816 0a2.8 2.8 0 0 0 0 3.896L16.002 25l4.209-4.298a2.8 2.8 0 0 0 0-3.896A2.662 2.662 0 0 0 18.303 16"/><path fill="currentColor" d="m25.7 9.3l-7-7A.908.908 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.908.908 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"/></svg>
            <a href={require('../assets/cv_bazarova.pdf')} target="_blank" rel="noopener noreferrer">CV/Résumé</a>
          </div>
          <div className="toolbar-item">
          <svg className="icon_tool" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsGithubFill0)"><path fill="currentColor" fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsGithubFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
            <a href="https://github.com/aaerischen" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <hr/>
          <div className="toolbar-item">
          <svg className="icon_tool" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>
            <a href="https://x.com/heavenlyblau" target="_blank" rel="noopener noreferrer">Twitter/X</a>
          </div>
          <hr/>
          <div className="toolbar-item">
          <svg className="icon_tool" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsTelegramFill0)"><path fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0s12 5.373 12 12M12.43 8.859c-1.167.485-3.5 1.49-6.998 3.014c-.568.226-.866.447-.893.663c-.046.366.412.51 1.034.705c.085.027.173.054.263.084c.613.199 1.437.432 1.865.441c.389.008.823-.152 1.302-.48c3.268-2.207 4.955-3.322 5.061-3.346c.075-.017.179-.039.249.024c.07.062.063.18.056.212c-.046.193-1.84 1.862-2.77 2.726c-.29.269-.495.46-.537.504c-.094.097-.19.19-.282.279c-.57.548-.996.96.024 1.632c.49.323.882.59 1.273.856c.427.291.853.581 1.405.943c.14.092.274.187.405.28c.497.355.944.673 1.496.623c.32-.03.652-.331.82-1.23c.397-2.126 1.179-6.73 1.36-8.628a2.111 2.111 0 0 0-.02-.472a.506.506 0 0 0-.172-.325c-.143-.117-.365-.142-.465-.14c-.451.008-1.143.249-4.476 1.635" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsTelegramFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
            <a href="https://t.me/revacholierekitsuragi" target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
          <hr/>
          <div className="toolbar-item">
          <svg className="icon_tool" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553A395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4c7.3 0 14.3-.6 21.2-1.8c134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8"/></svg>
            <a href="tel:+79969353058" target="_blank" rel="noopener noreferrer">Phone number</a>
          </div>
          <div className="trivia">
            <span>This site is made with <a href='https://react.dev/'>React<img src={react} /></a> and <img src={love} /></span>
          </div>
        </div> 
      </div>           
    </div>
  );
}

export default Toolbar;