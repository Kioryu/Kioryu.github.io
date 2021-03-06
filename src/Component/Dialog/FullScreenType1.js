import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

export default function FullScreenType1(props) { // Notice Dialog
    const {open, handleClose, title, info, classes, transaction, img, link} = props;
    return (
        <div>
            <Dialog fullScreen open={open} onClose={handleClose}
                    TransitionComponent={transaction}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div>
                    <a href={link}><img src={img} alt={title} className={classes.img}/></a>
                </div>
                <Typography variant="h6" className={classes.borderDiv}>
                    {info}
                </Typography>
            </Dialog>
        </div>
    );

}