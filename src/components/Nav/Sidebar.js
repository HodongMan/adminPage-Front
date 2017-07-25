import React, {Component} from 'react';
import {Link} from 'react-router';

class Sidebar extends Component{

    active(path){

        if(this.props.pathname === path){
            return 'active'
        }
    }


    render(){
        return(

            <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav side-nav">
                    <li className={this.active("/")}>
                        <Link to='/'><i className="fa fa-fw fa-dashboard"></i> Dashboard</Link>
                    </li>
                    <li className={this.active("/chart")}>
                        <Link to='/chart'><i className="fa fa-fw fa-bar-chart-o"></i> 차트</Link>
                    </li>
                    <li className={this.active("/list")}>
                        <Link to='/list'><i className="fa fa-fw fa-table"></i> 광고 목록</Link>
                    </li>
                    <li className={this.active("/form")}>
                        <Link to='/form'><i className="fa fa-fw fa-edit"></i> 광고 등록</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
