import React from "react";
import CoinRow from "./CoinRow";

const titles = ["#", "Coins", "Price", "Price Change", "24hs Volume"];

const TableCoins = ({ coins, search }) => {

  const filteredCoins = coins.filter((coin) => 
  coin.name.toLowerCase().includes(search.toLowerCase()) | 
  coin.symbol.toLowerCase().includes(search.toLowerCase()))  

  return (
    <table className="table table-responsive table-dark table-hover">
      <thead>
        <tr>
        {/* <td>Name</td> */}
          {titles.map((title, index) => (
            <td key={index}>{title}</td>
          ))}
          
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow coin={coin} key={index} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};
export default TableCoins;
