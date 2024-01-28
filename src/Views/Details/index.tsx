import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload.js"
import { useLocation, useNavigate } from 'react-router-dom'
import { LOGIN } from '../../Constants/Routes.tsx';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './Details.scss';
import { imagesData } from '../../Assets/data.tsx';
const Details = () => {
    const Navigate = useNavigate()
    const {state} = useLocation()
    const regex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
    const [name, setName] = useState<any>(null)
    const [email, setEmail] = useState<any>(null)
    const [company, setCompany] = useState<any>(null)
    const [model, setModel] = useState<any>(null)
    const [year, setYear] = useState<any>(null)
    const [mileage, setMileage] = useState<any>(null)
    const [battery, setBattery] = useState<any>(null)
    const [output, setOutput] = useState<any>(null)
    const [fileNames, setfileNames] = useState<any>(null)
    const [imageList, setImageList] = useState<any>(null)
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
    const settings = ['Logout'];
    useEffect(() => {
        imagesData.map((images) => {
            if(state.id === images.id)
                setImageList(images)
        })
    },[state.id])
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        Navigate(LOGIN)
    };
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
    const submitForm = () => {
        if(!!name && !!email && regex.test(email) && !!company && !!model && !!year && !!mileage && !!battery && !!output && !!fileNames ){
            //logic to call submit API
            alert("Form has been submitted")
        }
        else{
            alert("Please complete the form")
        }
    }
    const checkEmailHelper = () => {
        if(email === ""){
            return "this field is required"
        }
        else if(!!email && !regex.test(email)){
            return "invalid email"
        }
        return ""
    }
    const uploadImages = (e) => {
        console.log(e.target.files)
        if(e.target.files.length){
            let nameArray :any= []
            Array.from(e.target.files).forEach((file:any) => {nameArray.push(file.name)})
            setfileNames(nameArray.join(', '))
        }
    }
    return(
        <div className='details'>
            <div className="top_header">
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {state.model}
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
            <div className='details_body'>
                <div className='image_grid'>
                    <ImageList sx={{ width: 1100, height: 550 }} cols={3} rowHeight={164}>
                        {imageList?.img.map((item: any) => (
                            <ImageListItem key={imageList.id}>
                            <img
                                srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                alt={imageList.id}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
                <div className='heading'>Specifications</div>
                <br></br>
                <div>
                    <div className="row">
                        <div className="label">Company</div>
                        <div className="data">{state.company}</div>
                    </div>
                    <div className="row">
                        <div className="label">Model</div>
                        <div className="data">{state.model}</div>
                    </div>
                    <div className="row">
                        <div className="label">Battery</div>
                        <div className="data">{state.battery}</div>
                    </div>
                    <div className="row">
                        <div className="label">Output</div>
                        <div className="data">{state.output}</div>
                    </div>
                    <div className="row">
                        <div className="label">Top Speed</div>
                        <div className="data">{state.topSpeed}</div>
                    </div>
                </div>
                <div className='trade_in_section'>
                    <div className="heading">Apply For Trade-In</div>
                    <div className='form'>
                        <div className='col-1'>
                            <TextField className='text_fields' id="name" label="Applicant Name" variant="standard" required
                            value={name} onChange={event => setName(event.target.value)} helperText={name === ""? "this field is required" : ""}/>
                            <TextField className='text_fields' id="comapny" label="Venicle Company" variant="standard" required
                            value={company} onChange={event => setCompany(event.target.value)} helperText={company === ""? "this field is required" : ""}/>
                            <TextField className='text_fields' id="year" label="Year of Release" variant="standard" required
                            value={year} onChange={event => setYear(event.target.value)} helperText={year === ""? "this field is required" : ""}/>
                            <TextField className='text_fields' id="battery" label="Battery" variant="standard" required
                            value={battery} onChange={event => setBattery(event.target.value)} helperText={battery === ""? "this field is required" : ""}/>
                            <div className='upload_section'>
                                <label>Vehicle Images *</label>
                                <Button  component="label" variant="outlined" startIcon={<CloudUploadIcon />} onChange={(e) => {uploadImages(e)}} >
                                    Upload
                                    <VisuallyHiddenInput type="file" accept='image/*' multiple />
                                </Button>
                            </div>
                            <label className='file_names'>{fileNames}</label>                            
                        </div>
                        <div className='col-2'>
                            <TextField className='text_fields' id="email" label="Applicant Email" variant="standard" required 
                            value={email} onChange={event => setEmail(event.target.value)} helperText={checkEmailHelper()}/>
                            <TextField className='text_fields' id="model" label="Vehicle Model" variant="standard" required
                            value={model} onChange={event => setModel(event.target.value)} helperText={model === ""? "this field is required" : ""}/>
                            <TextField className='text_fields' id="mileage" label="Mileage Covered" variant="standard" required
                            value={mileage} onChange={event => setMileage(event.target.value)} helperText={mileage === ""? "this field is required" : ""}/>
                            <TextField className='text_fields' id="output" label="Output" variant="standard" required
                            value={output} onChange={event => setOutput(event.target.value)} helperText={output === ""? "this field is required" : ""}/>
                        </div>
                    </div>
                    <div className='submit_button'>
                        <Button type='submit' variant='outlined' onClick={submitForm}>Submit</Button>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Details