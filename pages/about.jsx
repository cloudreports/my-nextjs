import React from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'

import CustomLink from './CustomLink'
CustomLink.BASEDIR = '/sub'

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
                <CustomLink href='/'><a>home</a></CustomLink>
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
