import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import issues from '../../JSONDATA/IssuesData.json';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        width: '100%',
        height: '100%',

    },
    cardContainer: {
        height: '100%',
    },
    productCard: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: theme.spacing(2),
        backgroundColor: '#f4f7fe',
        boxShadow: 'none'

    },
    issueCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: theme.spacing(2),
        backgroundColor: '#f4f7fe',
        boxShadow: 'none'
    },
    issueImage: {
        width: 75,
        marginRight: theme.spacing(2),
    },

    button: {
        marginLeft: 'auto',
        backgroundColor: '#42c8b7',
        fontSize: '1rem',
        '&:hover': {
            backgroundColor: '#42c8b7ba',
        },
    },
    dialogPaperFullScreen: {
        width: '90%',
        height: '90%',
        borderRadius:'1.5rem'
    },

}));

const IssuesDialogBox = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog fullScreen open={open} onClose={handleClose} classes={{ paperFullScreen: classes.dialogPaperFullScreen }} >
            <DialogContent className={classes.root}>
                <div className={classes.cardContainer}>
                    <Card className={classes.productCard}>
                        <img src="left-img.png" alt="mobile-img" className={classes.issueImage} />
                        <Typography variant="h4" style={{ fontFamily: 'Titillium Web, sans-serif', fontWeight: 'bold' }}>Product Name</Typography>
                    </Card>
                    <Card className={classes.issueCard}>
                        <Typography variant="h5" style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '2rem', margin: '2rem 0rem' }}>Pick Your Repair Service</Typography>
                        <Grid container spacing={2}>
                            {issues.map((issue, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Card>
                                        <CardContent style={{ display: 'flex', alignItems: 'baseline' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <img src={issue.image} alt={issue.issueName} className={classes.issueImage} />
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                                    <Typography variant="subtitle1" style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.5rem' }}>{issue.issueName}</Typography>
                                                    <Typography variant="body2" style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.5rem', textDecoration: 'line-through', }}>₹{issue.crossPrice}</Typography>
                                                    <Typography variant="body2" style={{ fontFamily: 'Titillium Web, sans-serif', fontSize: '1.5rem', fontWeight: 'bold' }}>₹{issue.price}</Typography>
                                                </div>
                                            </div>
                                            <Button variant="contained" color="primary" className={classes.button}>
                                                Add
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Card>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default IssuesDialogBox;
