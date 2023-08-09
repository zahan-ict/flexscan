import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//list
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';

// Drawer
import MuiDrawer from '@mui/material/Drawer';

//icon
import DashboardIcon from '@mui/icons-material/Dashboard';
import Labels from '@mui/icons-material/StayPrimaryLandscapeOutlined';
import Groups from '@mui/icons-material/JoinFullOutlined';
import Users from '@mui/icons-material/SupervisorAccountOutlined';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import MarginIcon from '@mui/icons-material/Margin';
import TuneIcon from '@mui/icons-material/Tune';
//header appbar
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'


const drawerWidth = 170;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


const Sidebar = ({ children }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };


    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <DashboardIcon />
        },
        {
            path: "/labels",
            name: "Labels",
            icon: <Labels />
        },
        {
            path: "/racks",
            name: "Racks",
            icon: <MarginIcon />
        },
        {
            path: "/operations",
            name: "Operations",
            icon: <Groups />
        },
        {
            path: "/templates",
            name: "Templates",
            icon: <ArchitectureIcon />
        },

        {
            path: "/presets",
            name: "Presets",
            icon: <TuneIcon />
        },
        {
            path: "/users",
            name: "Users",
            icon: <Users />
        }

    ]

    return (
        <Box sx={{ display: 'flex' }}>

            {/* <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ marginRight: 5, ...(open && { display: 'none' }), }}>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div">
                        flexcan
                    </Typography>
                </Toolbar>
            </AppBar> */}

            <Drawer variant="permanent" open={open}>
                <DrawerHeader>

                    <IconButton onClick={() => setOpen(!open)}>
                        {open ? <ChevronLeftIcon /> : <MenuIcon />}
                    </IconButton>

                </DrawerHeader>


                <List>
                    {
                        menuItem.map((item, index) => (

                            <Link to={item.path} key={index} >

                                <ListItem key={item.name} disablePadding sx={{ display: 'block' }}>

                                    <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>

                                        <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }} >{item.icon} </ListItemIcon>

                                        <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0, underline: 'none' }} />

                                    </ListItemButton>
                                </ListItem>

                            </Link>
                        ))
                    }
                </List>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 6 }}>


                {children}

            </Box>
        </Box>
    );
};

export default Sidebar;