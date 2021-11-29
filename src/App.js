import React, { Fragment} from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './components/mainPage'


export function App(){

    // return ( <div>Hola React</div> )
    return (
        <Fragment>
       <MainPage />
        </Fragment>
    )
}