import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    padding:'3rem',
    backgroundColor:'var(--primary-color)'
  },
  heading: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Titillium Web, sans-serif',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  cardImage: {
    paddingTop: '56.25%', // Maintain aspect ratio (16:9)
    marginTop:'2rem'
  },
  cardHeading: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    fontFamily: 'Titillium Web, sans-serif',
  },
  cardText: {
    color: '#666',
    fontFamily: 'Titillium Web, sans-serif',
    fontSize:'1.2rem'
  },
}));

const cardData = [
  {
    heading: 'Card 1 Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra nulla id ultrices malesuada.',
    image: 'services-img.png',
  },
  {
    heading: 'Card 2 Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra nulla id ultrices malesuada.',
    image: 'services-img.png',
  },
  {
    heading: 'Card 3 Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra nulla id ultrices malesuada.',
    image: 'services-img.png',
  },
];

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.heading}  style={{ marginTop: '3rem',marginBottom:'3rem',fontWeight:'600' }}>
        Services To Help You Shop
      </Typography>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={4} key={index} >
            <Card className={classes.card} >
              <CardContent style={{ padding:'2rem' }}>
                <Typography variant="h4" gutterBottom className={classes.cardHeading}>
                  {card.heading}
                </Typography>
                <Typography variant="body2" color="textSecondary" className={classes.cardText}>
                  {card.text}
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.cardImage}
                image={card.image}
                title={`Image ${index + 1}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Services;
