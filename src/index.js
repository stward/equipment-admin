import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {importantPlugin} from './lib/jss-extras'
import preset from 'jss-preset-default'
import {jss} from 'react-jss'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './index.css';

injectTapEventPlugin()

const jssPlugins = preset()
jssPlugins.plugins.push(importantPlugin)
jss.setup(jssPlugins)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
