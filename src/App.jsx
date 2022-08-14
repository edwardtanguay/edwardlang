import { useState, useEffect } from 'react';
import './App.scss';
import initialSpanishRules from './data/spanishRules.json';
import initialSpanishVerbKinds from './data/spanishVerbKinds.json';

initialSpanishRules.forEach((m) => (m.expanded = false));
initialSpanishVerbKinds.forEach((m) => (m.expanded = false));

function App() {
	const [spanishRules, setSpanishRules] = useState(initialSpanishRules);
	const [spanishVerbKinds, setSpanishVerbKinds] = useState(
		initialSpanishVerbKinds
	);

	const handleToggleRule = (rule) => {
		rule.expanded = !rule.expanded;
		setSpanishRules([...spanishRules]);
	};

	return (
		<div className="App">
			<h1>Edward's Spanish Site</h1>
			<div className="verbs">
				{spanishVerbKinds.map((verbKind, i) => {
					return (
						<div className="verbKind" key={i}>
							<div className="title">
								<h2>{verbKind.title}</h2>
							</div>
							{verbKind.list.map((verbObj, i) => {
								return (
									<div className="verbObj" key={i}>
										<div className="verb">
											<a
												target="_blank"
												href={`https://www.123teachme.com/spanish_verb_conjugation/${verbObj.verb}`}
											>
												{i + 1}. {verbObj.verb}
											</a>
										</div>
										<ul className="subitems">
											{verbObj.rules && (
												<li className="rules subitem">
													{verbObj.rules}
												</li>
											)}
											{verbObj.examples?.map(
												(example, i) => {
													return (
														<li
															className="example subitem"
															key={i}
														>
															<div className="front">
																{
																	example.split(
																		'/'
																	)[1]
																}
															</div>
															<div className="back">
																{
																	example.split(
																		'/'
																	)[0]
																}
															</div>
														</li>
													);
												}
											)}
										</ul>
									</div>
								);
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
