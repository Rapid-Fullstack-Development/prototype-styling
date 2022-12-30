import React from "react";
import { Gallery } from "../lib/gallery";
const gallery = require("../gallery.json");

export class GalleryPage extends React.Component {

    render() {
        return (
            <Gallery 
                items={gallery}
                />
        );
    }
}