import React from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Downloadpdf = () => {
  return (
    <div>
        <button onClick={()=>{
            const input = document.querySelector('#pdf');
            // console.log("input>>>",input);
            html2canvas(input)
            .then((canvas)=>{
                const imgData =canvas.toDataURL('img/png')
                const pdf = new jsPDF()
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save("download.pdf")
            })
            .catch( error =>  console.log("error >>", error) );
        }}>Download</button>
    </div>
  )
}

export default Downloadpdf