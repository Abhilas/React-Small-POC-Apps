import React, { useState } from 'react';
import ResourceList from './ResourceList';

const HookApp = () => {
    const [resource, setResource] = useState('posts');

    return (
        <div>
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>ToDo</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );

}

export default HookApp;