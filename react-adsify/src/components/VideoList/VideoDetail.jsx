import React from 'react'

const VideoDetail = ({url, author}) => {
  return (
    <div className='my-2'>
      <img className="w-24 h-24" src={url} alt={author} />
      <p className="text-sm text-center font-mono pt-2">{author}</p>
    </div>
  )
}

export default VideoDetail