import { OutComeLineChart, PlannedTable } from '@components/index';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';

const Home = () => {
    return (
        <>
            <Typography>Dashboard</Typography>
            <Grid container columns={12} flexGrow={1} spacing={2}>
                <Grid sx={{height:'480px'}} md={6}>
                    <Card elevation={1} sx={{height:'100%'}}>
                        <CardHeader title={<Typography component={'h5'} variant='h5'>Dépense sur le mois</Typography>}/>
                        <CardContent>
                            <OutComeLineChart />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid sx={{height:'480px'}} container md={4} columns={2} direction={'column'} spacing={2}>
                    <Grid sx={{backgroundColor:'red'}} height={'50%'}>
                        <Card elevation={1}>
                            <CardHeader title={<Typography component={'h5'} variant='h5'>Economisé ce mois-ci</Typography>}/>
                            <CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid sx={{backgroundColor:'blue'}} height={'50%'}>
                        <Card elevation={1}>
                            <CardHeader title={<Typography component={'h5'} variant='h5'>Economisé ce mois-ci</Typography>}/>
                            <CardContent>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid  md={12}>
                    <Card elevation={1}>
                        <CardHeader title={<Typography component={'h5'} variant='h5'>Dernières dépenses</Typography>}/>
                        <CardContent sx={{maxHeight:'420px'}}>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid  md={6}>
                    <Card elevation={1}>
                        <CardHeader title={<Typography component={'h5'} variant='h5'>Dépenses</Typography>}/>
                        <CardContent>
                            <PlannedTable />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid  md={6}>
                    <Card elevation={1}>
                        <CardHeader title={<Typography component={'h5'} variant='h5'>Revenus</Typography>}/>
                        <CardContent>
                            <PlannedTable />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;