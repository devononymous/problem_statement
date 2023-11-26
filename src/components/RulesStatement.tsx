import React, { FC } from 'react';
import { Typography, makeStyles } from '@material-ui/core';

interface IProps {
  title: string;
  limit: number;
  TitleLength: number;
  DescriptionLength: number;
}

const useStyles = makeStyles((theme) => ({

  subs: {

        fontSize: "16px",
        fontStyle: "normal",
        fontFamily: "Montserrat",
        padding: "4px",
        textAlign: "left" as "left",
        fontWeight: 500,
        lineHeight: "120%"
    },
  bulletList: {
    listStyleType: "disc",
    paddingLeft: "20px",
  },
  bullet: {
    textAlign: "left" as "left",
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
  },
}));

const RulesStatement: FC<IProps> = ({ limit, title, TitleLength, DescriptionLength }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.subs}>{title}</Typography>
      <ul className={classes.bulletList}>
        <li>
          <Typography className={classes.bullet}>Max {limit} problem statements</Typography>
        </li>
        <li>
          <Typography className={classes.bullet}>Title length max {TitleLength} characters</Typography>
        </li>
        <li>
          <Typography className={classes.bullet}>Description length max {DescriptionLength} characters</Typography>
        </li>
      </ul>
    </div>
  );
};

export default RulesStatement;
