import React from 'react';
import './App.css';
import NumberInput from './shared/NumberInput';
import Dropdown from './shared/Dropdown';
import TextInput from './shared/TextInput';
import request from './fake/request';

const gradeOption = [2, 3, 4, 5, 6];

class ApplicationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { agreeCheckbox: false, validations: null };
  }

  elementRef = [];

  formatLabel = type => {
    switch (type) {
      case 'phone':
        return 'Phone number';
      case 'email':
        return 'Email Address';
      case 'name':
        return 'Full Name';
      case 'grades':
        return 'Grades';
      case 'age':
        return 'Age';
      default:
        return;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const resultData = this.elementRef.reduce((result, el) => {
      return { ...result, ...el.getValue() };
    }, {});
    request(resultData).then(result => {
      this.setState({ validations: result.validations });
    });
    console.log(resultData);
  };

  handleCheckboxClick = e => {
    if (e.target.checked) {
      this.setState({ agreeCheckbox: true });
    } else {
      this.setState({ agreeCheckbox: false });
    }
  };

  renderSuccessMessages = validations => {
    const result = [];
    validations.forEach(val => {
      if (val.success) {
        result.push(val);
      }
    });

    return (
      <>
        {result.map((validation, key) => (
          <div key={key} className="success-message">
            {validation.message}
          </div>
        ))}
      </>
    );
  };

  renderErrorMessages = validations => {
    const result = validations.reduce((result, val) => {
      if (!val.success) {
        result.push(val);
      }
      return result;
    }, []);

    return (
      <>
        {result.map((validation, key) => (
          <div key={key} className="error-message">
            {validation.message}
          </div>
        ))}
      </>
    );
  };

  render() {
    this.elementRef = [];
    return (
      <div>
        {this.state.validations &&
          this.renderSuccessMessages(this.state.validations)}
        {this.state.validations &&
          this.renderErrorMessages(this.state.validations)}
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="checkbox"
              name="checkbox"
              value={this.state.value}
              onChange={this.handleCheckboxClick}
            />
            I am agreed with the terms
          </label>
          <TextInput
            id="email"
            name="email"
            placeholder={this.formatLabel('email')}
            className="form-input"
            disabled={!this.state.agreeCheckbox}
            ref={ref => ref && this.elementRef.push(ref)}
          />
          <TextInput
            id="name"
            name="name"
            placeholder={this.formatLabel('name')}
            className="form-input"
            disabled={!this.state.agreeCheckbox}
            ref={ref => ref && this.elementRef.push(ref)}
          />
          <NumberInput
            id="phone"
            name="phone"
            placeholder={this.formatLabel('phone')}
            className="form-input"
            disabled={!this.state.agreeCheckbox}
            ref={ref => ref && this.elementRef.push(ref)}
          />
          <Dropdown
            id="grades"
            name="grades"
            className="form-input"
            placeholder={this.formatLabel('grades')}
            disabled={!this.state.agreeCheckbox}
            ref={ref => ref && this.elementRef.push(ref)}
            options={gradeOption}
          />
          <NumberInput
            id="age"
            name="age"
            placeholder={this.formatLabel('age')}
            className="form-input"
            disabled={!this.state.agreeCheckbox}
            ref={ref => ref && this.elementRef.push(ref)}
          />
          <button type="submit" disabled={!this.state.agreeCheckbox}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ApplicationForm;
