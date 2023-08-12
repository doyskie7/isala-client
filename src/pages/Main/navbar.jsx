import {Link } from 'react-router-dom'


export const NavBar = () => {

    return (
        <section className="menu cid-scDUXfYBSH" id="menu2-0">
            <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm bg-color transparent">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div className="menu-logo">
                    <div className="navbar-brand">
                        <span className="navbar-logo">
                            <a href="#top">
                                <img src="assets/images/logo.png" alt="Mobirise" title="" style={{height: "3.8rem"}} />
                            </a>
                        </span>
                        <span className="navbar-caption-wrap">
                            <a className="navbar-caption text-white display-4" href="#top">INTERNATIONAL SCHOOL OF THE ARTS, THE LANGUAGES, AND THE ACADEME &nbsp;<br /></a>
                        </span>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                        <Link  to="/"  className="nav-item nav-link link text-white display-4">
                            Home
                        </Link >
                      
                        <li className="nav-item  dropdown-mode">
                            <span className="nav-link link text-white display-4">Curriculum maps</span>
                            <div className="dropdown-content-mode">
                                <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                                    <Link  to="/elementary"  className="nav-item nav-link link text-white display-4">
                                        Elementary
                                    </Link >
                                    <Link  to="/juniorhs"  className="nav-item nav-link link text-white display-4">
                                        Junior High School
                                    </Link >
                                    <Link  to="/seniorhs"  className="nav-item nav-link link text-white display-4">
                                        Senior High School
                                    </Link >
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item  dropdown-mode">
                            <span className="nav-link link text-white display-4">Learning Modules</span>
                            <div className="dropdown-content-mode">
                                <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                                    <Link  to="/elementarylearning"  className="nav-item nav-link link text-white display-4">
                                        Elementary
                                    </Link >
                                    <Link  to="/juniorhslearning"  className="nav-item nav-link link text-white display-4">
                                        Junior High School
                                    </Link >
                                    <Link  to="/seniorhslearning"  className="nav-item nav-link link text-white display-4">
                                        Senior High School
                                    </Link >
                                    <Link  to="/enrichment"  className="nav-item nav-link link text-white display-4">
                                        Enrichment Class
                                    </Link >
                                </ul>
                            </div>
                        </li>
                        <Link  to="/about"  className="nav-item nav-link link text-white display-4">
                            About Us
                        </Link >

                        <Link  to="/contacts"  className="nav-item nav-link link text-white display-4">
                            Contacts
                        </Link >
                        

                        <li className="nav-item  dropdown-mode">
                            <span className="nav-link link text-white display-4">More</span>
                            <div className="dropdown-content-mode">
                                <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                                    <Link  to="/community"  className="nav-item nav-link link text-white display-4">
                                        Community Linkages
                                    </Link>
                                    <Link  to="/management"  className="nav-item nav-link link text-white display-4">
                                        School Management
                                    </Link>
                                    <Link  to="/services"  className="nav-item nav-link link text-white display-4">
                                        Programs and Services
                                    </Link>
                                </ul>
                            </div>
                        </li>
                    </ul>



                </div>
                
                
                
            </nav>
        </section>
    )
}