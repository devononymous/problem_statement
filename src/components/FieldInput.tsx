import React, { FC, useState } from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';

interface FieldsInputProps {
  fieldLabels: string[];
  placeholders: string[]; // Add placeholders prop
  onChange: (fieldLabel: string, value: string) => void;
}

const FieldsInput: FC<FieldsInputProps> = ({ fieldLabels, placeholders, onChange }) => {
  const [inputText, setInputText] = useState<{ [key: string]: string }>({});

  const handleTextChange = (fieldLabel: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newText = event.target.value;

    // Assuming a limit of 30 characters for each text field
    if (newText.length <= 30) {
      setInputText((prevState) => ({
        ...prevState,
        [fieldLabel]: newText,
      }));
      onChange(fieldLabel, newText);
    }
  };

  return (
    <Grid container spacing={2}>
      {fieldLabels.map((label, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Typography>{label}</Typography>
          <TextField
            onChange={handleTextChange(label)}
            fullWidth
            variant="outlined"
            value={inputText[label] || ''}
            placeholder={placeholders[index]} // Use the corresponding placeholder
          />
          <Typography align='right'>
            {(inputText[label] || '').length} / 30 characters
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default FieldsInput;
