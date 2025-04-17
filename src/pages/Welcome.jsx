import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function Welcome() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      minWidth="100vw"
      bgcolor="#f5f5f5"
    >
      <Card sx={{ width: 400, boxShadow: 6 }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Welcome! You have logged in successfully
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Welcome