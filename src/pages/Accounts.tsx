import { AccountingDataGrid} from '@components/index';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const Accounts = () => {
    return (
        <Stack flexDirection={{lg:'column', xl:'row'}} gap={'1rem'} sx={{ minHeight:'inherit', width: '100%'}}>
            <Box  sx={{padding: '2rem 0', width: '100%' }} >
                <Typography component={'h2'} variant='h5'>Dépenses</Typography>
                <AccountingDataGrid />
            </Box>
            <Box sx={{padding: '2rem 0', width: '100%' }} >
                <Typography component={'h2'} variant='h5'>Revenus</Typography>
                <AccountingDataGrid />
            </Box>
        </Stack>
    );
};

export default Accounts;