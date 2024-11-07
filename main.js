import './style.css'
import './style.scss';
import { startTypingGame } from './typingGame.js';

document.querySelector('#app').innerHTML = `
  <div id="game">
    <h1>Ritunar Æfing</h1>
    &nbsp;
    <hr width="100%" size="2">
    <p id="target-word"></p>
    <input type="text" id="input" placeholder="Skrifaðu hér..." autofocus />
    <p id="feedback"></p>
    <p>Stig: <span id="score">0</span></p>
    <button id="reset">Reset</button>
  </div>
`;

startTypingGame();