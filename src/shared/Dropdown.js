import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { value: props.options ? props.options[0] : '' };

    this.state = { value: '' };
  }

  render() {
    const options = this.props.options || [];
    return (
      <div>
        <select
          placeholder={this.props.placeholder}
          id={this.props.id}
          name={this.props.name}
          disabled={!!this.props.disabled}
          className={this.props.className}
          type="number"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        >
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
      </div>
    );
  }

  getValue = () => {
    return { [this.props.name]: this.state.value };
  };
}

export default Dropdown;
