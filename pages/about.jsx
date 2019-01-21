import React from 'react'
import Link from 'next/link'

export default class AboutPage extends React.Component {
    static async getInitialProps() {
        let res = await fetch('https://cloudreports.net/sample/api/countries.json')
        let contriesObj = await res.json()
        return {countries: contriesObj}
    }
    render() {
        return (
            <div>
                About page<br />
                <Link href='/'><a>home</a></Link>
                <h2>Country codes</h2>
                <ul>
                    {this.props.countries.map((country, i) => {
                        return (
                            <li key={'country-' + i}>{country.code}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
