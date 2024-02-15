import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useApp } from '../utils/context';

export default function NewsDetails() {

  const { detailNews, updateNews } = useApp()
  const { title } = useParams();

  useEffect(() => {
    updateNews(title)
  }, [title, updateNews])

  if (!detailNews || detailNews.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{detailNews[0].title}</h1>
      <p>{detailNews[0].content}</p>
      <img src={detailNews[0].urlToImage} alt="" />
    </div>
  )
}
