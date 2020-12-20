import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const App = () => {
  const [screenshots, setScreenshots] = useState([]);
  const [auth, setAuth] = useState(false);

  useEffect(()=>{
      fetchScreenshots();
  }, []);

  useEffect(()=>{
      fetchUser();
  }, []);

  const fetchScreenshots = async () => {
    const { data } = await axios.get(`/api/screenshots`);
    setScreenshots(data);
  }

  const fetchUser = async () => {
    const { data } = await axios.get(`/api/me`);
    setAuth(data);
  }
  
  const onSearchSubmit = async(url: string) => {
    const { data } = await axios.post(`/api/screenshots`, {url});
    setScreenshots([ ...screenshots, data ]);
  }

  const deleteScreenshot = async (id: string) => {
      const {data} = await axios.delete(`/api/screenshots/${id}`);
      const newScreenshots = screenshots.filter((screenshot)=>{
          return screenshot.id !== data.id;
      })
      setScreenshots(newScreenshots);
  }
  
  return <div className="ui container" style={{marginTop:'10px'}}>
    <Header auth={ auth } />
    <SearchBar auth={ auth } onSubmit={ onSearchSubmit } />
    <ImageList images={ screenshots } deleteScreenshot={ deleteScreenshot } />
  </div>
};

export default App