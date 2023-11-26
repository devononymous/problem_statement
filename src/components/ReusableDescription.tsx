import { TextField, Typography } from '@material-ui/core'
import React, { FC } from 'react'


interface IProps {
  descriptionLabel:string[],

}
const ReusableDescription:FC<IProps> = ({ descriptionLabel }) => {

  return (
    <div>
        <Typography>{descriptionLabel}</Typography>
    </div>
  )
}

export default ReusableDescription