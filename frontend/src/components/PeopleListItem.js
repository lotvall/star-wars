import React from 'react'
import Avatar from './LetterAvatar'
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'


const styles = theme => ({
    root: {
        paddingLeft: '40px',
        paddingRight: '40px',

    },
    listrow: {
        display:'flex',
        alignItems: 'center',
        borderBottom: '1px solid #eeeef0',
        height: 50,
        margin: 0,
        padding:0,
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: '#fafafb',
            borderColor: '#eeeef0',
            textDecoration: 'none',
            cursor:'pointer',
            
        }
    },
    typography: {
        flex: '1 1 0%',
        marginLeft: '5px',
        marginRight: '5px',
        maxWidth: '654px' // calc(1440-32-80-20)/2
    },

})


const PeopleListItem = ({classes, person, page, onClick}) => {

    return (
        <div className={classes.root}>
            <Link key={person.url} className={classes.listrow} to={{pathname: `/people/${person.url.replace(/[\D]/g, '')}`, state: {sourcePath:"/people", pageNr: page}}}>
                <Avatar>{person.name}</Avatar>
                <Typography className={classes.typography} variant="body1">{person.name}</Typography>
                <Typography className={classes.typography} variant="body1">{person.species.name} from {person.homeworld.name}</Typography>

            </Link>
        </div>
    )
}

export default withStyles(styles)(PeopleListItem)