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

    notImplemented(event) {
        alert("This is a non-function mockup and none of these features are implemented. See the 'Learn more' page for information.");

        event.preventDefault();
        event.stopPropagation();
    }

    render() {
        return (
            <HashRouter>
                <div id="navbar">
                    <div className="flex flex-row items-center pl-2 pt-3 pb-2">
                        <button
                            onClick={() => this.setState({ sidebarOpen: !this.state.sidebarOpen })}
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>

                        <h1 className="text-xl ml-2">Photosphere</h1>

                        <NavLink
                            className="ml-auto mr-2"
                            to="/search"
                            onClick={event => this.notImplemented(event)}
                            >
                            <div className="flex flex-row items-center text-gray-700">
                                <i className="w-4 text-center fa-solid fa-search"></i>
                                <div className="hidden sm:block ml-2">Search</div>
                            </div>
                        </NavLink>

                        <NavLink
                            className="mr-2"
                            to="/cloud"
                            >
                            <div className="flex flex-row items-center text-gray-700">
                                <i className="w-4 text-center fa-solid fa-cloud"></i>
                                <div className="hidden sm:block ml-2">Cloud</div>
                            </div>
                        </NavLink>

                        <NavLink
                            className="mr-2"
                            to="/local"
                            >
                            <div className="flex flex-row items-center text-gray-700">
                                <i className="w-4 text-center fa-solid fa-hard-drive"></i>
                                <div className="hidden sm:block ml-2">Local</div>
                            </div>
                        </NavLink>

                        <NavLink
                            className="mr-2"
                            to="/upload"
                        >
                            <div className="flex flex-row items-center text-gray-700">
                                <i className="w-4 text-center fa-solid fa-upload"></i>
                                <div className="hidden sm:block ml-2">Upload</div>
                            </div>
                        </NavLink>

                        <NavLink
                            className="mr-2"
                            to="/info"
                        >
                            <div className="flex flex-row items-center text-gray-700">
                                <i className="w-4 text-center fa-solid fa-circle-exclamation"></i>
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

                    <NavLink
                        to="/search"
                        onClick={event => this.notImplemented(event)}
                    >
                        <div className="flex flex-row items-center pl-1 text-gray-700">
                            <i className="w-12 text-center fa-solid fa-search"></i>
                            <div className="">Search</div>
                        </div>
                    </NavLink>

                    <NavLink to="/cloud">
                        <div className="flex flex-row items-center pl-1 mt-2 text-gray-700">
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
                        onClick={event => this.notImplemented(event)}
                    >
                        <i className="w-12 text-center fa-regular fa-star"></i>
                        <div className="">Favorites</div>
                    </button>

                    <button
                        className="flex flex-row items-center pl-1 mt-2 text-gray-700 cursor-pointer"
                        onClick={event => this.notImplemented(event)}
                    >
                        <i className="w-12 text-center fa-regular fa-images"></i>
                        <div className="">Collections</div>
                    </button>

                    <button
                        className="flex flex-row items-center pl-1 mt-2 text-gray-700 cursor-pointer"
                        onClick={event => this.notImplemented(event)}
                    >
                        <i className="w-12 text-center fa-regular fa-trash-can"></i>
                        <div className="">Trash</div>
                    </button>

                    <NavLink to="/info">
                        <div className="flex flex-row items-center pl-1 mt-8 text-gray-700">
                            <i className="w-12 text-center fa-solid fa-circle-exclamation"></i>
                            <div className="">Learn more</div>
                        </div>
                    </NavLink>

                </div>

                <div id="main">
                    <div id="content" className={this.state.sidebarOpen ? "open" : ""} >
                        <Routes>
                            <Route
                                exact
                                path="/cloud"
                                element={
                                    <GalleryPage
                                        onImageClick={image => this.setState({ selectedImage: image })}
                                    />
                                }
                            />
                            <Route
                                exact
                                path="/local"
                                element={
                                    <GalleryPage
                                        onImageClick={image => this.setState({ selectedImage: image })}
                                    />
                                }
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
                </div>

                <div className={"photo flex flex-col " + (this.state.selectedImage ? "open" : "")}>
                    <div className="photo-header">
                        <div className="flex flex-row items-center pl-3 pt-3 pb-2">
                            <button
                                className="p-1 px-3"
                                onClick={() => {
                                    this.setState({ selectedImage: undefined, openInfo: false });
                                }}
                            >
                                <i className="fa-solid fa-close"></i>
                            </button>

                            <NavLink
                                className="ml-auto mr-4"
                                to="/search"
                                onClick={event => this.notImplemented(event)}
                            >
                                <div className="flex flex-row items-center text-gray-700">
                                    <i className="w-4 text-center fa-solid fa-share-nodes"></i>
                                    <div className="hidden sm:block ml-2">Share</div>
                                </div>
                            </NavLink>

                            <NavLink
                                className="mr-4"
                                to="/cloud"
                            >
                                <div className="flex flex-row items-center text-gray-700">
                                    <i className="w-4 text-center fa-regular fa-star"></i>
                                    <div className="hidden sm:block ml-2">Favorite</div>
                                </div>
                            </NavLink>

                            <NavLink
                                className="mr-4"
                                to="/local"
                                onClick={event => {
                                    this.setState({ openInfo: true });
                                    event.preventDefault();
                                    event.stopPropagation();
                                }}
                            >
                                <div className="flex flex-row items-center text-gray-700">
                                    <i className="w-4 text-center fa-solid fa-circle-info"></i>
                                    <div className="hidden sm:block ml-2">Info</div>
                                </div>
                            </NavLink>

                            <NavLink
                                className="mr-4"
                                to="/trash"
                                onClick={event => this.notImplemented(event)}
                            >
                                <div className="flex flex-row items-center text-gray-700">
                                    <i className="w-3 text-center fa-regular fa-trash-can"></i>
                                    <div className="hidden sm:block ml-2">Trash</div>
                                </div>
                            </NavLink>

                            <NavLink
                                className="mr-3"
                                to="/menu"
                                onClick={event => this.notImplemented(event)}
                            >
                                <div className="flex flex-row items-center text-gray-700">
                                    <i className="w-2 text-center fa-solid fa-ellipsis-vertical"></i>
                                    <div className="hidden sm:block ml-2">More</div>
                                </div>
                            </NavLink>
                        </div>
                    </div>

                    <div className="photo-content flex-grow flex portrait:flex-col landscape:flex-row justify-center">
                        <div className="flex flex-col justify-center">
                            <button
                                className="p-1 px-3"
                                onClick={event => this.notImplemented(event)}
                                >
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>
                        </div>
                        {this.state.selectedImage && 
                            <img
                                src={this.state.selectedImage.thumb}
                            />
                        }
                        <div className="flex flex-col justify-center">
                            <button
                                className="p-1 px-3"
                                onClick={event => this.notImplemented(event)}
                                >
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={"info overflow-scroll " + (this.state.openInfo ? "open" : "")}>
                    <div className="info-header">
                        <div className="flex flex-row items-center pl-3 pt-3 pb-2">
                            <button
                                className="p-1 px-3"
                                onClick={() => {
                                    this.setState({ openInfo: false });
                                }}
                            >
                                <i className="fa-solid fa-close"></i>
                            </button>

                            <h1 className="text-xl ml-2">Info</h1>
                        </div>
                    </div>

                    <div className="info-content flex flex-col">

                        <div className="flex flex-col flex-grow ml-5 mr-5 mt-6 mb-6 justify-center">
                            <div className="flex flex-row h-8">
                                <textarea
                                    className="flex-grow border-b border-solid border-black border-opacity-20"
                                    placeholder="Add a description"
                                    spellCheck="false"
                                    autoComplete="off"
                                >
                                </textarea>
                            </div>

                            <div className="flex flex-col">
                                <div className="text-lg text-gray-600 flex flex-row portrait:mt-10 landscape:mt-4 pt-2">
                                    <div className="w-6 mt-2 flex flex-col items-center">
                                        <i className="text-2xl fa-solid fa-tags"></i>
                                    </div>
                                    <div className="flex flex-col ml-3">
                                        <div className="flex flex-row">
                                            <span
                                                className="flex flex-wrap justify-between items-center text-sm bg-gray-100 hover:bg-gray-200 border border-gray-200 border-solid rounded pl-1 pr-1 py-0">
                                                Label 1
                                                <button
                                                    className="ml-1 p-1 pl-2 pr-1"
                                                    onClick={event => this.notImplemented(event)}
                                                    >
                                                    <i className="fa-solid fa-close"></i>
                                                </button>
                                            </span>
                                            <span
                                                className="ml-2 flex flex-wrap justify-between items-center text-sm bg-gray-100 hover:bg-gray-200 border border-gray-200 border-solid rounded pl-1 pr-1 py-0">
                                                Label 2
                                                <button
                                                    className="ml-2 p-1 pl-2 pr-1"
                                                    onClick={event => this.notImplemented(event)}
                                                    >
                                                    <i className="fa-solid fa-close"></i>
                                                </button>
                                            </span>

                                            <button
                                                className="ml-2 p-1 pl-3 pr-3"
                                                onClick={event => this.notImplemented(event)}
                                                >
                                                <i className="fa-solid fa-square-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-base text-gray-600 flex flex-row mt-4 pt-2">
                                    <div className="w-6 mt-2 flex flex-col items-center">
                                        <i className="text-2xl fa-solid fa-calendar-day"></i>
                                    </div>
                                    <div className="flex flex-col ml-3">
                                        <div>
                                            Jan 2
                                        </div>
                                        <div className="text-sm flex flex-row" >
                                            <div>Mon, 5:02 PM</div>
                                            <div className="ml-4">GMT+10:00</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-base text-gray-600 flex flex-row mt-4 pt-2">
                                    <div className="w-6 mt-2 flex flex-col items-center">
                                        <i className="text-2xl fa-solid fa-camera"></i>
                                    </div>
                                    <div className="flex flex-col ml-3">
                                        <div>
                                            Google Pixel 6
                                        </div>
                                        <div className="text-sm flex flex-row" >
                                            <div>ƒ/1.85</div>
                                            <div className="ml-4">1/177</div>
                                            <div className="ml-4">6.81mm</div>
                                            <div className="ml-4">ISO368</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-base text-gray-600 flex flex-row mt-4 pt-2">
                                    <div className="w-6 mt-2 flex flex-col items-center">
                                        <i className="text-2xl fa-regular fa-image"></i>
                                    </div>
                                    <div className="flex flex-col ml-3">
                                        <div>
                                            PXL_20230102_070227920.jpg
                                        </div>
                                        <div className="text-sm flex flex-row" >
                                            <div>4.9MP</div>
                                            <div className="ml-4">1920 × 2560</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-base text-gray-600 flex flex-row mt-4 pt-2">
                                    <div className="w-6 mt-0 flex flex-col items-center">
                                        <i className="text-2xl fa-solid fa-upload"></i>
                                    </div>
                                    <div className="flex flex-col ml-3">
                                        <div>
                                            Uploaded from Android device
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Routes>
                    <Route
                        exact
                        path="/cloud"
                        element={
                            <div id="explainer">
                                <div id="explainer-text">
                                    <p>This page shows photos that you have stored in the cloud.</p>
                                </div>
                            </div>
                        }
                    />
                    <Route
                        exact
                        path="/local"
                        element={
                            <div id="explainer">
                                <div id="explainer-text">
                                    <p>This page shows photos that you have stored on the local device (desktop/mobile only).</p>
                                </div>
                            </div>
                        }
                        />

                    <Route
                        exact
                        path="/upload"
                        element={
                            <div id="explainer">
                                <div id="explainer-text">
                                    <p>This page allows photos to be uploaded.</p>
                                </div>
                            </div>
                        }
                        />
                </Routes>
            </HashRouter>
        );
    }
}