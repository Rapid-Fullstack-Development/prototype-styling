import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { GalleryPage } from "./pages/gallery";
import { UploadPage } from "./pages/upload";

export class App extends React.Component {

    constructor(properties) {
        super(properties);

        this.state = {
            sidebarOpen: false,
        };
    }

    render() {
        return (
            <div className="host">
                <div id="sidebar" className={this.state.sidebarOpen ? "open" : ""} >
                    <h3>
                        Photosphere
                    </h3>

                    <br />

                    <h3>Storage</h3>
                    <h3>Local</h3>
                    <h3>Upload</h3>
                    <h3>Favorites</h3>
                    <h3>Collections</h3>
                    <h3>Deleted</h3>

                </div>

                <div id="content" className={this.state.sidebarOpen ? "open" : ""} >
                    <BrowserRouter>
                            <div className="nav">
                                <button 
                                    className="menu" 
                                    onClick={() => this.setState({ sidebarOpen: !this.state.sidebarOpen })}
                                    >
                                <div></div>
                                <div></div>
                                <div></div>
                            </button>
                            <div className="title">Photosphere</div>
                            <Link to="/" className="link">Home</Link>
                            <Link to="/upload" className="link">Upload</Link>
                        </div>
                        <Routes>
                            <Route 
                                path="/" 
                                element={<GalleryPage />} 
                                />
                            <Route 
                                path="/upload" 
                                element={<UploadPage />} 
                                />
                    </Routes>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}