import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            spans: 0
        }

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.imageRef);

        // Now lets console the image heights
        console.log(this.imageRef.current.clientHeight); // o/p as 0

        /* Why the o/p is 0 for all the image heights, its because thought the component has loaded but the images are not yet downloaded from the URL for each of the image. 
        
        Rather we are trying to get the height of the image before the image is downloaded and loaded to the DOM 
        
        To get the actual height we have to basically write a callback function that gives the correct height once all the images are loaded */

        this.imageRef.current.addEventListener('load', this.setSpans);

        // Here we are adding an event called 'load', so basicaly before any image that is not shown in the UI emits a 'load' event, and we also add a callback 'setSpans' here, that will run once the image is available in the DOM.
    }

    setSpans = () => {
        console.log('from setSpans ==> ', this.imageRef.current.clientHeight);
        const imgHeight = this.imageRef.current.clientHeight;
        const numOfSpan = Math.ceil(imgHeight / 10); // 10 is the same from 'image.css' 'grid-auto-rows: 10px;' property

        this.setState({
            spans: numOfSpan
        })
    }

    render() {
        const { alt_description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    src={urls.regular}
                    alt={alt_description}
                    ref={this.imageRef} />
            </div>
        )
    }
}

export default ImageCard;