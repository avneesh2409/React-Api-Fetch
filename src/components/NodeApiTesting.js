import React, { Component } from "react";
import { postusers } from '../api/post';


class Fetch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.postdata = this.postdata.bind(this);
    }
    componentDidMount() {
        let url = "http://localhost:2002/users";
        let data = {
            username: 'Avneesh',
            password: 'password'
        }
        let options = {
            body: JSON.stringify(data),
            method: 'POST'
        }
        this.postdata(url, options);
    }
    postdata = (url, options) => {
        postusers(url, options).then(res => {
            let data = []
            for (let i in res) {
                data.push(res[i]);

            }
            console.log(data);
            this.setState({
                data: data
            })

        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                <h1>hey Ia m Here in Fetch functional component</h1>

            </div>
        )
    }

}
export default Fetch;


