/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // name:props.name,
            // writer:props.writer,
            // stock:props.stock,
            // price:props.price

                data: props.data

        }
    }

    render() {
        // console.log(this.state.data.name)
        return (
            <>
                <div className='col-4'>
                    <div className="Card my-5" style={{ width: "18rem" }}>
                        <img src="https://picsum.photos/200/300"/>
                        <div className="card-body">
                            <h4>name : {this.state.name}</h4>
                            <h4>writer  :{this.state.writer}</h4>
                            <h4>stock : {this.state.stock}</h4>
                            <h4>price :{this.state.price}</h4>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className="Card my-5" style={{ width: "18rem" }}>
                        <img src="https://picsum.photos/200/300/?"/>
                        <div className="card-body">
                            <h4>name : {this.state.name}</h4>
                            <h4>writer  :{this.state.writer}</h4>
                            <h4>stock : {this.state.stock}</h4>
                            <h4>price :{this.state.price}</h4>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
