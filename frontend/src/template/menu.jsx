import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <i className="fa fa-calendar-check-0"></i> Buscar por:
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className="nav navbar-nav">
                    <li><a href='#/'>deputado</a></li>
                    <li><a href='#/partidos'>partido</a></li>
                    <li><a href='#/estados'>estado</a></li>
                </ul>
            </div>
        </div>
    </nav>
)