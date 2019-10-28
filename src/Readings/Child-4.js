import React from 'react';
import ReactDOM from 'react-dom';
import { resolve } from 'dns';

// const fakeCall = new Promise((resolve, reject) => {
//     let XHR_Call = new XMLHttpRequest();
//     XHR_Call.open('GET', 'https://jsonplaceholder.typicode.com/users');
//     XHR_Call.onload = () => resolve(XHR_Call.responseText);
//     XHR_Call.onerror = () => reject(XHR_Call.statusText);
//     XHR_Call.send();
// });

// const ChildFour = () => {
//     console.log('Fake Call Promise ==> ', fakeCall);
//     fakeCall.then((data) => {
//         console.log(data);
//     }).catch((error) => {
//         console.log('Error from Promise ==> ', error);
//     });
//     return (
//         <p>Hello from Child 4</p>
//     )
// };

// export default ChildFour;

import ContextOne from './context-1';
import ContextTwo from './context-2';

const ChildFour = () => {
    return (
        <ContextTwo.Consumer>
            {
                (ContextTwoValue) => <div style={{height: 100, backgroundColor: `${ContextTwoValue}`}}>
                    {
                        <ContextOne.Consumer>
                            {
                                (ContextOneValue) => <span style={{color: `${ContextOneValue}`}}>Text Color from Context</span>
                            }
                        </ContextOne.Consumer>
                    }
                </div>
            }
        </ContextTwo.Consumer>
    )
}

export default ChildFour;





