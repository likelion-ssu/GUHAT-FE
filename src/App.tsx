import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "@styles/GlobalStyle";
import themes from "@styles/themes";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./router";
function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
