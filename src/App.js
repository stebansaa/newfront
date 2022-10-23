import Navbar from './Components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import DataTable from './Components/DataTable/DataTable';
import Footer from './Components/Footer/Footer';

function App() {
  const [dark, setDark] = useState(true);
  const [orderBy, setOrderBy] = useState('Order By Liquidity');
  const [coinData, setCoinData] = useState([]);


  useEffect(() => {

    fetch("./fakeData.json")
      .then(res => res.json())
      .then(data => setCoinData(data));    
  }, [])

  return (
    <div data-theme={dark ? "dark" : "light"} style={{ minHeight: "100vh" }}>
      <Navbar dark={dark} setDark={setDark} orderBy={orderBy} setOrderBy={setOrderBy}  />
      <DataTable dark={dark}  coinData={coinData} orderBy={orderBy}  setOrderBy={setOrderBy} />
      {/* <Footer dark={dark} setDark={setDark} /> */}
      <Footer  />
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
