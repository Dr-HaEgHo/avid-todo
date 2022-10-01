import React, {useState} from 'react'
import { Icon } from '@iconify/react';

const ListItem = (index) => {

    const [completed, setCompleted] = useState(false);



    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(undefined);
    
    const onSelectedRow = (index) => {
       setSelectedRow(index);
       setOpen(true);
     }

  return (
    <div>
        
    </div>
  )
}

export default ListItem