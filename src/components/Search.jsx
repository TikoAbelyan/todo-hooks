import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { Col } from 'reactstrap';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Search = ({ handleSearch }) => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const [filters, setFilters] = useState('title');

  return (
    <Col>
      <TextField
        id="outlined-multiline-static"
        label="Search"
        multiline
        type="text"
        fullWidth
        defaultValue=""
        className={`${classes.textField} mb-3`}
        onChange={({ target: { value } }) => handleSearch(value, filters)}
        margin="normal"
        variant="outlined"
      />

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">Filter</InputLabel>
        <Select
          open={toggle}
          onClose={() => setToggle(false)}
          onOpen={() => setToggle(true)}
          value={filters}
          onChange={({ target: { value } }) => setFilters(value)}
          inputProps={{
            name: 'age',
            id: 'demo-controlled-open-select',
          }}
        >
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="data">Data</MenuItem>
          <MenuItem value="place">Place</MenuItem>
          <MenuItem value="address">Address</MenuItem>
        </Select>
      </FormControl>
    </Col>
  );
};

export default Search;
