import React from 'react'
import Avatar from './LetterAvatar'
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        paddingLeft: '40px',
        paddingRight: '40px'
    },
    listrow: {
        display:'flex',
        alignItems: 'center',
        borderBottom: '1px solid #eeeef0',
        height: 50,
        margin: 0,
        padding:0,
        '&:hover': {
            backgroundColor: '#fafafb',
            borderColor: '#eeeef0',
            textDecoration: 'none',
            
        }
    },
    typography: {
        flex: '1 1 0%',
        marginLeft: '5px',
        marginRight: '5px',
        maxWidth: '654px' // calc(1440-32-80-20)/2
    },

})


const PeopleListItem = ({classes, person}) => {

    return (
        <div className={classes.root}>
            <ul key={person.url} className={classes.listrow}>
                <Avatar>{person.name}</Avatar>
                <Typography className={classes.typography} variant="body1">{person.name}</Typography>
                <Typography className={classes.typography} variant="body1">{person.species.name} from {person.homeworld.name}</Typography>

            </ul>
        </div>
    )
}

export default withStyles(styles)(PeopleListItem)