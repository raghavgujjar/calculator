import React, { Component } from 'react';

let keys = [
    {className: "operand", content: "9"},
    {className: "operand", content: "8"},
    {className: "operand", content: "7"},
    {className: "operator", content: "/"},
    {className: "operand", content: "6"},
    {className: "operand", content: "5"},
    {className: "operand", content: "4"},
    {className: "operator", content: "*"},
    {className: "operand", content: "3"},
    {className: "operand", content: "2"},
    {className: "operand", content: "1"},
    {className: "operator", content: "-"},
    {className: "operand", content: "0"},
    {className: "operand", content: "."},
    {className: "equals", content: "="},
    {className: "operator", content: "+"}
]

class Calculator extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = (e) => {
        let value = e.target.textContent;
        let className = e.target.className;
        if (this.state.value !== '0' || className === 'operator' || value === '.') {
            value = this.state.value + value;
        }
        this.handleChange(e, value);
    }
    handleChange = (e, val) => {
        this.setState({value: val || e.target.value});
    }
    clear = (e) => {
        e.stopPropagation();
        let input = document.querySelector('input[type="text"]');
        input.value = '0';
        this.setState({value: '0'});
    }
    handleEquals = (e) => {
        e.stopPropagation();
        let result = eval(this.state.value);
        this.handleChange(e, result);
    }
    render() {
        return (
            <div className="calculator">
                <div className="outputArea">
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </div>
                <div className="inputArea" onClick={this.handleClick}>
                    <div className="clear" onClick={this.clear}>
                        <CalculatorBox>C</CalculatorBox>
                    </div>
                    {keys.map(function(key) {
                        return <CalculatorKeys key={key.content} data={key} />;   
                    })}
                </div>    
            </div>
        );
    }
    componentDidMount() {
        var equals = document.querySelector('.equals');
        equals.addEventListener('click', this.handleEquals);
    }
}

class CalculatorKeys extends Component {
    render() {
        return (
            <CalculatorBox className={this.props.data.className}>{this.props.data.content}</CalculatorBox>
        )
    }
} 

class CalculatorBox extends Component {
    render() {
        return (
            <button className={this.props.className}>{this.props.children}</button>
        )
    }
}

export default Calculator;