import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "router";
import GlobalStyle from "styles/GlobalStyle";
import themes from "styles/themes";
function App() {
    return (
        <RecoilRoot>
            <ThemeProvider theme={themes}>
                <GlobalStyle />
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </ThemeProvider>
        </RecoilRoot>
    );
}

export default App;
