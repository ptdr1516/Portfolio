import React from 'react'
import CV from '../../assets/cv1.pdf'
import Button from 'react-bootstrap/Button'
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const CTA = () => {
  return (
    <div className='cta'>
        <Button
            variant="primary"
            href={CV}
            target="_blank"
            style={{ maxWidth: "250px" }}>Download CV</Button>
        {/*<a href="../../assets/cv.pdf" download className='btn'>Download CV</a>*/}
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA;