import React, { PureComponent } from 'react'
import { gameDatabase } from 'database/InitializeDatabase'
import { DATA_MODEL } from 'database/DataModel'
import { objectToArray } from 'database/Tools'
import { insertScenario } from 'database/PersistScenario';

import './Home.css'
import ScenarioInput from './ScenarioInput'
import ScenarioComponent from './ScenarioComponent'

class Home extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
		scenarios: null
    }
    this.scenariosRef = gameDatabase.ref(DATA_MODEL.SCENARIOS.name);
	this.updateScenarios = (snapshot)  => { this.setState({ scenarios: objectToArray(snapshot.val()) }); }
  }

  componentDidMount() {
    document.title = "JdR Manager";
    this.scenariosRef.on('value', this.updateScenarios);
  }
  componentWillUnmount() {
      this.scenariosRef.off('value', this.updateScenarios);
  }

  render()  {
    const { scenarios } = this.state
    return (
      <div className="menu">
		{scenarios && Object.values(scenarios).map((scenario) => (
			<ScenarioComponent key={scenario.Id} scenario={scenario} />
		))}
		<div className="scenario">
			<ScenarioInput onSubmit={this.insertScenario} />
		</div>
      </div>
    )
  }

  // Arrow fx for binding
  insertScenario = (scenario) => {
	  if (scenario.Id) {
		  insertScenario(scenario);
	  }
  }
}
export default Home