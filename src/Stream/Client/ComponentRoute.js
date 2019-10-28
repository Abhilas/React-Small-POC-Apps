// import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

// const PageOne = () => {
//     return (
//         <>
//             <div>Page One !!!</div>
//             <Link to='/pagetwo'>Go to Page 2</Link>
//         </>
//     );
// };

// const PageTwo = () => {
//     return (
//         <>
//             <div>Page Two !!!</div>
//             <Link to='/'>Go to Page 1</Link>
//         </>
//     );
// };

// const Dummy = () => {
//     return (
//         <>
//             <BrowserRouter>
//                 <div>
//                     <Route path="/" exact component={PageOne} />
//                     <Route path="/pagetwo" component={PageTwo} />
//                 </div>
//             </BrowserRouter>
//         </>
//     )
// }

// export default Dummy;

/* Commented the above code as going to implement the actual Routing. */


import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// Commented the above code as we are going to create a new custom history (to gain more control over the browser history object). Reference history.js file.
// Since the new history object cannot be passed to the BrowserRouter as a props, we have to use Router in place of BrowserRouter.

import { Router, Route, Switch } from 'react-router-dom';
import History from '../history';

import StreamCreate from './Components/StreamCreate';
import StreamDelete from './Components/StreamDelete';
import StreamEdit from './Components/StreamEdit';
import StreamList from './Components/StreamList';
import StreamShow from './Components/StreamShow';

import Header from './PageComponent/Header';

const ComponentRoute = () => {
    return (
        <Router history={History}>
            <div>
                <Header />
                <Switch>
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' exact component={StreamCreate} />
                    <Route path='/streams/edit/:id' exact component={StreamEdit} />
                    <Route path='/streams/delete/:id' exact component={StreamDelete} />
                    <Route path='/streams/:id' exact component={StreamShow} />
                </Switch>
            </div>
        </Router>
    )
}

export default ComponentRoute;
