import React from 'react'
import { Checkbox, Collapse } from 'antd'

const {Panel} = Collapse

const blogs =  [
    {
    "headline": "Achieving Sustainable Development by Accelerating Gender Equality" ,
    "authorName": "Piyush Narang" ,
    "date": "October 15, 2021",
    "category": "Politics & environment"
  },
  {
    "headline": "Development by Accelerating Gender Equality" ,
    "authorName": "Piyush Narang" ,
    "date": "October 15, 2021",
    "category": "Politics & environment"
  },
  {
    "headline": "Accelerating Gender Equality" ,
    "authorName": "Piyush Narang" ,
    "date": "October 15, 2021",
    "category": "Politics & environment"
  },
  {
    "headline": "Sustainable Development by Accelerating Gender Equality" ,
    "authorName": "Piyush Narang" ,
    "date": "October 15, 2021",
    "category": "Politics & environment"
  },
  {
    "headline": " by Accelerating Gender Equality" ,
    "authorName": "Piyush Narang" ,
    "date": "October 15, 2021",
    "category": "Politics & environment"
  },
  {
    "headline": "Gender Equality Achieving Sustainable Development by Accelerating" ,
    "authorName": "Piyush Narang" ,
    "date": "October 15, 2021",
    "category": "Politics & environment"
  },
  {
    "headline": "Equality Achieving Sustainable Development by Accelerating Gender " ,
    "authorName": "Piyush Narang" ,
    "date": "October 15, 2021",
    "category": "Politics & environment"
  },
  {
    "headline": "Achieving Sustainable Development by Accelerating Gender Equality" ,
    "authorName": "Piyush Narang" ,
    "date": "October 15, 2021",
    "category": "Politics & environment"
  },
  {
    "headline": "Achieving Sustainable Development by Accelerating Gender Equality" ,
    "authorName": "Piyush Narang" ,
    "date": "October 15, 2021",
    "category": "Politics & environment"
  },
  {
    "headline": "Achieving Sustainable Development by Accelerating Gender Equality" ,
    "authorName": "Piyush Narang" ,
    "date": "October 15, 2021",
    "category": "Politics & environment"
  },
  {
    "headline": "Achieving Sustainable Development by Accelerating Gender Equality" ,
    "authorName": "Piyush Narang" ,
    "date": "October 15, 2021",
    "category": "Politics & environment"
  },
  {
    "headline": "Achieving Sustainable Development by Accelerating Gender Equality" ,
    "authorName": "Piyush Narang" ,
    "date": "October 15, 2021",
    "category": "Politics & environment"
  },
  {
    "headline": "Achieving Sustainable Development by Accelerating Gender Equality" ,
    "authorName": "Piyush Narang" ,
    "date": "October 15, 2021",
    "category": "Politics & environment"
  }
  ]

//   const renderCheckboxLists = () => props.list && props.list.map((value, index) => (
        
//     ))
 

const Filter = () => {
    return (
        <div>
        <Collapse defaultActiveKey={['0']} >
            <Panel header key="1">
            
            
            
            <React.Fragment >
                        <Checkbox
                        // onChange={() => handleToggle()}
                        type="checkbox"
                        checked
                        />
                        <span> Category</span>
                    </React.Fragment>
                    <React.Fragment >
                        <Checkbox
                        onChange
                        type="checkbox"
                        checked
                        />
                        <span> Date</span>
                    </React.Fragment>
            <React.Fragment >
                        <Checkbox
                        onChange
                        type="checkbox"
                        checked
                        />
                        <span>Author-Name</span>
                        
                    </React.Fragment>
                {/* {blogs.map((value, index) => (
                    <React.Fragment key={index}>
                        <Checkbox
                        onChange
                        type="checkbox"
                        checked
                        />
                        <span>{value.}</span>
                    </React.Fragment>
                ))} */}
            </Panel>
        </Collapse>
            
        </div>
    )
}

export default Filter
