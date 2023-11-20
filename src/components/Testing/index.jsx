import React from "react";
import PDF from './sample.pdf';
import { Document, Page, pdfjs } from "react-pdf";
import "./pdf.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Index = () =>{

    return(
        <Document
    file={PDF}
    onContextMenu={(e) => e.preventDefault()}
    className="pdf-container"
  >
    <Page pageNumber={1} />
  </Document>
    )

    
}

export default Index;