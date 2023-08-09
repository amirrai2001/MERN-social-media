import React from 'react'
import Posts from '../posts/Posts'
import ProfileCard from '../profileCard/ProfileCard'
import Rightside from '../rightside/Rightside'
import SuggestedUsers from '../suggestedUsers/SuggestedUsers'
import classes from './home.module.css'
import Navbar from '../navbar/Navbar'

const Home = () => {
  return (<>
  <Navbar/>
  <div className={classes.container}>
    
    <div className={classes.left}>
      <ProfileCard />
      <SuggestedUsers />
    </div>
    <Posts />
    <Rightside />
  </div>
  </>
    
  )
}

export default Home