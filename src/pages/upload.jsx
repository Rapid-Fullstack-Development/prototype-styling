import React from "react";
import { loadFile, getImageResolution } from "../lib/image";

export class UploadPage extends React.Component {

    constructor(properties) {
        super(properties);

        this.state = {
            dragOver: false,
        };
    }

    async onUploadFiles(files) {

        for (const file of files) {
            console.log(file.name);
        }
    };

    onDragEnter(event) {

        this.setState({
            dragOver: true,
        });

        event.preventDefault();
        event.stopPropagation();
    }

    onDragLeave(event) {

        this.setState({
            dragOver: false,
        });

        event.preventDefault();
        event.stopPropagation();
    }

    onDragOver(event) {

        this.setState({
            dragOver: true,
        });

        event.preventDefault();
        event.stopPropagation();
    }

    onDrop(event) {

        this.setState({
            dragOver: false,
        });

        const files = event.dataTransfer.files;
        if (files) {
            this.onUploadFiles(files);
        }

        event.preventDefault();
        event.stopPropagation();
    }

    render() {
        return (
            <div>
                <div 
                    id="upload-drop-area"
                    className={this.state.dragOver ? "highlight" : ""}
                    onDragEnter={event => this.onDragEnter(event)}
                    onDragLeave={event => this.onDragLeave(event)}
                    onDragOver={event => this.onDragOver(event)}
                    onDrop={event => this.onDrop(event)}
                    >
                    <p className="mb-6">Drop files here to upload them or click the button below to choose files.</p>
                    <input 
                        type="file" 
                        className="hidden"
                        id="upload-file-input" 
                        multiple 
                        accept="image/*" 
                        onChange={async event => {
                            await this.onUploadFiles(event.target.files);
                        }}
                        />
                    <label 
                        className="button inline-block p-4 cursor-pointer rounded-lg border border-gray-200 hover:border-gray-400 border-solid bg-gray-100" 
                        htmlFor="upload-file-input"
                        >
                        Select some files
                    </label>
                </div>
            </div>
        );
    }
}