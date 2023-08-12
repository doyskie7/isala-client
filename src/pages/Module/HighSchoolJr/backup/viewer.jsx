





import { Document, Page } from 'react-pdf';

export const ExamplePDFViewer = (props) => {

    console.log("props.path==>",props.path)
    const onDocumentLoadSuccess = ({ numPages }) => {
        console.log(numPages)
        // this.setState({ numPages });
      }

    return (
        <div>
        <Document
          file="https://eveguelfreelancer.com/images/newsfeeds/newsfeeds_3983558-middle-removebg-preview.png"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
    )
}



// import React from 'react'

// import PDFViewer from 'pdf-viewer-reactjs'

// export const ExamplePDFViewer = (props) => {
//     return (
//         <PDFViewer
//             document={{
//                 url: props.path,
//             }}
//         />
//     )
// }
