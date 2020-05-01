import React from "react";
//import SimpleSelect from "./Select.js";
import ThreeViewer from "./ThreeViewer.js";
import Paper from '@material-ui/core/Paper';

class ThreeContainer extends React.Component {
    state = {
        isMounted: true,
        loadingPercentage: 0
    };

    render() {
        const {isMounted = true} = this.state;
        return (
            <Paper elevation={0}>
                {isMounted && <ThreeViewer onProgress={loadingPercentage => this.setState({ loadingPercentage })} />}
            </Paper>
            // <div>
            //     {/* <button onClick={() => this.setState(state => ({isMounted: !state.isMounted}))}>
            //         {isMounted ? "Unmount" : "Mount"}
            //     </button> */}
                
            //     {/* {isMounted && loadingPercentage === 100 && <div>Scroll to zoom, drag to rotate</div>}
            //     {isMounted && loadingPercentage !== 100 && <div>Loading Model: {loadingPercentage}%</div>} */}
            // </div>
        )
    }
}export default ThreeContainer;