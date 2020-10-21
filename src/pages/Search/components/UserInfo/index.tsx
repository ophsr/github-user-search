import React from 'react'
import { UserGitHub } from 'core/utils/UserGitHub'

type Props = {
    user: UserGitHub;
}

const UserInfo = ({user}:Props) => {

return (
        <div>
            <img src={user.avatar_url} alt={user.login} className="user-image"/>
        </div>

)

}

export default UserInfo