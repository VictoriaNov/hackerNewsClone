import React from 'react'
import useDataFetcher from '../hooks/dataFetcher';
import Story from './Story';
import { useParams } from 'react-router-dom';

export default function ShowStories() {
  const {type} = useParams()
  const {isLoading, stories} = useDataFetcher(type ? type : 'top');
 
    return (
      <>
      {isLoading ? (
        <p className='loading'>Loading...</p>
      ) : (
        stories.map(({data: story}) => (<Story story={story} key={story.id} />))

      )}
      </>
    
  )
}
