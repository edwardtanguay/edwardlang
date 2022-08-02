import './App.scss';
import spanishVerbs from './data/spanishVerbs.json';

function App() {
    return (
        <div className="App">
            <h1>Edward's Language Site</h1>
            <div className="verbs">
                {spanishVerbs.map((verb, i) => {
                  return <div className="verb" key={i}>
                      <div className="english">{verb.english}</div>
                      <div className="spanish">{verb.verb}</div>
                    </div>;
                })}
            </div>
        </div>
    );
}

export default App;
