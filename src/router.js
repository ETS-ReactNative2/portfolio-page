
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './Home'
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';

export default (
  <Switch>
    <Route component={ Home }       path="/" key="home" exact  />
    <Route component={ Portfolio }  path="/portfolio" key="portfolio"  />
    <Route component={ Skills }   path="/skills" key="skills" />
    <Route component={ Contact }  path="/contact" key="contact"  />
  </Switch>
)
