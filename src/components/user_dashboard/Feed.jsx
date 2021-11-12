import React from 'react'

const Feed = () => {
  const EmptyFeed = () => {
    return(
      <div className="px-5 mx-5">
        <h3>Fill Out Your Profile</h3>
        <p className="text-muted">Add photos and info to your profile so people can find you easily and get to know you better!</p>
      </div>
    )
  }
  return (
    <div>
      <EmptyFeed />
    </div>
  )
}

export default Feed
