import React from 'react'
import Link from 'next/link'

export default class CustomLink extends React.Component {
    static BASEDIR = null
    constructor() {
        super();
    }

    render() {
        let props = {...this.props}
        let baseDir = this.props.baseDir || CustomLink.BASEDIR
        console.log(baseDir);
        props.href && (props.href = (baseDir + props.href))
        props.as && (props.as = (baseDir + props.as))
        return <Link {...props} />
    }
}
