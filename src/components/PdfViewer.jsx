import React from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Page from './Page';
import Downloadpdf from './DownloadPdf/Downloadpdf';


//  const Downloadpdf = ()=>{
    
    //  const input = document.querySelector('#pdf');
    // console.log("input>>>",input);
    //     html2canvas(input)
    //     .then((canvas)=>{
//         const imgData =canvas.toDataURL('img/png')
//         const pdf = new jsPDF()
//         pdf.addImage(imgData, 'PNG', 0, 0);
//         pdf.save("download.pdf")
//     })
//     }


const PdfViewer = ({id}) => (
 <Page id={id} >
   <div  style={{
        backgroundColor: '#f5f5f5',
        width: '210mm',
        minHeight: '297mm',
        marginLeft: 'auto',
        marginRight: 'auto'
    }}> 
    <div className='pdf'>
        <div className='text-center'> CONVERT PAGE TO PDF </div>
        <p >When I first faced this issue, we had an analytics page, which we wanted to convert into a pdf. My instinct was to add a print.css file and let the browser handle all the dirty work. Long story short, this doesn’t work.

With a print specific stylesheet, I found myself nullifying most of my web specific styles. The end result was not much appealing either. Also, it’s hard to style contents of a PDF as html. What renders fine in the browser looks terrible on a PDF.

We started generating PDFs on server side, using a PhantomJS instance. You can see this server side approach in action at PFRepo : https://pfrepo.me. It’s used to generate pdf version of web resumes)

A better way is to render pdf directly on the frontend. The client side approach is fast (nothing to transmit over network), has less moving parts (no headless browsers) and precise. It also lets you continue to design html instead of thinking in terms of PDF.</p>
</div>
<div>
<Downloadpdf id ={"PdfViewer"} />
</div>
    </div>
 </Page>
)



export default PdfViewer