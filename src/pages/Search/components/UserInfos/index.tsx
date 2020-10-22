import dayjs from 'dayjs'
import React from 'react'
import './style.scss'

type Props = {
    text: string;
    value?: string;
    date?: string;
}

const UserInfos = ({ text, value, date }: Props) => (
    <div className="user-info card-info">
        <p className="label">
            {text}:
        </p>
        <p>
            {date === undefined && (value !== null && value !== "")
                ? value
                : (date !== undefined
                    ? dayjs(date).format('DD/MM/YYYY')
                    : <i>Não informado</i>
                )
            }
        </p>
    </div>
)

export default UserInfos