import React, {Component} from 'react';

class MainTitle extends Component{

    render(){
        return(
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">{this.props.title}</h1>
                </div>

            </div>
        );
    }
}

export default MainTitle;
