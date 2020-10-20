import Button from 'core/components/Button';
import { makeRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import ImageLoader from './components/ImageLoader';
import InfoLoader from './components/InfoLoader';
import './style.scss'


const Search = () => {

    const [user, setUser] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [profile, setProfile] = useState();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: 'ophsr' })
            .then(response => setProfile(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, []);


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
                    <Button text="Encontrar" />
                </div>
            </div>
            <div className="profile-content">
                <div>
                    <ImageLoader />
                </div>
                <div className="profile-info-loader">
                    <InfoLoader />
                </div>
            </div>
        </div>

    )
}

export default Search;