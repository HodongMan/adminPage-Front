import React, {Component} from 'react';

import MainTitle from '../Main/Title';
class Form extends Component{

    render(){

        return(

            <div id = 'page-wrapper'>
                <div className='container-fluid'>
                    <MainTitle
                        title ={"광고 등록"}
                        />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Basic Form Elements
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <form role="form">
                                                <div className="form-group">
                                                    <label>제목</label>
                                                    <input className="form-control" placeholder="Enter text" />
                                                </div>
                                                <div className="form-group">
                                                    <label>내용</label>
                                                    <textarea className="form-control" rows="5"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <label>광고 이미지</label>
                                                    <input type="file" />
                                                </div>

                                                <button type="submit" className="btn btn-default">Submit Button</button>
                                            </form>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
