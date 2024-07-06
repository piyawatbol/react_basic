import React from 'react'
import Hero from "../../components/Hero";
import HomeCard from "../../components/HomeCard";
import JobList from "../../components/JobsList";
import ViewAll from "../../components/ViewAll";

const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCard/>
    <JobList isHome={true} />
    <ViewAll/>
    </>
  )
}

export default HomePage