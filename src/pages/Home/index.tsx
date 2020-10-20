import Button from 'core/components/Button'
import React from 'react'
import { Link } from 'react-router-dom';
import './sytle.scss'



const Home = () => (
    <div className="home-content">
        <h1 className="home-title">Desafio do Capítulo 3,<br></br>Bootcamp DevSuperior</h1>
        <div className="home-description-content">
            <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
            <p>Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.</p>
            <p>Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <span className="highlighted">antforfigma@gmail.com</span></p>
        </div>
        <Link to="/search">
            <Button text="Começar" />
        </Link>
    </div>
)

export default Home;