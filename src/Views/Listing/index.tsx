import React, { useState } from "react"
import './Listing.scss'
import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DETAILS, LOGIN } from "../../Constants/Routes.tsx";
import Cards from "../../Components/Cards.tsx";
// import {pic, pic2, pic3, pic4} from "../../Assets/images/index.tsx";
import { mockData } from "../../Assets/data.tsx";


const ListingPage = () => {
    const Navigate = useNavigate();
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
    const settings = ['Logout'];
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        Navigate(LOGIN)
    };
    const RedirectToDetails = (data) => {
        Navigate(DETAILS, {state : data})
    }
    const buildCard = (data) => {
        return (<Cards className="item_card" >
            <div className="image_wrapper">
                <img src={data.img} alt="mercedes"></img>
            </div>
            <Button className="view_button" onClick={()=>RedirectToDetails(data)}>View</Button>
            <div className="details">
                <div className="row">
                    <div className="label">Company</div>
                    <div className="data">{data.company}</div>
                </div>
                <div className="row">
                    <div className="label">Model</div>
                    <div className="data">{data.model}</div>
                </div>
                <div className="row">
                    <div className="label">Battery</div>
                    <div className="data">{data.battery}</div>
                </div>
                <div className="row">
                    <div className="label">Output</div>
                    <div className="data">{data.output}</div>
                </div>
                <div className="row">
                    <div className="label">Top Speed</div>
                    <div className="data">{data.topSpeed}</div>
                </div>
            </div>
        </Cards>)
    }
    return (
        <div className="listing_page">
            <div className="top_header">
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Home
                    </Typography>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Faizan" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        </Tooltip>
                        <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    </Toolbar>
                </AppBar>
            </div>  
            <div className="body">
                <div className="cards_wrapper">
                    {mockData.map((data) => (
                        buildCard(data)
                    ))}
                </div> 
            </div>
        </div>

    )
}
export default ListingPage;