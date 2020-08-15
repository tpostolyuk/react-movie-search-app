import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

const style = {
  width: '20%',
  maxHeight: '40%',
  height: '40%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 30
}

export const Movie = ({ title = 'No title', year = '', poster }) => {
  return (
    <Card style={style}>
      <CardContent>
        <Typography>
          {title}
          <br />
          Year: {year}
        </Typography>
      </CardContent>
      <CardMedia>
        <img src={poster} alt={`Movie title: ${title}`} />
      </CardMedia>
    </Card>
  )
}
