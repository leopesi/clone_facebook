import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, TextField,  CssBaseline, Typography, Avatar, Grid, Checkbox, FormControlLabel } from '@material-ui/core';

import './Signup.css';


class Signup extends Component {
    render() {
        return (
            <div>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />

                    <div className="signup-area">
                        <Avatar className="logo"></Avatar>

                        <Typography component="h1" variant="h5" className="subtitle-signup">Cadastre-se</Typography>

                        <form className="form" noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField autoComplete="fname" name="first-name" variant="outlined" required
                                        fullWidth id="first-name" label="Nome" autoFocus />
                                </Grid>
                                
                                <Grid item xs={12} sm={6}>
                                    <TextField variant="outlined" fullWidth id="last-name" label="Sobrenome" required
                                        name="lastName"/>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField variant="outlined" fullWidth id="email" label="Email" required
                                        name="email"/>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField variant="outlined" required fullWidth name="password" label="Senha"
                                        type="password" id="password" />
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControlLabel control={ <Checkbox value="agreeTerms" color="primary" /> }
                                        label="Lí e estou de acordo com os termos de uso." />
                                </Grid>
                            </Grid>

                            <Button type="submit" fullWidth variant="contained" color="primary" className="btn-submit-signup">
                                Cadastrar
                            </Button>

                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link to="/" variant="body2">
                                        Já possui uma conta? Acesse já!
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Signup;