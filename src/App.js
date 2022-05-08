import React from "react"
import TaskSelection from "./components/TaskSelection";
import Thought from "./components/Thought"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './css/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "./components/Tasks";


const App = () => {
    return (
        <div>
            <section className='home'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 title'>
                            <h1>notetaker</h1>
                        </div>
                        <BrowserRouter>
                            <TaskSelection />
                            <Routes>
                                <Route path="/thought" element={<Thought />} />
                                <Route path="/task" element={<Tasks />} />
                            </Routes>
                        </BrowserRouter>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App