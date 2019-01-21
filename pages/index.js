import React from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'

export default class HomePage extends React.Component {
    static async getInitialProps() {
        let res = await fetch('https://cloudreports.net/sample/api/countries.json')
        let contriesObj = await res.json()
        console.log(contriesObj)
        return {countries: contriesObj}
    }

    render() {
        return (
            <div>
                Hello World.<br />
                <Link href='/about'><a>About</a></Link>
                <h2>Country list</h2>
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
