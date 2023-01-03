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
        this.setState({
            galleryWidth: this.containerRef.current.clientWidth,
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
                    onImageClick={this.props.onImageClick}
                    />
            </div>
        );
    }
}