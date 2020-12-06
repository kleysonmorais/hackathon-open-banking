import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Link from 'next/link';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function CategoryCardItem({ content, page, about }) {
  const classes = useStyles();
  return (
    <Link href={'/' + page}>
      <div className="card m-2">
        <Card className={classes.root}>
          <CardContent className="">
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {about}
            </Typography>
            <Typography variant="h6">{content}</Typography>
          </CardContent>
          {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
      </div>
    </Link>
  );
  // return (
  //   <div>
  //     <div
  //       className="card w-40 md:w-64 h-24 md:h-40 bg-gray-300 rounded-lg m-2
  //     md:m-8 flex flex-wrap content-center justify-center"
  //       style={{ backgroundColor: '#f6e05ec7' }}
  //     >
  //       <div className="p-2 text-base text-green-800">{content}</div>
  //     </div>
  //   </div>
  // );
}
