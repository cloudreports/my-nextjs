import React from 'react'

let conditionalDataProvider = null;

if (process.browser) {
	conditionalDataProvider = async () => {	
		let res = await fetch('http://127.0.0.1:3000/api/country');
		let countries = await res.json();
		
		return countries;
	}
} else {
	conditionalDataProvider = async () => {	
		const dataProvider = eval("require('" + SERVER_APP_ROOT + "/libs/dataProvider')");
		let countries = dataProvider.countryList();
		
		return countries;
	}
}

export default class ConditionalBuildingPage extends React.Component {
	static async getInitialProps() {
		let countries = await conditionalDataProvider();
	
		return {countries}
	}

	render() {
		return (
			<div>
				<h1>Country list</h1>
				<ul>
					{this.props.countries.map((country, i) => {
						return (
							<li key={'country-' + i}>{country.name}</li>
						)
					})}
				</ul>
			</div>
		)
	}
}
