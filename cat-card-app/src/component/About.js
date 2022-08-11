import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
const About = () => {
    const { id } = useParams();
    const [cat, setCat] = useState([]);
    const fetchData = async () => {
        const data = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`)
        const dataJson = await data.json()
        setCat(dataJson)
    }
    useEffect(() => {
        fetchData();
    }, [id])
    return (
        <div className='cat_description'>
            <p><b>Description:</b> <br />  {cat?.description}</p>
            <p> <b>Country code:</b> <br /> {cat?.country_code}</p>
            <p> <b>Dog friendly:</b> <br />  {cat?.dog_friendly}</p>
            <p> <b>Child friendly:</b> <br />  {cat?.child_friendly}</p>
            <p> <b>Energy level:</b> <br /> {cat?.energy_level}</p>
            <p> <b>Weight:</b> <br /> {cat?.weight?.imperial}</p>
            <p> <b>Life span:</b> <br /> {cat?.life_span}</p>
            <p> <b>Intelligence:</b> <br /> {cat?.intelligence}</p>
            {/* <p> <b>Experimental:</b> <br /> {cat?.experimental}</p> */}
            {/* <p> <b>Grooming:</b> <br /> {cat?.grooming}</p> */}
            {/* <p> <b>Hairless:</b> <br /> {cat?.hairless}</p>
            <p> <b>Health issues:</b> <br /> {cat?.health_issues}</p>
            <p> <b>Hypoallergenic:</b> <br /> {cat?.hypoallergenic}</p> */}
            {/* <p> <b>Temperament:</b> <br /> {cat?.temperament}</p> */}
            {/* <p> <b>Stranger friendly:</b> <br /> {cat?.stranger_friendly}</p> */}
            {/* <p> <b>Social needs:</b> <br /> {cat?.social_needs}</p> */}

        </div>
    )
}


export default About