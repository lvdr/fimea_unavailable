import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { OnlineDetectionService } from "./OnlineDetectionService";
import { DrugRecordServiceFactory } from "./DrugRecordServiceFactory";

let onlineDetectionService = new OnlineDetectionService();
let drugRecordServiceFactory = new DrugRecordServiceFactory(onlineDetectionService);
let drugRecordsService = drugRecordServiceFactory.getDrugRecordService();

ReactDOM.render(
  <React.StrictMode>
    <App drugRecordService={drugRecordsService}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
