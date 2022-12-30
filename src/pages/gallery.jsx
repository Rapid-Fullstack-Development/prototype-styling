import React from "react";
import axios from "axios";
import { Gallery } from "../lib/gallery";
const gallery = require("../gallery.json");

const BASE_URL = process.env.BASE_URL;

console.log(`Expecting backend at ${BASE_URL}.`);

export class GalleryPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    async componentDidMount() {
        const response = await axios.get(`${BASE_URL}/assets`);
        this.setState({
            items: response.data.assets,
        });    
    }

    render() {
        return (
            <Gallery 
                items={gallery}
                baseUrl={BASE_URL}
                />
        );
    }
}