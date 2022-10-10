import React from 'react'
import { useParams } from 'react-router-dom'

export const Profile = () => {
    const { name } = useParams()
    console.log(name)
    return (
        <div>Desde Profile {name}</div>
    )
}
