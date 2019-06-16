import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Col } from 'reactstrap';
import EditModal from './EditModal';
import CardItem from './Card';
import Search from './Search';

const useStyles = makeStyles(theme => ({}));

const PlaningListComponent = ({
  handleChange,
  handleSubmit,
  items,
  removeItem,
  editItem,
  formValues,
  handleSearch,
  filteredItems,
  done,
  fail,
}) => {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const [modalFields, setModalFields] = useState({});
  const [fieldIndex, setFieldIndex] = useState(null);

  const handleOpenModal = index => {
    setModalFields({ ...items[index] });
    setModal(true);
    setFieldIndex(index);
  };

  return (
    <Container className="mt-5 d-flex">
      <Col sm="4">
        <Col sm="12">
          <TextField
            label="Title"
            className={classes.textField}
            type="text"
            autoComplete="current-password"
            margin="normal"
            value={formValues['title']}
            variant="outlined"
            onChange={({ target: { value } }) => handleChange('title', value)}
          />
        </Col>
        <Col sm="12">
          <TextField
            label="Place"
            className={classes.textField}
            type="text"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            value={formValues['place']}
            onChange={({ target: { value } }) => handleChange('place', value)}
          />
        </Col>
        <Col sm="12">
          <TextField
            label="Address"
            className={classes.textField}
            type="text"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            value={formValues['address']}
            onChange={({ target: { value } }) => handleChange('address', value)}
          />
        </Col>
        <Col sm="12">
          <TextField
            label="Date"
            type="date"
            defaultValue={null}
            className={classes.textField}
            value={formValues['date']}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={({ target: { value } }) => handleChange('date', value)}
          />
        </Col>
        <Col sm="12">
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows="4"
            className={classes.textField}
            margin="normal"
            value={formValues['description']}
            variant="outlined"
            onChange={({ target: { value } }) =>
              handleChange('description', value)
            }
          />
        </Col>
        <Col sm="12">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSubmit}
          >
            Add Plan
          </Button>
        </Col>
      </Col>
      <Col sm="8">
        <Search handleSearch={handleSearch} />
        <CardItem
          items={filteredItems.length > 0 ? filteredItems : items}
          handleOpenModal={handleOpenModal}
          removeItem={removeItem}
          done={done}
          fail={fail}
        />
        <EditModal
          modal={modal}
          setModal={setModal}
          fields={modalFields}
          handleChange={handleChange}
          fieldIndex={fieldIndex}
          editItem={editItem}
        />
      </Col>
    </Container>
  );
};

export default PlaningListComponent;
