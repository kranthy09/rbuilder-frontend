import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const CreateResume = () => {
    const [name, setName] = useState("Name on official documents");
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-controlled"
                    label="Name"
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setName(event.target.value);
                    }}
                    onClick={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setName("")
                    }}
                />
            </div>
        </Box>
    )
}

export default CreateResume;
