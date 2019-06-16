import React, { useState } from "react";
import PlaningListComponent from "../components/PlaningListComponent";
import moment from "moment";

const PlaningListContainer = () => {
  const initialState = {
    title: "",
    date: "",
    place: "",
    address: "",
    description: "",
    status: "In Progress"
  };

  const [formValues, setFormValues] = useState({ ...initialState });
  const [filteredItems, setFilteredItems] = useState([]);

  const [lists, setLists] = useState([]);

  const handleChangeFormValues = (key, value) => {
    setFormValues(prevState => {
      const state = { ...prevState };
      state[key] = value;
      return { ...state };
    });
  };

  const handlEditItem = (index, item) => {
    setLists(prevState => {
      const state = [...prevState].map((it, i) => {
        if (i === index) {
          return item;
        }
        return it;
      });

      return [...state];
    });
  };

  const handleSubmit = () => {
    setLists(prevState => {
      const state = [...prevState];
      state.push(formValues);
      if (moment(new Date()).isAfter(formValues.date)) {
        formValues.status = "failed";
      }
      return [...state];
    });
    setFormValues({ ...initialState });
  };

  const removeItem = index =>
    setLists(prevState => prevState.filter((it, i) => index !== i));

  const handleSearch = (value, filters) => {
    const searched = lists.filter(it => {
      const trimmed = it[filters].replace(/ /g, "").toLocaleLowerCase();
      return trimmed.includes(value);
    });
    value ? setFilteredItems([...searched]) : setFilteredItems([]);
  };

  const fail = index => {
    setLists(prevState => {
      const state = prevState.map((it, i) => {
        const item = { ...it };
        if (index === i) {
          item.status = "failed";
        }
        return item;
      });
      return [...state];
    });
  };

  const done = index => {
    setLists(prevState => {
      const state = prevState.map((it, i) => {
        const item = { ...it };
        if (index === i) {
          item.status = "done";
        }
        return item;
      });
      return [...state];
    });
  };
  return (
    <PlaningListComponent
      handleChange={handleChangeFormValues}
      handleSubmit={handleSubmit}
      items={lists}
      removeItem={removeItem}
      editItem={handlEditItem}
      formValues={formValues}
      handleSearch={handleSearch}
      filteredItems={filteredItems}
      done={done}
      fail={fail}
    />
  );
};

export default PlaningListContainer;
