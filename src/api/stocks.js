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
      // filter on ytdChange property. With largest absolute values.
      const transformed = data.sort((a, b) => (Math.abs(a.ytdChange) > Math.abs(b.ytdChange)) ? -1 : 1)
      return transformed.slice(0,5); // return top 5.
    });
};

export const getHistoryForSingleStock = () => {};
