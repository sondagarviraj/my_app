import React, { Component } from 'react'

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state =
        {

            data: props.data

        }
    }
    render() {
        //   console.log(this.state.data.name )
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 align="center">All Card Data </h1>
                        </div>
                    </div>
                    <div className="row">
                        {/* <Card data={this.state.card[1]} />
                        <Card data={this.state.card[2]} />
                        <Card data={this.state.card[3]} />
                        <Card data={this.state.card[4]} /> */}

                        {this.state.card.map((card) => {
                            return <Card data={card} />
                        })}
                    </div>
                </div>
            </>
        )
    }
}