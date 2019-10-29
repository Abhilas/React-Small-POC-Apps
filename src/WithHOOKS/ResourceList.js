import React, { useState, useEffect } from 'react';
import JsonPlaceHolderAPI from '../API/JSONPlaceHolder';

// class ResourceList extends React.Component {
//     state = {
//         resources: []
//     }

//     async componentDidMount() {
//         const response = await JsonPlaceHolderAPI.get(`/${this.props.resource}`);

//         this.setState({
//             resources: response.data
//         });
//     }

//     async componentDidUpdate(prevProps) {
//         if (this.props.resource !== prevProps.resource) {
//             const response = await JsonPlaceHolderAPI.get(`/${this.props.resource}`);

//             this.setState({
//                 resources: response.data
//             });
//         }
//     }

//     render() {
//         return (
//             <div>{this.state.resources.length}</div>
//         )
//     }
// }

// export default ResourceList;

// Commented the above class declaration and wrote the same behaviour with Functional components.
// Please compare with the class components

const ResourceList = ({ resource }) => {

    // Creating a State
    const [resourceList, setResourceList] = useState([]);

    // Fetch List of Resources
    const fetchList = async (resourceData) => {
        const response = await JsonPlaceHolderAPI.get(`/${resourceData}`);
        setResourceList(response.data);
    }

    // Calling the API to get the data.
    // useEffect is basically a combination of both 'componentDidMount' & 'componentDidUpdate'
    useEffect(() => {
        fetchList(resource);
    }, [resource]);


    return (
        <div>
            No Of Records : {resourceList.length}
            <br />
            <ul>
                {resourceList.map(eachList => {
                    return <li key={eachList.id}>{eachList.title}</li>
                })}
            </ul>
        </div>
    );
}

export default ResourceList;

