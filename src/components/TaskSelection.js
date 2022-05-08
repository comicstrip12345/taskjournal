import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';


const TaskSelection = () => {

  return (
      <div className="col-12 taskLink">
        <p>
          <span><Link underline="none" color="white" component={RouterLink} to='/thought'>Thoughts</Link></span>
          <span><Link underline="none" color="white" component={RouterLink} to='/task'>Tasks</Link></span>
        </p>
      </div>
      
    
  )
}

export default TaskSelection