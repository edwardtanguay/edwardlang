import { useState, useEffect } from 'react';
import './App.scss';
import spanishVerbs from './data/spanishVerbs.json';
import initialSpanishRules from './data/spanishRules.json';

initialSpanishRules.forEach((m) => (m.expanded = false));

function App() {
    const [spanishRules, setSpanishRules] = useState(initialSpanishRules);

    const handleToggleRule = (rule) => {
        rule.expanded = !rule.expanded;
        setSpanishRules([...spanishRules]);
    };

    return (
        <div className="App">
            <h1>Edward's Language Site</h1>
            <h2>Rules</h2>
            <div className="rules">
                {spanishRules.map((rule, i) => {
                    return (
                        <div className="rule" key={i}>
                            <div
                                className="frontSide"
                                onClick={() => handleToggleRule(rule)}
                            >
                                {rule.front}
                            </div>
                            {rule.expanded && (
                                <div className="backSide">
                                    <div className="back">{rule.back}</div>
                                    {rule.notes && (
                                        <ul className="notes">
                                            {rule.notes.map((note, i) => {
                                                return <li>{note}</li>;
                                            })}
                                        </ul>
                                    )}
                                    {rule.examples && (
                                        <ul className="examples">
                                            {rule.examples.map((example, i) => {
                                                return <li>{example}</li>;
                                            })}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <h2>Verbs</h2>
            <div className="verbs">
                {spanishVerbs.map((verb, i) => {
                    return (
                        <div className="verb" key={i}>
                            <div className="english">{verb.english}</div>
                            <div className="spanish">{verb.verb}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
