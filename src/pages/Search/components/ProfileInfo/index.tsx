import React from 'react'
import { UserGitHub } from 'core/utils/UserGitHub'
import './style.scss'
import StatisticsInfos from '../StatisticsInfos'
import UserInfos from '../UserInfos'
import Button from 'core/components/Button'

type Props = {
    user: UserGitHub;
}

const ProfileInfo = ({ user }: Props) => {
    return (
        <>
            <div className="user-image-content">
                <img src={user.avatar_url} alt={user.login} className="user-image" />
                <a href={`https://github.com/${user.login}`}><Button text='Ver Perfil' /></a>
            </div>
            <div className="user-infos-content">
                <div className="user-statistics">
                    <StatisticsInfos text='Repositórios públicos' value={user.public_repos} />
                    <StatisticsInfos text='Seguidores' value={user.followers} />
                    <StatisticsInfos text='Seguindo' value={user.following} />
                </div>
                <div className="card-info">
                    <h2 className="user-info-title ">Informações</h2>
                    <UserInfos text='Empresa' value={user.company} />
                    <UserInfos text='Website/Blog' value={user.blog} />
                    <UserInfos text='Localidade' value={user.location} />
                    <UserInfos text='Membro desde' date={user.created_at} />
                </div>
            </div>
        </>
    )
}

export default ProfileInfo