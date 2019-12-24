import { STOCK_BASE_URL, STOCK_KEY } from "./constants";

export const getStockTagList = () => {
  fetch(`${STOCK_BASE_URL}/ref-data/tags?token=${STOCK_KEY}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    });
};

export const fetchStocksByTag = tagName => {
  fetch(
    `${STOCK_BASE_URL}/stock/market/collection/tag?collectionName=${tagName}&token=${STOCK_KEY}`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      // TODO: filter on ytdChange property. With largest absolute values.

      return data; // return top 3.
    });
};

export const getHistoryForSingleStock = () => {};
