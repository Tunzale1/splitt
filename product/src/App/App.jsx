import React, { Component } from "react";
import AppTitle from "./AppTitle";
import AppDescription from "./AppDescription";

class App extends Component {
 render() {
   return (
     <div className="app">
       <AppTitle />
       <AppDescription />
     </div>
   );
 }
}
export default App;