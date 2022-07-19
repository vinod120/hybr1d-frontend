import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { base_url } from "../utils";
import Loading from "../common/Loading";

const SingleProduct = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  const removeTags = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${base_url}/items/${id}`)
      .then((res) => {
        setProductData(res?.data);
        setComments(res?.data?.children);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [id]);

  return (
    <div className="mt-100 single-product-container">
      {productData && (
        <div key={id}>
          <div>
            <strong>Title: </strong>
            {productData?.title || "N/A"}
          </div>
          <div>
            <strong>Points:</strong> {productData?.points || "N/A"}
          </div>
          <strong>Comments:</strong>
          <div className="comments-container">
            {comments && comments?.length > 0 &&  comments?.map(({ text, id }) => {
              return <div className="comments" key={id}><strong>#</strong>{removeTags(text)}</div>;
            })}
          </div>
        </div>
      )}
      {loading && <Loading />}
    </div>
  );
};

export default SingleProduct;
