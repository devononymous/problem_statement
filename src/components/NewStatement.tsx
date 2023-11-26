import React, { FC, useState } from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';

interface Field {
  label: string;
  limit: number;
}

interface NewStatementsProps {
  statementTitle: string;
  fields: Field[];
  additionalTypography?: React.ReactNode[];
  onChange: (fieldLabel: string, value: string) => void;
  initialValues?: { [key: string]: string };
}

const NewStatement: FC<NewStatementsProps> = ({
  statementTitle,
  fields,
  additionalTypography,
  onChange,
  initialValues = {},
}) => {
  const [inputText, setInputText] = useState<{ [key: string]: string }>(initialValues);

  const handleTextChange = (fieldLabel: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;

    const field = fields.find(field => field.label === fieldLabel);

    if (field && newText.length <= field.limit) {
      setInputText(prevState => ({
        ...prevState,
        [fieldLabel]: newText,
      }));
      onChange(fieldLabel, newText);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>{statementTitle}</Typography>
      </Grid>
      {fields.map((field, index) => (
        <Grid item xs={12} key={index}>
          <Typography>{field.label}</Typography>
          <TextField
            onChange={handleTextChange(field.label)}
            fullWidth
            variant="outlined"
            value={inputText[field.label] || ''}
          />
          <Typography align='right'>{(inputText[field.label] || '').length} / {field.limit} characters</Typography>
        </Grid>
      ))}
      {additionalTypography && additionalTypography.map((typo, index) => (
        <Grid item xs={12} key={index}>
          {typo}
        </Grid>
      ))}
    </Grid>
  );
};

export default NewStatement;
