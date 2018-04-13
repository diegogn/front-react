import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {Search} from './components/Search';
import {getWorks} from './data'
import { WorkResponse } from './interfaces/index';
import {WorkForm} from './components/WorkForm'


ReactDOM.render(
    <Search/>,
    document.getElementById("search")
);

ReactDOM.render(
    <WorkForm/>,
    document.getElementById("workForm")
);
