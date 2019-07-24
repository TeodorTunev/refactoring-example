import React from 'react';

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <div>
        <input
          id={this.props.id}
          name={this.props.name}
          disabled={!!this.props.disabled}
          className={this.props.className}
          type="number"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={e => {
            this.setState({ value: e.target.value });
          }}
        />
      </div>
    );
  }

  getValue = () => {
    return { [this.props.name]: this.state.value };
  };
}

export default NumberInput;
