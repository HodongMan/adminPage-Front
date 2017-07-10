import React, {Component} from 'react';

class ListItem extends Component{

    render(){

        return(
            <tr className="odd gradeX">
                <td>Trident</td>
                <td>Internet Explorer 4.0</td>
                <td>Win 95+</td>
                <td className="center">4</td>
                <td className="center">X</td>
            </tr>
        );
    }
}

export default ListItem;
