import React, { FC, useState } from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';

interface StatementsProps {
  StatementTitle: string;
  limit: number;
  onChange: (value: string) => void;
}

const Statements: FC<StatementsProps> = ({ StatementTitle, limit, onChange }) => {
  const [inputText, setInputText] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;

    if (newText.length <= limit) {
      setInputText(newText);
      onChange(newText); // 
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>{StatementTitle}</Typography>
        <TextField
          onChange={handleTextChange}
          fullWidth
          variant="outlined"
          value={inputText}
        />
        <Typography align='right'>{inputText.length} / {limit} characters</Typography>
      </Grid>
    </Grid>
  );
};

export default Statements;
