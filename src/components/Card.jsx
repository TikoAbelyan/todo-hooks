import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const CardItem = ({ items, handleOpenModal, removeItem, done, fail }) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const current = moment(new Date()).format('YYYY MM DD ');
    setDate(current);
  }, []);

  return items.map((it, index) => (
    <Card
      className="row d-flex align-items-center"
      key={index}
      style={{
        flexDirection: 'column',
        background:
          it.status === 'done'
            ? 'lightcyan'
            : it.status === 'failed'
            ? 'red'
            : 'white',
      }}
    >
      <CardContent
        className="row d-flex align-items-center"
        style={{ flexDirection: 'column', width: '100%' }}
      >
        <Typography gutterBottom variant="h4">
          {it.title}
        </Typography>
        <Typography variant="h5" component="h2">
          {it.place}
        </Typography>
        <Typography color="textSecondary" variant="h6">
          {it.address}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color={moment(date).isAfter(it.date) ? 'error' : 'inherit'}
        >
          {it.date}
        </Typography>
        <Typography variant="h6" component="p">
          {it.description}
        </Typography>
        <Typography variant="h6" component="p">
          {it.status}
        </Typography>
      </CardContent>
      <CardActions style={{ margin: '0 auto' }}>
        <Button
          color="primary"
          size="small"
          primary
          onClick={() => done(index)}
        >
          Done
        </Button>
        <Button
          color="primary"
          size="small"
          primary
          onClick={() => handleOpenModal(index)}
        >
          Edit
        </Button>
        <Button color="primary" size="small" onClick={() => removeItem(index)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  ));
};

export default CardItem;
