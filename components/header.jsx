import React from 'react'
import Link from 'next/link'

export default class AppHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPathName: null
        }
    }
    componentDidMount() {
        this.setState({
            currentPathName: window.location.pathname
        });
    }
    render() {
        let menuItems = [{
                href: '/',
                pathname: '/',
                label: 'Home',
                className: 'nav-item' + (this.state.currentPathName == '/' ? ' active' : '')
            }, {
                href: '/category.html',
                pathname: '/category.html',
                label: 'Category',
                className: 'nav-item' + (this.state.currentPathName == '/category.html' ? ' active' : '')
            }, {
                href: '/archive.html',
                pathname: '/archive.html',
                label: 'Archive',
                className: 'nav-item' + (this.state.currentPathName == '/archive.html' ? ' active' : '')
            }, {
                href: '#',
                pathname: '#',
                label: 'Submenus',
                className: 'nav-item submenu dropdown' + (this.state.currentPathName == 'single-blog.html' || this.state.currentPathName == 'elements.html' ? ' active' : ''),
                subs: [{
                        href: '/single-blog.html',
                        pathname: '/single-blog.html',
                        label: 'Blog Details',
                    }, {
                        href: '/elements.html',
                        pathname: '/elements.html',
                        label: 'Elements',
                    }
                ]
            }, {
                href: '/single-blog.html',
                pathname: '/single-blog.html',
                label: 'Blog Details',
                className: 'nav-item' + (this.state.currentPathName == '/single-blog.html' ? ' active' : '')
            }, {
                href: '/elements.html',
                pathname: '/elements.html',
                label: 'Elements',
                className: 'nav-item' + (this.state.currentPathName == '/elements.html' ? ' active' : '')
            }, {
                href: '/contact.html',
                pathname: '/contact.html',
                label: 'Contact',
                className: 'nav-item' + (this.state.currentPathName == '/contact.html' ? ' active' : '')
            }
        ];
        return (
            <header className="header_area">
                <div className="logo_part">
                    <div className="container">
                        <a className="logo" href="/"><img src="/static/assets/template/fantom/img/logo.png" alt="" /></a>
                    </div>
                </div>
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                            <a className="navbar-brand logo_h" href="/"><img src="/static/assets/template/fantom/img/logo.png" alt="" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav">
                                    {/* <li className="nav-item active"><a className="nav-link" href="/">Home</a></li> 
                                    <li className="nav-item">
                                        <Link as="/category.html" href={{pathname: '/category.html'}}>
                                            <a className="nav-link" href="category.html">Category</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="archive.html">Archive</a></li>
                                    <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
                                            <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                                        </ul>
                                    </li> 
                                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li> */}

                                    {menuItems.map((menu, i) => {
                                        let subMenus = '';
                                        if (menu.subs) {
                                            subMenus = (<ul className="dropdown-menu">
                                                {menu.subs.map((sm, i) => {
                                                    return (
                                                        <li className="nav-item" key={'sm-' + i}>
                                                            <Link as={sm.href} href={{pathname: sm.pathname}}>
                                                                <a className="nav-link" href={sm.href}>{sm.label}</a>
                                                            </Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>)
                                        }
                                        return (
                                            <li className={menu.className} key={'m-' + i}>
                                                <Link as={menu.href} href={{pathname: menu.pathname}}>
                                                    <a className="nav-link" href={menu.href}>{menu.label}</a>
                                                </Link>
                                                {subMenus}
                                            </li>
                                        )
                                    })}

                                </ul>
                                <ul className="nav navbar-nav navbar-right ml-auto">
                                    <li className="nav-item"><a href="#" className="search"><i className="lnr lnr-magnifier"></i></a></li>
                                </ul>
                            </div> 
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
