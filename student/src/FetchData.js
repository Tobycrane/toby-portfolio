import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import './index.css';


const api = 'https://restcountries.com/v3.1/all';
const product = "https://dummyjson.com/products"
const FetchData = () => {
    const [data, setData] = useState([]);
    const fetchsecondData = async () => {
        const response = await fetch(api)
        const data = await response.json()
        setData(data) // updated the array
        console.log(data)
    }
    useEffect(() => {
        fetchsecondData()
    }, []);
    return (
        <div>


            <List list={data} />


        </div>
    )
}

function List({ list }) {
    return (

        <Container style={{display : "grid " , gridTemplateColumns : "repeat(auto-fit ,minmax(250px , 1fr)" , gap : "40px", backgroundColor: "#202036"}}>
            {list.map((item, index) => {
                return (
                    <div key={index}>

                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="130"
                                    image={item.flags.png}
                                    alt=""
                                />
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="div">

                                    </Typography>
    
                                    <Typography variant="body2" color="text.secondary">
                                       <span>NAME:</span>{item.name.common}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    <span>POPULATION:</span> {item.population}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    <span>CAPITAL:</span>{item.capital}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    <span>REGION:</span>{item.region}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    <span>OFFICIAL:</span>{item.name.official}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    <span>SUBREGION:</span> {item.subregion}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    <span>STARTOFWEEK:</span> {item.startOfWeek}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       <span>CARSIDE🚗:</span>{item.car.side}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      <span>TIMEZONE:</span> {item.timezones}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>



                )


            })}


        </Container>

    )
}
export default FetchData;

// project to work on
//style all of these
// population , name , image , region , carside with icon , official name, subregion, start of the week.