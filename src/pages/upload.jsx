import React from "react";
import { loadFile, getImageResolution } from "../lib/image";

export class UploadPage extends React.Component {

    async onUploadFiles(files) {
        for (const file of files) {
            const imageData = await loadFile(file);
            const imageResolution = await getImageResolution(imageData);
            
            // Upload the file here.
        }
    };

    render() {
        return (
            <div>
                <p>Click the button and choose files to upload</p>
                <input
                    type="file"
                    multiple={true}
                    accept="image/*"
                    onChange={async event => {
                        await this.onUploadFiles(event.target.files);
                    }}
                    />
            </div>
        );
    }
}