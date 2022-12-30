import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { GalleryPage } from "./pages/gallery";
import { UploadPage } from "./pages/upload";

export class App extends React.Component {

    constructor(properties) {
        super(properties);

        this.state = {
            sidebarOpen: true,
        };
    }

    render() {
        return (
            <div className="host">
                <div id="sidebar" className={this.state.sidebarOpen ? "open" : ""} >
                    <h1 className="text-2xl mt-2 mb-8">
                        Photosphere
                    </h1>

                    <div className="text-lg">Storage</div>
                    <div className="text-lg">Local</div>
                    <div className="text-lg">Upload</div>
                    <div className="text-lg mt-6">Favorites</div>
                    <div className="text-lg">Collections</div>
                    <div className="text-lg">Deleted</div>

                </div>

                <div id="content" className={this.state.sidebarOpen ? "open" : ""} >
                    <BrowserRouter>
                        <div className="flex flex-row items-center  pl-1 pt-1 pb-2">
                            <button 
                                className="menu" 
                                onClick={() => this.setState({ sidebarOpen: !this.state.sidebarOpen })}
                                >
                                <div></div>
                                <div></div>
                                <div></div>
                            </button>
                            <h1 className="title text-2xl ml-2">Photosphere</h1>
                            <Link to="/" className="ml-2 mt-1">Home</Link>
                            <Link to="/upload" className="ml-2 mt-1">Upload</Link>
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