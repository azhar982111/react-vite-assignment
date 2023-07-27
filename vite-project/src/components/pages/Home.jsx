import styles from "../../css folder/Home.module.css"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import CollapsibleList from "./CollapsibleList";
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'TITLE',
      width: 150,
      editable: true,
    },
    {
      field: 'desc',
      headerName: 'DESCRIPTION',
      width: 500,
      editable: true,
    }
  ]
  
export default function Home() {

    const [data,setData] = useState([])

    let getData = async()=>{
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        let fetchedData = await res.json()
        setData(fetchedData)
    }

    useEffect(()=>{
        getData()
    },[])

    // console.log(data)

    const rows = [];

        data.map((ele)=>(
            rows.push({ id: ele.id, title:ele.title, desc: ele.body,})
        ))
      

    //   console.log(rows)

    return (
        <div className={styles.container}>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>

            <div>
                <CollapsibleList/>
            </div>
        </div>
    )
}