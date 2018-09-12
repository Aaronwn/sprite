import React, { Component } from 'react';
import logo from './logo.svg';
import zhCN from 'axxd/lib/locale-provider/zh_CN';
import './App.css';
import { LocaleProvider, DatePicker } from 'axxd';
import 'moment/locale/zh-cn';
import moment from 'moment';

const RangePicker = DatePicker.RangePicker;

class App extends Component {

  onChange = (date, dateString) => {
    console.log(date, dateString);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LocaleProvider locale={zhCN}>
          {/* <RangePicker onChange={this.onChange} /> */}

          <RangePicker
            showTime={{
              hideDisabledOptions: true,
              defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
            }}
            format="YYYY-MM-DD HH:mm:ss"
          />
        </LocaleProvider>

      </div>
    );
  }
}

export default App;
