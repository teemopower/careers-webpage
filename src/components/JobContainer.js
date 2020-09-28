import React from 'react'
import CareerFilter from './CareerFilter';
import JobList from './JobList';
import Hero from './Hero';
import Footer from './Footer';

// context
import { withJobConsumer } from "../context"

function JobContainer({context}){
    const { jobs, sortedJobs } = context;

    return (
        <>
            <Hero />
            <CareerFilter jobs={jobs} />
            <JobList jobs={sortedJobs} />
            <Footer />
        </>
    );
}

export default withJobConsumer(JobContainer);