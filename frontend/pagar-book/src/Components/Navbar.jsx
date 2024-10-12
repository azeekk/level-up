import React from 'react'
import { AppBar, Typography, Toolbar, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar >
            <Typography sx={{flexGrow:1}}>Authentication</Typography>
            <Button variant='contained' to='/login' component={Link}>Login</Button>
            <Button variant='contained' to='/signup' component={Link}>Signup</Button>
            <Button variant='contained'>Logout</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
