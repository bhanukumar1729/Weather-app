import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function Error(){
    return(<div style={{width:"400px",margin:"auto"}}> 
        <Alert variant="filled" severity="error" >
    City not found
    </Alert>
    </div>
    )
}