import React from "react"
import { Routes, Route } from 'react-router-dom';
import { Main } from "../pages/Main";
import { Elementary } from "../pages/Curriculum/elementary";
import { HighSchoolJr } from "../pages/Curriculum/highschooljr";
import { HighSchoolSr } from "../pages/Curriculum/highschoolsr";
import { About } from "../pages/About";
import { Contacts } from "../pages/Contacts";
import { Community } from "../pages/Community";
import { Management } from "../pages/Management";
import { Programs } from "../pages/Programs";
import { HighSchoolJrModule } from "../pages/Module/HighSchoolJr";
import { HighSchoolSrModule } from "../pages/Module/HighSchoolSr";
import { ElementaryLearning } from "../pages/Module/Elementary";
import { Login } from "../pages/Login";
import { Admin } from "../pages/Admin/Main";
import {EnrichmentClass} from '../pages/Module/Enrichment'


export const PublicRoutes = () =>{

    return (
        <Routes>
            <Route path="/" index element ={<Main/>}/>
            <Route path="/enrichment" index element ={<EnrichmentClass/>}/>
            <Route path="/elementary" index element ={<Elementary/>}/>
            <Route path="/juniorhs" index element ={<HighSchoolJr/>}/>
            <Route path="/seniorhs" index element ={<HighSchoolSr/>}/>
            <Route path="/about" index element ={<About/>}/>
            <Route path="/contacts" index element ={<Contacts/>}/>
            <Route path="/management" index element ={<Management/>}/>
            <Route path="/community" index element ={<Community/>}/>
            <Route path="/services" index element ={<Programs/>}/>
            <Route path="/juniorhslearning" index element ={<HighSchoolJrModule/>}/>
            <Route path="/elementarylearning" index element ={<ElementaryLearning/>}/>
            <Route path="/seniorhslearning" index element ={<HighSchoolSrModule/>}/>
            <Route path="/login" index element ={<Login/>}/>
            <Route path="/admin" index element ={<Admin/>}/>
        </Routes>
    )
}