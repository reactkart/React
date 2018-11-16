import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Header from '../components/common/Header';
class App extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="container">
                <Header />  
                {this.props.children}                  
            </div>
        );
    }
}
App.propTypes={
    children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        
        };
}
export default connect(mapStateToProps)(App);
