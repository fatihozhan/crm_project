import React, { Component } from "react";
import * as ReactDOMClient from "react-dom/client";

class Index extends Component {
    render() {
        return <div>Merhaba</div>;
    }
}
ReactDOMClient.createRoot(document.getElementById("index")).render(<Index />);
