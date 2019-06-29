import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
}));

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
];

export default function SubFeaturedPosts() {
    const classes = useStyles();
    return (
        <Grid container spacing={4} className={classes.mainGrid}>
            {featuredPosts.map(post => (
                <Grid item key={post.title} xs={12} md={6}>
                    <CardActionArea component={"a"} href={"#"}>
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                                <CardContent>
                                    <Typography component={"h2"} variant={"h5"}>
                                        {post.title}
                                    </Typography>
                                    <Typography variant={"subtitle1"} color={"textSecondary"}>
                                        {post.data}
                                    </Typography>
                                    <Typography variant={"subtitle1"} paragraph>
                                        {post.description}
                                    </Typography>
                                    <Typography variant={"subtitle1"} color={"primary"}>
                                        Continue reading...
                                    </Typography>
                                </CardContent>
                            </div>
                            <Hidden xsDown>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={"https://source.unsplash.com/random"}
                                    title={"Image title"}
                                />
                            </Hidden>
                        </Card>
                    </CardActionArea>
                </Grid>
            ))}
        </Grid>
    )
}