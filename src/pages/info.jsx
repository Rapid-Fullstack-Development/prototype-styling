import React from "react";

export class InfoPage extends React.Component {

    render() {
        return (
            <div className="p-4">
                <div id="info-area">
                    <p>
                        This is a non-functional mockup of <a target="_blank" href="https://rapidfullstackdevelopment.com/example-application">the Photosphere application</a>.
                    </p>

                    <p className="mt-4">
                        Photosphere is a photo backup and search application. The development of Photosphere is covered
                        in the book <a target="_blank" href="https://rapidfullstackdevelopment.com/">Rapid Fullstack Development</a>.
                    </p>

                    <p className="mt-4">
                        The purpose of this prototype is to figure out what the user interface for Photosphere might look like and to answer questions that will drive the development process.
                    </p>

                    <p className="mt-4">
                        <a target="_blank" href="https://github.com/Rapid-Fullstack-Development/prototype-styling">
                            The code for this prototype is available on GitHub.
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}