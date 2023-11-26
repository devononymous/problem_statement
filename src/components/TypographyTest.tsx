import { Typography } from '@material-ui/core'
import React, { FC } from 'react'

interface TypographyTestProps{
    text?:string[]
}

const TypographyTest: FC<TypographyTestProps> = ({ text }) => {
  return (
    <div>
        TypographyTest
        <Typography>{text}</Typography>
        </div>
  )
}

export default TypographyTest