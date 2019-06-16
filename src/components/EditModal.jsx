import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Col } from 'reactstrap';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
}));

const EditModal = ({ modal, setModal, fields, fieldIndex, editItem }) => {
  const classes = useStyles();

  const [values, setValues] = useState({});

  useEffect(() => {
    setValues({ ...fields });
  }, [fields]);

  const handleChange = (key, value) => {
    setValues(prevState => {
      const state = { ...prevState };
      state[key] = value;
      return { ...state };
    });
  };

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={modal}
      onClose={() => setModal(false)}
      className="container-fluid d-flex justify-content-center align-items-center"
    >
      <Col sm="6" className={`${classes.paper} container-fluid`}>
        {_.map(fields, (value, key) => {
          return (
            key !== 'status' && (
              <Col key={key}>
                <TextField
                  label={key.toUpperCase()}
                  className={classes.textField}
                  type={key === 'date' ? 'date' : 'text'}
                  autoComplete="current-password"
                  margin="normal"
                  value={values[key]}
                  onChange={({ target: { value } }) => handleChange(key, value)}
                />
              </Col>
            )
          );
        })}
        <Button
          color="primary"
          size="small"
          variant="contained"
          onClick={() => {
            editItem(fieldIndex, values);
            setModal(false);
          }}
        >
          Save
        </Button>
      </Col>
    </Modal>
  );
};

export default EditModal;
