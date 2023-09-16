import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
    return (
        <>
            <Typography>Dashboard</Typography>
            <Grid container columns={12} flexGrow={1} gap={3}>
                <Grid item md={6}>
                    <Card elevation={1}>
                        <CardHeader title={"Dépenses sur le mois"}/>
                        <CardContent>
                            Hello
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={12}>
                                        <Card elevation={1}>
                        <CardHeader title={"Dernières dépenses"}/>
                        <CardContent>
                            Hello
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;