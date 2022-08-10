import { useState, useEffect } from 'react';
import './App.scss';
import initialSpanishRules from './data/spanishRules.json';
import initialSpanishVerbKinds from './data/spanishVerbKinds.json';

initialSpanishRules.forEach((m) => (m.expanded = false));
initialSpanishVerbKinds.forEach((m) => (m.expanded = false));

function App() {
    const [spanishRules, setSpanishRules] = useState(initialSpanishRules);
    const [spanishVerbKindss, setSpanishVerbKinds] = useState(initialSpanishVerbKinds);

    const handleToggleRule = (rule) => {
        rule.expanded = !rule.expanded;
        setSpanishRules([...spanishRules]);
    };

    return (
        <div className="App">
            <h1>Edward's Spanish Site</h1>
            <div className="verbs">
                {spanishVerbKindss.map((verbKind, i) => {
                    return (
                        <div className="verbKind" key={i}>
                            <div className="title"><h2>{verbKind.title}</h2></div>
                            {verbKind.list.map((verbObj, i) => {
                                return (
                                    <div className="verb">{verbObj.verb}</div>
                                )
                            })}
                        </div>
                    );
                })}
            </div>
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

        </div>
    );
}

export default App;
