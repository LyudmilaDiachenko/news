import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useApp} from "../utils/context";


export default function News() {
  const { globalState, get_Data } = useApp()
  const [newsData, setNewsData] = useState(globalState)
  const [inputValue, setInputValue] = useState("")

  async function fetchNewsData() {
    try {
      const getNewsData = await get_Data (inputValue)
      setNewsData(getNewsData)
    } catch (error) {
      console.error(error)
    }      
  }

  useEffect(() => {    
    fetchNewsData() 
  }, [inputValue])

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  function onFormSubmit(e) {
    e.preventDefault()
    fetchNewsData()
  }
  
  return (
    <div className='news_container'>
      <form onSubmit={onFormSubmit} className='news_form'>
        <input type="text" 
          placeholder='Search' 
          value={inputValue} 
          onChange={handleInputChange}
          className='news_input_search'          
        />
      </form>
      <div className='news_container_item'>
        {newsData.articles ? (
          newsData.articles?.map((item) => {
            return (
              <Link
              to={`/news/${item.title}`}
              key={item.title}
              style={{textDecoration: "none"}}
              >
                <div className='news_details'>
                  <h2 className='news_title'>{item.title}</h2>
                  <img src={item.urlToImage} alt="" className='news_img' />
                  <p className='news_text'>{item.description}</p>
                </div>
              </Link>
            )
          })
        ) : (
        <h1>Такої новини не має</h1>
        )}
      </div>
    </div>
  )
}
