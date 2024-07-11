import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiGet = () => {
    var[output, setOutput]=useState([]) //[]is used to indicate output is in array having 10 components
    // useEffect(()=>{},[])
    useEffect(()=>{
        // axios.get("url").then().catch()
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res.data)
            setOutput(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div>
      <Typography variant='h3'>Axios</Typography>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Usename</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {output.map((val,i)=>{
                    return(
                        <TableRow key={i}>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.phone}</TableCell>
                            <TableCell>{val.username}</TableCell>
                            {/* name,phone,username are values given in api key value name*/}
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ApiGet
