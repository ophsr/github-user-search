import Button from 'core/components/Button';
import { makeRequest } from 'core/utils/request';
import { UserGitHub } from 'core/utils/UserGitHub';
import React, { useState } from 'react';
import Loader from './components/Loaders/Loader';
import ProfileInfo from './components/ProfileInfo';
import './style.scss'


const Search = () => {

    const [user, setUser] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [profile, setProfile] = useState<UserGitHub>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }

    const request = () => {
        if (user !== '') {
            setIsLoading(true)
            makeRequest({ url: user })
                .then(response => setProfile(response.data))
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }

    return (
        <div>
            <div className="search-content ">
                <h2 className="seach-title">Encontre um perfil Github</h2>
                <input
                    onChange={handleChange}
                    value={user}
                    type="text"
                    className="search-input"
                    placeholder="Usuário Github"
                />
                <div className="search-button">
                    <Button text="Encontrar" onClick={request} />
                </div>
            </div>
            <div className="profile-content">
                {isLoading ? <Loader /> : (profile !== undefined ? <ProfileInfo user={profile} /> : <span></span>)}
            </div>
        </div>
    )
}

export default Search;