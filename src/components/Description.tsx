import React, { FC, useState } from "react";
import {
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 500,
    fontFamily: "Montserrat",
    fontSize: "16px",
  },
  area: {
    resize: "none",
    borderRadius: "6px",
    padding: "5px",
    minHeight: 60,
    width: "100%",
    lineHeight: 2,
    fontWeight: 400,
    fontStyle: "italic",
    fontSize: "14px",
    fontFamily: "Montserrat",
  },
}));

interface DescriptionInputProps {
  fieldLabels: string[];
  placeholders: string[]; // Add placeholders prop
  onChange: (fieldLabel: string, value: string) => void;
  range: number;
  maxRows: number;
  minRows: number;
}

const Description: FC<DescriptionInputProps> = ({
  range,
  minRows,
  fieldLabels,
  maxRows,
  placeholders,
  onChange,
}) => {
  const [inputText, setInputText] = useState<{ [key: string]: string }>({});
  const classes = useStyles();

  const handleTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const fieldLabel = event.target.name; // Extract field label from event object
    const newText = event.target.value;

    if (newText.length <= 350) {
      setInputText((prevState) => ({
        ...prevState,
        [fieldLabel]: newText,
      }));
      onChange(fieldLabel, newText);
    }
  };

  return (
    <Grid container spacing={3}>
      {fieldLabels.map((label, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Typography className={classes.title} variant="h6" component="div">{label}</Typography>
          <TextareaAutosize
            className={classes.area}
            onChange={handleTextChange}
            value={inputText[label] || ""}
            maxRows={maxRows}
            minRows={minRows}
            name={label} // Add the name attribute
            placeholder={placeholders[index]}
          />
          <Typography align="right">
            {(inputText[label] || "").length} / 350 characters
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Description;
