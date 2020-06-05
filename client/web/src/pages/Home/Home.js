import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, TextField,  CssBaseline, Typography, Avatar, Grid } from '@material-ui/core';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
    
                    <div className="login-area">
                        <Avatar className="logo"></Avatar>
    
                        <Typography component="h1" variant="h5" className="subtitle-login">Conecte-se com o Mundo!</Typography>
    
                        <form className="form" action="/feed" noValidate>
                            <TextField variant="outlined" margin="normal" required
                                fullWidth id="email" label="Email" name="email" autoComplete="email" autoFocus />
    
                            <TextField variant="outlined" margin="normal" required
                                fullWidth name="password" label="Senha" type="password" id="password" />
    
                         
                            <Button type="submit" fullWidth variant="contained" color="primary" className="btn-submit-login"> Entrar</Button>
    
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Esqueceu a senha? </Link>
                                </Grid>
    
                                <Grid item>
                                    <Link to="/cadastro" variant="body2">
                                        {"Ainda não tem conta? Cadastre-se já!"}
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

export default Home;
