import * as React from 'react';
import S from './ItemCoin.module.scss'

export const ItemCoin = ({data}) => {
    console.log(data)
    return (
        <div className={S.body}>
            <div className={S.number}>{data.rank}</div>
            <div className={S.icon}><img src={data.icon} alt=""/></div>
            <div className={S.name}>{data.name}</div>
            <div className={S.price}>{data.price}</div>
        </div>
    );
};