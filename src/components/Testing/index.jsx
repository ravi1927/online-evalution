import React, { useState } from 'react';
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

  const [myArray, setMyArray] = useState();
 // Question 1
  const [firsta, setFirsta] = useState('');
  const [firstb, setFirstb] = useState('');
  const [firstc, setFirstc] = useState('');
  const [firstd, setFirstd] = useState('');

  //Question 2
  const [seconda, setSeconda] = useState('');
  const [secondb, setSecondb] = useState('');
  const [secondc, setSecondc] = useState('');
  const [secondd, setSecondd] = useState('');

   //Question 3
   const [threea, setThreea] = useState('');
   const [threeb, setThreeb] = useState('');
   const [threec, setThreec] = useState('');
   const [threed, setThreed] = useState('');
    //Question 4
  const [fourtha, setFourtha] = useState('');
  const [fourthb, setFourthb] = useState('');
  const [fourthc, setFourthc] = useState('');
  const [fourthd, setFourthd] = useState('');
   //Question 5
   const [fiftha, setFiftha] = useState('');
   const [fifthb, setFifthb] = useState('');
   const [fifthc, setFifthc] = useState('');
   const [fifthd, setFifthd] = useState('');
    //Question 6
  const [sixtha, setSixtha] = useState('');
  const [sixthb, setSixthb] = useState('');
  const [sixthc, setSixthc] = useState('');
  const [sixthd, setSixthd] = useState('');
   //Question 7
   const [seventha, setSeventha] = useState('');
   const [seventhb, setSeventhb] = useState('');
   const [seventhc, setSeventhc] = useState('');
   const [seventhd, setSeventhd] = useState('');
    //Question 8
  const [eightha, setEightha] = useState('');
  const [eighthb, setEighthb] = useState('');
  const [eighthc, setEighthc] = useState('');
  const [eighthd, setEighthd] = useState('');

  

  const newObj = 
  [
  {
    Question: 1,
    valuea: firsta,
    valueb:firstb,
    valuec:firstc,
    valued:firstd,
  },
  {
    Question: 2,
    valuea: seconda,
    valueb:secondb,
    valuec:secondc,
    valued:secondd,
  },
  {
    Question: 3,
    valuea: threea,
    valueb:threeb,
    valuec:threec,
    valued:threed,
  },
  {
    Question: 4,
    valuea: fourtha,
    valueb:fourthb,
    valuec:fourthc,
    valued:fourthd,
  },
  {
    Question: 5,
    valuea: fiftha,
    valueb:fifthb,
    valuec:fifthc,
    valued:fifthd,
  },
  {
    Question: 6,
    valuea: sixtha,
    valueb:sixthb,
    valuec:sixthc,
    valued:sixthd,
  },
  {
    Question: 7,
    valuea: seventha,
    valueb:seventhb,
    valuec:seventhc,
    valued:seventhd,
  },
  {
    Question: 8,
    valuea: eightha,
    valueb:eighthb,
    valuec:eighthc,
    valued:eighthd,
  }
];


const HandelSave = () => {
  console.log('sadhsagdjs',newObj)
}


  

  

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
          <TableCell><TextField size="small" onChange={(e)=>setFirsta(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setFirstb(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setFirstc(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setFirstd(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>

          <TableRow>
          <TableCell>2.</TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setSeconda(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setSecondb(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setSecondc(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setSecondd(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>
          <TableRow>
          <TableCell>3.</TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setThreea(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setThreeb(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setThreec(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setThreed(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>
          <TableRow>
          <TableCell>4.</TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setFourtha(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setFourthb(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setFourthc(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setFourthd(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>
          <TableRow>
          <TableCell>5.</TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setFiftha(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setFifthb(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setFifthc(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setFifthd(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>
          <TableRow>
          <TableCell>6.</TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setSixtha(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setSixthb(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setSixthc(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setSixthd(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>
          <TableRow>
          <TableCell>7.</TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setSeventha(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setSeventhb(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setSeventhc(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setSeventhd(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>
          <TableRow>
          <TableCell>8.</TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setEightha(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setEighthb(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setEighthc(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" onChange={(e)=>setEighthd(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>

         {/* {myArray?.length===0? (<>
          <TableRow>
          <TableCell>1.</TableCell>
          <TableCell><TextField size="small" value={2} onChange={(e)=>setFirst(e.target.value)} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" name='2' value={4} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" name='3' value={6} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" name='4' value={5} sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>
         
         </>):(<>

         {myArray.map((obj)=>{
          return(
          <TableRow>
          <TableCell>1.</TableCell>
          <TableCell><TextField size="small" name='1' value={2} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" name='2' value={4} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" name='3' value={6} sx={{width:'3.5rem'}} /></TableCell>
          <TableCell><TextField size="small" name='4' value={5} sx={{width:'3.5rem'}} /></TableCell>
          </TableRow>
          )
          
         })}
          
         
         </>)}  */}
          <TableRow>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell><Button onClick={HandelSave}> Save</Button></TableCell>
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