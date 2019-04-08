import React from 'react';


class Text extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           value: props.value 
        }
    }
    onChange(e){
        this.setState({value: e.target.value}, () => {
            this.props.onChange(this.state.value);
        });
    }
    render(){
        return (
            <div className = "formField">
                <label>Paragraphs:</label>
                <input type = 'number' min ='1' max ='99' value={this.state.value} onChange = {this.onChange.bind(this)}></input>
            </div>
        )
    }
}

export default Text;