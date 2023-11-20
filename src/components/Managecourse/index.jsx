import {
    Box,
    Button,
    Grid,
    Card,
    CardContent,
    Modal,
    Tab,
    Tabs,
    TextField,
    Typography,
    styled,
  } from "@mui/material";
  import React from "react";
  import { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  // import list from "../../../assets/list.svg";
  import axios from "axios";
  import { toast } from "react-toastify";
  import Paper from "@mui/material/Paper";
  import Table from "@mui/material/Table";
  import TableBody from "@mui/material/TableBody";
  import MuiTableCell from "@mui/material/TableCell";
  import TableContainer from "@mui/material/TableContainer";
  import TableHead from "@mui/material/TableHead";
  import TablePagination from "@mui/material/TablePagination";
  import TableRow from "@mui/material/TableRow";
  
  
  const TableCell = styled((props) => (
    <MuiTableCell  {...props}/>
  ))(({ theme }) => ({
    borderBottom:'1.5px solid #CECECE'
  
  }));
  
  const Managecourse = () => {
    const navigate = useNavigate();
  
    
  
    function createData(name, code, population, size) {
      const density = population / size;
      return { name, code, population, size, density };
    }
  
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
      <Paper sx={{ width: "100%" }}>
                    <Box padding={'10px 30px'} style={{'borderBottom':'1.5px solid #CECECE'}} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box fontWeight={'bold'} fontSize={'1.3rem'} >Course list</Box>
  
  
  <Button size="small" style={{color:'#3487E5',fontWeight:'bold',textTransform:'none',fontSize:'1.2rem'}} onClick={()=>{navigate('/userManagement/createUser')}}>Add new course</Button>
                    </Box>
  
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader size="small">
            <TableHead>
            <TableRow >
                <TableCell style={{fontWeight:'bold',fontSize:'1rem'}}>Course</TableCell>
                <TableCell style={{fontWeight:'bold',fontSize:'1rem'}}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <TableCell>Liyaqat sheikh</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
              <TableRow >
              <TableCell>Tabassumal umrah</TableCell>
              <TableCell>Edit</TableCell>
              </TableRow>
              <TableRow >
                <TableCell>Liyaqat sheikh</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
              <TableRow >
              <TableCell>Tabassumal umrah</TableCell>
              <TableCell>Edit</TableCell>
              </TableRow>
              <TableRow >
                <TableCell>Liyaqat sheikh</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
              <TableRow >
              <TableCell>Tabassumal umrah</TableCell>
              <TableCell>Edit</TableCell>
              </TableRow>
              <TableRow >
                <TableCell>Liyaqat sheikh</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
              <TableRow >
              <TableCell>Tabassumal umrah</TableCell>
              <TableCell>Edit</TableCell>
              </TableRow>
              <TableRow >
                <TableCell>Liyaqat sheikh</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
              <TableRow >
              <TableCell>Tabassumal umrah</TableCell>
              <TableCell>Edit</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          sx={{
            '.MuiInputBase-root': {
              marginTop:'-14px',
              marginRight:'5px'
            },
            '.MuiTablePagination-toolbar': {
              color: 'rgb(41, 39, 39)',
              height: '35px',
            },
            '.MuiBox-root': {
              color: 'black',
              '& .MuiSvgIcon-root': {
                color: 'black',
              },
            },
            '.MuiTablePagination-actions':{
              marginTop:'-12px',
              marginLeft:'2px'
            },
            marginTop:'10px',
            marginBottom:'-20px'
          }}
          count={10}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );
  };
  
  export default Managecourse;
  