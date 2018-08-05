import './jquery-2.0.0.min.js';
import './bootstrap.bundle.min.js';
import './script.js';
import '../plugins/fancybox/fancybox.min.js';
import '../plugins/owlcarousel/owl.carousel.min.js';

import '../fonts/fontawesome/css/fontawesome-all.min.css';
import '../css/bootstrap-custom.css';
import '../css/uikit.css';
import '../plugins/fancybox/fancybox.min.css';
import '../plugins/owlcarousel/assets/owl.carousel.min.css';
import '../plugins/owlcarousel/assets/owl.theme.default.css';

import '../images/dummy.png';

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app.js";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
