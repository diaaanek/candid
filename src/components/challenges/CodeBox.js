import React from 'react';
import './CodeChallenges.css';
import './Codebox.scss'


import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

// const code = '//';

function CodeBox(props) {
  return (

    <div className="CodeBox">

          <div className="flashcards-page">

          				<div className="instructions">
                    <h1> Code </h1>

          				</div>
          				<div className="flip-container" >
                    <CodeMirror
                      value={props.body}

                      options={{
                        theme: 'monokai',
                        keyMap: 'sublime',
                        mode: 'jsx',
                        lineWrapping: true,
                      }}
                    />
                  <div className="buttonContainer">
                  <button className="test button">Test </button>
                    <button className="submit button">Submit </button>
                    <button className="save button">Save </button>

                  </div>
                  {/*<div className="flipper">
          						<div className="front">
          						<textarea>Front code goes heree</textarea>
          						</div>
          						<div className="back">
          							Back
          						</div>
          					</div>
          				 */}
                    </div>
          		</div>
    </div>
  );
}

export default CodeBox;
