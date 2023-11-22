import React from 'react'
import styled from './StickerItem.module.css'

export const StickerItem = ({id, title, url}) => {

    return (
        <div className="animate__animated animate__bounce ">
            <div className={styled.card}>
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>
        </div>
    )
}
