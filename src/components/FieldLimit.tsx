import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

interface FieldLimitProps {
  limit: number;
  label: string;
  placeholder:string;
}

const FieldLimit: React.FC<FieldLimitProps> = ({ limit, label, placeholder }) => {
  const [inputText, setInputText] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    if (newText.length <= limit) {
      setInputText(newText);
    }
  };

  return (
    <div>
      <TextField
      id="outlined-basic"  variant="outlined"

        placeholder={placeholder}
        multiline
        value={inputText}
        onChange={handleTextChange}
      />
      <Typography variant="body2" color={inputText.length > limit ? 'error' : 'initial'}>
        {`${inputText.length} / ${limit} characters`}
      </Typography>
    </div>
  );
};

export default FieldLimit;
