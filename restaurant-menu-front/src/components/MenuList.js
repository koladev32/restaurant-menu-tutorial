import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { baseURL, headers } from "./../services/menu.service";
import { useHistory } from "react-router-dom";

export const MenuList = () => {
  const [menus, setMenus] = useState([]);
  const history = useHistory();
  const countRef = useRef(0);

  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    retrieveAllMenus();
  }, [countRef]);

  const retrieveAllMenus = () => {
    axios
      .get(`${baseURL}/menu/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setMenus(response.data);
        console.log(menus);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const deleteMenu = (id) => {
    axios
      .delete(`${baseURL}/menu/${id}/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setDeleted(true);
        retrieveAllMenus();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleUpdateClick = (id) => {
    history.push(`/menu/${id}/update/`);
  };
  return (
    <div className="row justify-content-center">
      <div className="col">
        {deleted && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            Menu deleted!
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

        {menus &&
          menus.map((menu, index) => (
            <div className="card my-3 w-25 mx-auto">
              <div className="card-body">
                <h2 className="card-title font-weight-bold">{menu.name}</h2>
                <h4 className="card-subtitle mb-2">{menu.price}</h4>
                <p className="card-text">{menu.description}</p>
              </div>
              <div classNameName="card-footer">
                <div
                  className="btn-group justify-content-around w-75 mb-1 "
                  data-toggle="buttons"
                >
                  <span>
                    <button
                      className="btn btn-info"
                      onClick={() => handleUpdateClick(menu.id)}
                    >
                      Update
                    </button>
                  </span>
                  <span>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteMenu(menu.id)}
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
