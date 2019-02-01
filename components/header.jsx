import React from 'react'

export default class AppHeader extends React.Component {
    render() {
        return (
            <header className="header_area">
                <div className="logo_part">
                    <div className="container">
                        <a className="logo" href="#"><img src="/static/assets/template/fantom/img/logo.png" alt="" /></a>
                    </div>
                </div>
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                            <a className="navbar-brand logo_h" href="index.html"><img src="/static/assets/template/fantom/img/logo.png" alt="" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav">
                                    <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li> 
                                    <li className="nav-item"><a className="nav-link" href="category.html">Category</a></li>
                                    <li className="nav-item"><a className="nav-link" href="archive.html">Archive</a></li>
                                    <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
                                            <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                                        </ul>
                                    </li> 
                                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
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
