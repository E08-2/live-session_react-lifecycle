import React from "react";

class Note extends React.Component {
    constructor() {
        super();

        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
        alert("New note created!");
    }

    componentWillUnmount() {
        alert(`You have deleted the following note: ${this.props.content}`)
    }

    deleteItem() {
        this.props.delete2(this.props.id);
    }
    
    render() {
        return (
            <div className="note">
                {this.props.content}
                <span className="delete" onClick={this.deleteItem}>X</span>
            </div>
        );
    }
}

// const Note = props => {
//     const deleteItem = () => {
//         props.delete2(props.id);
//     }

//     return (
//         <div className="note">
//             {props.content}
//             <span className="delete" onClick={deleteItem}>X</span>
//         </div>
//     );
// }

export default Note;