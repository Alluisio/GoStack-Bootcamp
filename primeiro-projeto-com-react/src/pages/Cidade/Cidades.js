import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';


export class Cidades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity1: null,
      selectedCity2: null,
      selectedCountry: null,
    };

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];

    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];

    this.onCityChange = this.onCityChange.bind(this);
    this.onCityChange2 = this.onCityChange2.bind(this);
    this.onCountryChange = this.onCountryChange.bind(this);
  }

  onCityChange(e) {
    this.setState({ selectedCity1: e.value });
  }

  onCityChange2(e) {
    this.setState({ selectedCity2: e.value });
  }

  onCountryChange(e) {
    this.setState({ selectedCountry: e.value });
  }

  selectedCountryTemplate(option, props) {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <img
            alt={option.name}
            src="showcase/demo/images/flag_placeholder.png"
            className={`flag flag-${option.code.toLowerCase()}`}
          />
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  }

  countryOptionTemplate(option) {
    return (
      <div className="country-item">
        <img
          alt={option.name}
          src="showcase/demo/images/flag_placeholder.png"
          className={`flag flag-${option.code.toLowerCase()}`}
        />
        <div>{option.name}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="dropdown-demo">
        <div className="card">
          <h5>Basic</h5>
          <Dropdown
            value={this.state.selectedCity1}
            options={this.cities}
            onChange={this.onCityChange}
            optionLabel="name"
            placeholder="Select a City"
          />

          <h5>Editable</h5>
          <Dropdown
            value={this.state.selectedCity2}
            options={this.cities}
            onChange={this.onCityChange2}
            optionLabel="name"
            editable
          />

          <h5>Advanced with Templating, Filtering and Clear Icon</h5>
          <Dropdown
            value={this.state.selectedCountry}
            options={this.countries}
            onChange={this.onCountryChange}
            optionLabel="name"
            filter
            showClear
            filterBy="name"
            placeholder="Select a Country"
            valueTemplate={this.selectedCountryTemplate}
            itemTemplate={this.countryOptionTemplate}
          />
        </div>
      </div>
    );
  }
}
