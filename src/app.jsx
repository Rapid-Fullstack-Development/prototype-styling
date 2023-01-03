import React from "react";
import { BrowserRouter, Route, Routes, HashRouter, NavLink, Navigate } from "react-router-dom";
import { GalleryPage } from "./pages/gallery";
import { InfoPage } from "./pages/info";
import { UploadPage } from "./pages/upload";

export class App extends React.Component {

    constructor(properties) {
        super(properties);

        this.state = {
            sidebarOpen: false,
        };
    }

    notImplemented() {
        alert("This is a non-function mockup and none of these features are implemented. See the 'Learn more' page for information.");
    }

    render() {
        return (
            <BrowserRouter>
                <div id="navbar">
                    <div className="flex flex-row items-center pl-2 pt-3 pb-2">
                        <button 
                            onClick={() => this.setState({ sidebarOpen: !this.state.sidebarOpen })}
                            >
                            <i className="fa-solid fa-bars"></i>
                        </button>

                        <h1 className="text-xl ml-2">Photosphere</h1>

                        <NavLink 
                            className="ml-auto mr-1"
                            to="/cloud"
                            >
                            <div className="flex flex-row items-center text-gray-700">
                                <i className="w-6 text-center fa-solid fa-cloud"></i>
                                <div className="hidden sm:block ml-2">Cloud</div>
                            </div>
                        </NavLink>

                        <NavLink 
                            className="mr-1"
                            to="/local"
                            >
                            <div className="flex flex-row items-center text-gray-700">
                                <i className="w-6 text-center fa-solid fa-hard-drive"></i>
                                <div className="hidden sm:block ml-2">Local</div>
                            </div>
                        </NavLink>

                        <NavLink
                            className="mr-2"
                            to="/upload"
                            >
                            <div className="flex flex-row items-center text-gray-700">
                                <i className="w-6 text-center fa-solid fa-upload"></i>
                                <div className="hidden sm:block ml-2">Upload</div>
                            </div>
                        </NavLink>

                        <NavLink
                            className="mr-2"
                            to="/info"
                            >
                            <div className="flex flex-row items-center text-gray-700">
                                <i className="w-6 text-center fa-solid fa-circle-exclamation"></i>
                                <div className="hidden sm:block ml-2">Learn more</div>
                            </div>
                        </NavLink>
                    </div>
                </div>

                <div id="sidebar" className={this.state.sidebarOpen ? "open" : ""} >
                    <div className="flex flex-row items-center mt-4 mb-8">
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

                    <NavLink to="/cloud">
                        <div className="flex flex-row items-center pl-1 text-gray-700">
                            <i className="w-12 text-center fa-solid fa-cloud"></i>
                            <div className="">Cloud</div>
                        </div>
                    </NavLink>

                    <NavLink to="/local">
                        <div className="flex flex-row items-center pl-1 mt-2 text-gray-700">
                            <i className="w-12 text-center fa-solid fa-hard-drive"></i>
                            <div className="">Local</div>
                        </div>
                    </NavLink>

                    <NavLink to="/upload">
                        <div className="flex flex-row items-center pl-1 mt-2 text-gray-700">
                            <i className="w-12 text-center fa-solid fa-upload"></i>
                            <div className="">Upload</div>
                        </div>
                    </NavLink>

                    <button 
                        className="flex flex-row items-center pl-1 mt-8 text-gray-700 cursor-pointer"
                        onClick={this.notImplemented}
                        >
                        <i className="w-12 text-center fa-regular fa-star"></i>
                        <div className="">Favorites</div>
                    </button>

                    <button 
                        className="flex flex-row items-center pl-1 mt-2 text-gray-700 cursor-pointer"
                        onClick={this.notImplemented}
                        >
                        <i className="w-12 text-center fa-regular fa-images"></i>
                        <div className="">Collections</div>
                    </button>

                    <button 
                        className="flex flex-row items-center pl-1 mt-2 text-gray-700 cursor-pointer"
                        onClick={this.notImplemented}
                        >
                        <i className="w-12 text-center fa-regular fa-trash-can"></i>
                        <div className="">Deleted</div>
                    </button>

                    <NavLink to="/info">
                        <div className="flex flex-row items-center pl-1 mt-12 text-gray-700">
                            <i className="w-12 text-center fa-solid fa-circle-exclamation"></i>
                            <div className="">Learn more</div>
                        </div>
                    </NavLink>

                </div>

                <div id="content" className={this.state.sidebarOpen ? "open" : ""} >
                        <Routes>
                            <Route 
                                exact
                                path="/cloud" 
                                element={<GalleryPage />} 
                                />
                            <Route 
                                exact
                                path="/local" 
                                element={<GalleryPage />} 
                                />
                            <Route 
                                exact
                                path="/upload" 
                                element={<UploadPage />} 
                                />

                            <Route 
                                exact
                                path="/info" 
                                element={<InfoPage />} 
                                />

                            <Route
                                exact
                                path="/" 
                                element={
                                    <Navigate 
                                        replace
                                        to="/cloud"
                                        />
                                }
                                />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}