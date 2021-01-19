import axios from "axios";
import React, { useState } from "react";
import {baseURL, headers} from "./../services/menu.service"

export const AddMenu = () => {
    const initialMenuState = {
        id: null,
        name: "",
        description: "",
        price: 0,
    };

    const [menu, setMenu] = useState(initialMenuState);
    const [submitted, setSubmitted] = useState(false);

    const handleMenuChange = e => {
        const { name, value } = e.target;
        setMenu({ ...menu, [name]: value });
    };

    const submitMenu = () => {
        let data = {
            name: menu.name,
            description: menu.description,
            price: menu.price
        };

        axios.post(`${baseURL}/menu/`, data)
        .then(
            response => {
                setMenu({
                    id: response.data.id,
                    name: response.data.name,
                    description: response.data.description,
                    price: response.data.price,
                });
                setSubmitted(true);
                console.log(response.data);
            }
        ).catch(
            e => {
                console.error(e);
            }
        )
    };

    const newMenu = () => {
        setMenu(initialMenuState);
        setSubmitted(false);
    }

    return (
        <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newMenu}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={menu.name}
              onChange={handleMenuChange}
              name="Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={menu.description}
              onChange={handleMenuChange}
              name="description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              required
              value={menu.price}
              onChange={handleMenuChange}
              name="Price"
            />
          </div>

          <button onClick={submitMenu} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
    )

}