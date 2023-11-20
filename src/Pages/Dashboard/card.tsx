import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import {useNavigate} from "react-router";
import { Box } from '@mui/material';

const useStyles = makeStyles(() => ({
    root: {
        height: '85%',
        width: '100%',
        minWidth:'14rem',
        maxWidth:'14rem',
        cursor: "pointer",
        borderRadius:'10px',
        paddinBottom:'1rem'
    },
    icon: {
        height: '5.68rem',
        width: '5.68rem',
       marginTop:'-1.8rem',
    //    marginRight:'1rem'
    },
    title: {
        fontSize: '1rem',
        color:'gray',
        fontWeight:'600',
        'fontFamily':'Oswald'
    },
    count: {
        fontSize: '1.3rem',
        textTransform:'uppercase',
        fontWeight:'600',
        'fontFamily':'Oswald'
    }
}));

interface CardProps {
    count: number;
    title: string;
    color: string;
    icon: string;
    url: string;
}


const DashCard2 = (cardProps: CardProps) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(cardProps?.url)
    }
    return (

        <Card className={classes.root} style={{background: 'white'}} onClick={() => handleClick()}>
            <CardContent>
                <Grid display={'flex'} flexDirection={'column'}>
                    <Grid>
                    <Avatar
                        className={classes.icon}
                        src={cardProps?.icon}/>
                    </Grid>
                    <Grid >
                        <Typography className={classes.count}  gutterBottom variant="h6">
                            {cardProps?.title}
                        </Typography>
                    </Grid>
                    <Grid   marginRight={'-1rem'}>
                    <Typography className={classes.title} variant="h6">
                            {cardProps?.count}
                    </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
export default DashCard2;
