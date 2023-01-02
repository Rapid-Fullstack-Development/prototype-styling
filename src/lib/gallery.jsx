import React from "react";
import { GalleryLayout } from "./gallery-layout";

//
// A photo gallery component.
//
export class Gallery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.containerRef = React.createRef();
    }

    async componentDidMount() {
        this.onResize();

        this.resizeObserver = new ResizeObserver(entries => {
            // 
            // Monitor for changes in the size of this element.
            //
            this.onResize();
        });

        this.resizeObserver.observe(this.containerRef.current);
    }

    componentWillUnmount() {
        this.resizeObserver.unobserve(this.containerRef.current);
    }

    onResize = () => {
        const gutter = 8; // Small gutter to make sure the edge or each rows is not visible.
        this.setState({
            galleryWidth: this.containerRef.current.clientWidth + gutter,
        });
    }

    render() {
        return (
            <div ref={this.containerRef}>
                <GalleryLayout
                    galleryWidth={this.state.galleryWidth}
                    targetRowHeight={this.props.targetRowHeight}
                    items={this.props.items}                
                    baseUrl={this.props.baseUrl}
                    />
            </div>
        );
    }
}