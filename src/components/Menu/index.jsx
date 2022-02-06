import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { useStyles } from './styles';
import { useShop } from '../../context/shop';

function Menu() {
    const navigation = useNavigate()
    const classes = useStyles();
    const { productsShop } = useShop();

    const navigateShop = () => {
        navigation('/sacola')
    }

    const navigateHome = () => {
        navigation('/')
    }

    return(
        <>
        <AppBar position='fixed' color='default' elevation={10} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h6' color='inherit' noWrap className={classes.toolbarTitle}>
                    Biopark Connect
                </Typography>

                <Link variant="button" color="textPrimary" className={classes.link} onClick={navigateHome}>
                    Home
                </Link>

                <Link variant="button" color="textPrimary" className={classes.link} onClick={navigateShop}>
                    <Badge badgeContent={productsShop.length} color="primary">
                        <ShoppingCartIcon sx={{ mr:2 }} />
                    </Badge>
                </Link>
            </Toolbar>  
            </AppBar>

            <div style={{ padding: 40 }}></div>
            </>
    )
}

export default Menu;