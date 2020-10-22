import React from 'react'
import './style.scss'

type Props = {
    text: string;
    value?:number
}

const StatisticsInfos = ({ text,value = 0 }: Props) =>(
    <div className="statistics-infos card-info">
        <p>{text}: {value}</p>
    </div>
)

export default StatisticsInfos