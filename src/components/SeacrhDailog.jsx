import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { base_url } from "../utils";
import { useHistory } from "react-router-dom";
import Loading from "../common/Loading";
import "../styles/loader.css";
import noResults from "../images/no_results.svg";

const SeacrhDailog = ({ open, handleClose }) => {
  const history =  useHistory()
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchQuery = (query) => {
    setLoading(true);
    setSearchText(query);
    axios
      .get(`${base_url}/search?query=${query}`)
      .then((res) => {
        setData(res?.data?.hits);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const navigate = (id) => {
    history.push(`/product/${id}`)
    setSearchText('')
    handleClose()
  }

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
            {searchText?.length > 0 &&  data && data?.length > 0 ? (
              data?.map(({ title, objectID, url, author, points }) => (
                <a key={objectID} onClick={() => navigate(objectID)} className="cursor-pointer">
                  <div className="card-container">
                    <strong>Title: {title}</strong>
                    <div>
                      <strong>Author: {author}</strong>
                    </div>
                    <div className="d-flex justify-between">
                      <strong>Points: {points}</strong>
                      <div>{url}</div>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              searchText?.length >  0 && 
              <div className="no-resutls">
                <img src={noResults} alt="no_results" width={50} height={50} />
                <div>
                  No results for <b>"{searchText}"</b>
                </div>
              </div>
            )}
          </div>
        </div>
        {loading && <Loading />}
      </Dialog>
    </div>
  );
};

export default SeacrhDailog;
