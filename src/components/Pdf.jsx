import React, { useCallback, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import { data } from '../Tablee/makeData';


const Pdf = () => {
    const columns = useMemo(
        () => [
          {
            accessorKey: 'id',
            header: 'ID',
            enableColumnOrdering: false,
            enableEditing: false, //disable editing on this column
            enableSorting: false,
            size: 80,
          },
          {
            accessorKey: 'firstName',
            header: 'First Name',
            size: 140,
            
          },
          {
            accessorKey: 'lastName',
            header: 'Last Name',
            size: 140,
           
          },
          {
            accessorKey: 'email',
            header: 'Email',
            
          },
          {
            accessorKey: 'age',
            header: 'Age',
            size: 80,
          
          },
          {
            accessorKey: 'state',
            header: 'State'
          },
        ],
      );     

  return (
    <div>
        <MaterialReactTable 
        columns={columns}
        data={data}
        />
    </div>
  )
}

export default Pdf