import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { base_url } from "../utils";
import { Link } from "react-router-dom";

const SeacrhDailog = ({ open, handleClose }) => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  const searchQuery = (query) => {
    setSearchText(query);
    axios
      .get(`${base_url}/search?query=${query}`)
      .then((res) => setData(res?.data?.hits))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="search-dailog-container">
          <div className="search-box">
            <div className="search-icon">
              <SearchIcon />
            </div>
            <input
              placeholder="Search…"
              type="search"
              value={searchText}
              className="search-input"
              onChange={(e) => searchQuery(e.target.value)}
            />
          </div>
          <div className="search-body">
            {data &&
              data?.length > 0 &&
              data?.map(
                ({ title, objectID, url, author, points, relevancy_score }) => (
                  <Link to={objectID} key={objectID}>
                    <div  className="card-container">
                      <div>{title}</div>
                      <div>{url}</div>
                      <div>{author}</div>
                      <div>{points}</div>
                      <div>{relevancy_score}</div>
                    </div>
                  </Link>
                )
              )}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default SeacrhDailog;
