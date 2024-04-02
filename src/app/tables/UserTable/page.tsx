"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import LoadingComponent from '@/app/loading'


import DataTable, { TableColumn } from "react-data-table-component"
type UserType = {
    id: number,
    username: string,
    image: string
}

const columns: TableColumn<UserType>[] = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true
  },
  {
    name: "Username",
    selector: (row) => row.username,
    sortable: true
  },
  {
    name: "Image",
    cell: (row) => <img src={row.image} width={50} height={50} />,
    sortable: true
  }, 
];

const usr_based = "https://dummyjson.com/users"
const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  async function fetchUsers(){
    const user = await fetch(usr_based, {
      cache: "no-store"
    });
    const res = await user.json();
    setUsers(res.users);
    setLoading(false);
  }
  useEffect(() => {
    fetchUsers();
  }, [])
  
  return (
    <div >
      <DataTable
      columns={columns}
      fixedHeader={true}
      fixedHeaderScrollHeight="800px"
      data={users}
      pagination
      customStyles={customStyles}
      progressComponent={<LoadingComponent/>}
      progressPending={isLoading}
    />
    </div>
  )
}

const customStyles = {
	rows: {
		style: {
			minHeight: '100px',
      minwidth: '900px',
		},
	},
	headCells: {
		style: {
			paddingLeft: '8px', 
			paddingRight: '8px',
      minheight: '100px',
      minwidth: '900px',
		},
	},
	cells: {
		style: {
			paddingLeft: '8px', 
			paddingRight: '8px',
      minheight: '100px',
      minwidth: '900px',
		},
	},
};

//const MyComponent = () => <DataTable lastname="Arnold Movies" columns={columns} customStyles={customStyles} />;

export default UserTable
