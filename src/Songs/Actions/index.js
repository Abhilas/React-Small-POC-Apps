// Action Creator is a js function that creates a Action Object.

// Creating Action Creator
export const SelectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

// The above type of export is called as 'Named Export' as we are doing specific exports.
/* 
    e.g.
    ---

    1.  export const MyClass = () => {
            return (
                <></>
            )
        }
    
    2. export const Msg = 'Hello World';

    To import the Named exports we have to use the specific export name, so for this reason we use {} in the import statement.

    import { MyClass, Msg } from './Comp';

*/

// The other type of export is called 'Default Export' where we export only default
/* 
    e.g.
    ---

    1.  const MyClass = () => {
            return (
                <></>
            )
        }
     
        export default MyClass;

    2.  class MyClass extends React.Component {
            render () {
                return (
                    <></>
                )
            }
        }

        export default MyClass;

    So while importing the default Exports we have to use 
    
    import MyClass from './MyClass';
*/
