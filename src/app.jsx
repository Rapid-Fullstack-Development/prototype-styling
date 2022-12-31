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

                    <div className="flex flex-row items-center pl-2 text-gray-700 cursor-pointer">
                        <i className="w-12 fa-solid fa-cloud"></i>
                        <div className="">Storage</div>
                    </div>
                    <div className="flex flex-row items-center pl-2 mt-2 text-gray-700 cursor-pointer">
                        <i className="w-12 fa-solid fa-hard-drive"></i>
                        <div className="">Local</div>
                    </div>

                    <div className="flex flex-row items-center pl-2 mt-2 text-gray-700 cursor-pointer">
                        <i className="w-12 fa-solid fa-upload"></i>
                        <div className="">Upload</div>
                    </div>

                    <div className="flex flex-row items-center pl-2 mt-8 text-gray-700 cursor-pointer">
                        <i className="w-12 fa-regular fa-star"></i>
                        <div className="">Favorites</div>
                    </div>

                    <div className="flex flex-row items-center pl-2 mt-2 text-gray-700 cursor-pointer">
                        <i className="w-12 fa-regular fa-images"></i>
                        <div className="">Collections</div>
                    </div>

                    <div className="flex flex-row items-center pl-2 mt-2 text-gray-700 cursor-pointer">
                        <i className="w-12 fa-regular fa-trash-can"></i>
                        <div className="">Deleted</div>
                    </div>

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