import React, { useEffect, useState } from 'react'
import Card from './Card';
import { Link } from 'react-router-dom'

const Cat = () => {
    const [cat, setCat] = useState([]);
    const fetchData = async () => {
        const data = await fetch('https://api.thecatapi.com/v1/breeds')
        const dataJson = await data.json()
        const shortData = dataJson.slice(0, 10)
        setCat(shortData)
        console.log('cats::', shortData)
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='cats'>
            {
                cat.map(cat => (
                    <Link to={`/cat/${cat.id}`} key={cat.id}>
                        <Card
                            id={cat.id}
                            name={cat.name}
                            url={cat.image.url}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Cat;