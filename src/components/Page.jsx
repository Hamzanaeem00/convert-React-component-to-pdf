import React from 'react';

const Page = ({children, id}) => (
<div
  id={id}
>
  {children}
</div>
); 

export default Page;