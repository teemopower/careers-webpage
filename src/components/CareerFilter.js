import React from 'react'
import { useContext } from 'react';
import { JobContext } from '../context';

// get all unique values
const getUnique = (items, section, value) => {
    const {jobs} = items;

    if(jobs){
        switch(section){
            case 'department':
                return [...new Set(jobs.map(item => {
                    return item[section][value]
                }))];
            case 'offices':
                let office = [];
                jobs.map(item => {
                    item.offices.map(y => {
                        office.push(y.name)
                        return null;
                    })
                    return null;
                });
                return [...new Set(office)];
            default:
                break;
        }
    }    
}

export default function DepartmentFilter({jobs}) {
    const context = useContext(JobContext);

    const {
        type,
        handleChange,
        location
    } = context;

    // get unique dept
    let types = getUnique(jobs, 'department', 'name');
    
    if(types && types.length > 0){
        types = ['All Departments', ...types]
        // map to jsx
        types = types.map((item, index) => {
            return <option value={item} key={index}>{item}</option>
        });
    }

    let loc = getUnique(jobs, 'offices', 'name');

    if(types && types.length > 0){
        loc = ['All Locations', ...loc]
        loc = loc.map((item, index) => {
        return <option key={index} value={item}>
            {item}
        </option>
        });
    }
    
    return (
        <div>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group-dept">
                    <div>Department</div>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                    {types}
                    </select>
                </div>
                {/* end select type */}
                {/* select location */}
                <div className="form-group-loc">
                    <div>Location</div>
                    <select name="location" id="location" value={location} className="form-control" onChange={handleChange}>
                    {loc}
                    </select>
                </div>
                {/* end select location */}
            </form>
        </div>
    )
}
