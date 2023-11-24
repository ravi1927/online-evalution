import React from "react";
import PDF from './sample.pdf';
import { Document, Page, pdfjs } from "react-pdf";
import "./pdf.css";
import {
  Box,
  CircularProgress,
  TextField,
  Typography,
  FilledInput,
  Button,
  Grid,
  FormHelperText,
  InputAdornment,
  IconButton,
  Switch,
  Stack,
  Backdrop,
} from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Index = () =>{

    return(
  //       <Document
  //   file={PDF}
  //   onContextMenu={(e) => e.preventDefault()}
  //   className="pdf-container"
  // >
  //   <Page pageNumber={1} />
  // </Document>
  <>

  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
        <div style={{ width: '100%', height: '500px', overflow: 'auto' }}>
        <Document file={PDF}>
          <Page pageNumber={1} className="pdf-container" />
        </Document>
      </div>
        </Grid>
        <Grid item xs={5}>
        <TableContainer component={Paper} style={{width: '100%', height: '500px', overflow: 'auto' }}>
      <Table sx={{ minWidth: 120 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Q.No</TableCell>
            <TableCell>A</TableCell>
            <TableCell >B</TableCell>
            <TableCell>C</TableCell>
            <TableCell>D</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
          <TableCell>1.</TableCell>
          <TableCell><TextField size="small"  sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>

          <TableRow>
          <TableCell>3.</TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>

          <TableRow>
          <TableCell>3.</TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>

          <TableRow>
          <TableCell>4.</TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>



          <TableRow>
          <TableCell>5.</TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>


          <TableRow>
          <TableCell>6.</TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>

          <TableRow>
          <TableCell>7.</TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>

          <TableRow>
          <TableCell>8.</TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
        
      </Grid>
    </Box>
  </>
    )

    
}

export default Index;