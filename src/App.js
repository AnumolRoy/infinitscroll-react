import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

const style={
  border:"2px solid black",
  margin:15,
  padding:10,
}

function App() {

const [dataSource,setDataSource]=useState (Array.from({length:20}))
  const [hasMore,setHasMore]=useState(true)
const fetchMoreData=()=>{
  if(dataSource.length < 200){
 setTimeout(() => {
      setDataSource(dataSource.concat(Array.from({length:20})))
    }, 500);
  }else{
    setHasMore(false);
  }
  }
   

return (
    <div className="App">
      <p><b>INFINIT SCROLL</b></p>
      <div id="scrldiv" style={{height:500,overflow:"auto"}}><InfiniteScroll dataLength={dataSource.length} next={fetchMoreData} hasMore={hasMore} loader={<p>Loading....</p>} endMessage={<p>you are all set..!</p>} scrollableTarget="scrldiv">
{dataSource.map((item,index)=>{
  return <div style={style}>hello this is a div{index+1} inside infinit scroll</div>
})}
      </InfiniteScroll>
      </div>
    </div>
  );
}

export default App;
