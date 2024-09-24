import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { MemberCard } from '../data';
import "../styles/AdvantageSection.css";
import { Link } from 'react-router-dom';

const OurTeam = () => {
    return (
        <div className='advantage-section-main-container'>
            <h1 className="advantage-section-title">Our <span>Team</span></h1>
            <div className="advantage-section-content">
                {MemberCard && MemberCard.map((item) => {
                    return <Card key={item.id} sx={{ maxWidth: 345 }} id="team-card" style={{ display: "flex", flexDirection: "column", margin: "1rem 0rem" }}>
                        <CardActionArea>
                            <Avatar id="avatar" alt={item.name} src="/static/images/avatar/1.jpg" style={{ marginLeft: "40%", marginTop: "1rem", height: "5rem", width: "5rem", fontSize: "3rem", backgroundColor: "blueviolet" }} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.content}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" style={{ color: "blueviolet", fontWeight: "700" }}>
                                <Link to={item.link} target='blank' style={{ color: "blueviolet", textDecoration: "none" }}>Get Connected</Link>
                            </Button>
                        </CardActions>
                    </Card>
                })}
            </div>
        </div>
    )
}

export default OurTeam;