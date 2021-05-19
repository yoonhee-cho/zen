import React, { useState, useEffect } from 'react';
import './app.css';
import Navbar from './components/navbar/navbar'
import VideoList from './components/videoList/videoList'

function App() {
  const [videos, setVideos] = useState([]);

  // 컴포넌트가 마운트되었거나 스테잇이 업데이트 되었을 때 호출이 됨 
  // 네트워크가 매번 업데이트 되는 것은 좋지 않으므로, 두번째 인자로 비어있는 
  //  어레이를 전달하면 한번 마운트 되었을 때만 함수가 실행됨
  // state이 변경될 때마다 useEffect에 전달한 함수가 실행되게 하고 싶을 때, 
  //  비어있는 어레이 안에 state이름을 적어두면, 걔가 업데이트 될 때마다 함수를 실행
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=deskyoga&key=AIzaSyDJi4Y6F3whWb0G8h2No_UQJtICu_TICd4", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));  
  }, []);

  return (
    <>
      <Navbar/>
      <VideoList videos={videos} />
    </>
  );
}

export default App;
