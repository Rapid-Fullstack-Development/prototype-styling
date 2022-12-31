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
            <BrowserRouter>
                <div className="host">
                    <div id="sidebar" className={this.state.sidebarOpen ? "open" : ""} >
                        <div className="flex flex-row items-center mt-2 mb-8">
                            <h1 className="text-xl">
                                Photosphere
                            </h1>
                            <div className="flex-grow" />
                            <button 
                                className="mr-3 text-xl" 
                                onClick={() => this.setState({ sidebarOpen: !this.state.sidebarOpen })}
                                >
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>
                        </div>

                        <Link to="/" className="">
                            <div className="flex flex-row items-center pl-1 text-gray-700">
                                <i className="w-12 text-center fa-solid fa-cloud"></i>
                                <div className="">Storage</div>
                            </div>
                        </Link>

                        <Link to="/" className="">
                            <div className="flex flex-row items-center pl-1 mt-2 text-gray-700">
                                <i className="w-12 text-center fa-solid fa-hard-drive"></i>
                                <div className="">Local</div>
                            </div>
                        </Link>

                        <Link to="/upload" className="">
                            <div className="flex flex-row items-center pl-1 mt-2 text-gray-700">
                                <i className="w-12 text-center fa-solid fa-upload"></i>
                                <div className="">Upload</div>
                            </div>
                        </Link>

                        <div className="flex flex-row items-center pl-1 mt-8 text-gray-700 cursor-pointer">
                            <i className="w-12 text-center fa-regular fa-star"></i>
                            <div className="">Favorites</div>
                        </div>

                        <div className="flex flex-row items-center pl-1 mt-2 text-gray-700 cursor-pointer">
                            <i className="w-12 text-center fa-regular fa-images"></i>
                            <div className="">Collections</div>
                        </div>

                        <div className="flex flex-row items-center pl-1 mt-2 text-gray-700 cursor-pointer">
                            <i className="w-12 text-center fa-regular fa-trash-can"></i>
                            <div className="">Deleted</div>
                        </div>

                    </div>

                    <div id="content" className={this.state.sidebarOpen ? "open" : ""} >
                            {!this.state.sidebarOpen &&
                                <div className="flex flex-row items-center pl-2 pt-2 pb-2">
                                    <button 
                                        onClick={() => this.setState({ sidebarOpen: !this.state.sidebarOpen })}
                                        >
                                        <i className="fa-solid fa-bars"></i>
                                    </button>

                                    <h1 className="text-2xl ml-4">Photosphere</h1>

                                    <div className="flex-grow" />

                                    <Link to="/" className="mr-4 sm:mr-6">
                                        <div className="flex flex-row items-center text-gray-700">
                                            <i className="w-6 text-center fa-solid fa-cloud"></i>
                                            <div className="hidden sm:block ml-2">Storage</div>
                                        </div>
                                    </Link>

                                    <Link to="/" className="mr-4 sm:mr-6">
                                        <div className="flex flex-row items-center text-gray-700">
                                            <i className="w-6 text-center fa-solid fa-hard-drive"></i>
                                            <div className="hidden sm:block ml-2">Local</div>
                                        </div>
                                    </Link>

                                    <Link to="/upload" className="mr-4 sm:mr-8">
                                        <div className="flex flex-row items-center text-gray-700">
                                            <i className="w-6 text-center fa-solid fa-upload"></i>
                                            <div className="hidden sm:block ml-2">Upload</div>
                                        </div>
                                    </Link>
                                </div>
                            }
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
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}