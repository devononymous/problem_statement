import React, { FC, useState } from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';


interface TypographyTestProps{
    text?:string
}
const StatementRules:FC<TypographyTestProps> =(props)=>{


  const [value, setValue] = useState("");

  const handleChange = (event:any) => {
    // Limit the input to 30 characters
    const inputValue = event.target.value.slice(0, 30);
    setValue(inputValue);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography>Statement</Typography>
      <TextField
        fullWidth
        onChange={handleChange}
        id="outlined-basic"
        variant="outlined"
        inputProps={{ maxLength: 30 }}
      />
      <Typography align='right'>{value.length}/30 characters</Typography>
    </Grid>
  );
};

export default StatementRules;
