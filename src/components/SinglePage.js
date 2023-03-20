import React from 'react';
import DownloadPdf2 from './DownloadPdf2';

const SinglePage = ({id}) => 
(
  
 <>
 <div>
<div>
  {/* <input type='text' placeholder='search' /> */}
</div>
  <div id={id}>
  <div className=''> CONVERT PAGE TO PDF </div>
        <p >When I first faced this issue, we had an analytics page, which we wanted to convert into a pdf. My instinct was to add a print.css file and let the browser handle all the dirty work. Long story short, this doesn’t work.
With a print specific stylesheet, I found myself nullifying most of my web specific styles. The end result was not much appealing either. Also, it’s hard to style contents of a PDF as html. What renders fine in the browser looks terrible on a PDF.
We started generating PDFs on server side, using a PhantomJS instance. You can see this server side approach in action at PFRepo : https://pfrepo.me. It’s used to generate pdf version of web resumes)
A better way is to render pdf directly on the frontend. The client side approach is fast (nothing to transmit over network), has less moving parts (no headless browsers) and precise. It also lets you continue to design html instead of thinking in terms of PDF.</p>
</div>

<div>
 <DownloadPdf2 id={"SinglePage"}  /> 
 </div>
 </div>
</>

);

export default SinglePage;