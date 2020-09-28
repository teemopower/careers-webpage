import React, { Component } from 'react'

const JobContext = React.createContext();

class JobProvider extends Component {
    state = {
        jobs: [],
        sortedJobs: [],
        type: 'All Departments',
        location: 'All Locations'
    }

    getData = async() => {
        try {
            let response = await fetch('https://dl.dropboxusercontent.com/s/90imekuizwoidih/job_listings.json');
            let jobsData = await response.json();
            
            this.setState({
                jobs: jobsData,
                sortedJobs: jobsData.jobs
            })
        } catch {
            console.log('Error retrieving jobs data');
        }
    }
    
    componentDidMount(){
        this.getData();
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = event.target.name;

        // setState with callback to filter
        this.setState({
            [name]: value
        }, this.filterDepartment);
    }

    filterDepartment = () => { 
        let {
            type,
            jobs,
            location
        } = this.state;

        let data = jobs.jobs;
        let tempData = [...data];
        
        if(type !== 'All Departments'){
            tempData = tempData.filter(job => job.department.name === type)
        }

        if(location !== 'All Locations'){
            let locFilter = [];
            tempData.map(x => {
                return x.offices.map(loc => {
                    if(location === loc.name){
                        locFilter.push(x)
                    }
                    return null;
                });
            });

            tempData = locFilter;
        }

        this.setState({
            sortedJobs: tempData
        });
    }
    
    render() {
        return <JobContext.Provider
        value={
            {
                ...this.state,
                handleChange: this.handleChange
            }
        }>
        {this.props.children}
        </JobContext.Provider>;
    }
}

const JobConsumer = JobContext.Consumer;

// use higher order component
export function withJobConsumer(Component){
    return function ConsumerWrapper(props){
        return <JobConsumer>
            {value => <Component {...props} context={value} />}
        </JobConsumer>
    }
}

export {JobProvider, JobConsumer, JobContext};