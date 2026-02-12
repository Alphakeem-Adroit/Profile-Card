// function Metrics() {
//     return (
//         <div>
//             <h3>80k</h3>
//             <p>Followers</p>
//         </div>
//     );
// }

const Metrics = (props) => {
    return (
        <div>
            <h3>{ props.figure }</h3>
            <p>{ props.label }</p>
        </div>
    );
}

export default Metrics;