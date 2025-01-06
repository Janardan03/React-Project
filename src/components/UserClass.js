import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        /**
         * way to create use state variables in class based components
         */
        this.state = {
            count: 0
        };
    }

    render() {

        const {count} = this.state;
        const {name} = this.props;

        return (
            <div className="user-card">
                <h1>Count = {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>
                    count increase
                </button>
                <h2>Name: {name}</h2>
                <h3>Location: Jammu</h3>
                <h4>Contact: @janardan03</h4>
            </div>
        );
    }
}

export default UserClass;