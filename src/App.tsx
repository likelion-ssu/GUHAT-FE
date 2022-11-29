import Header from "@components/Header";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "@styles/GlobalStyle";
import themes from "@styles/themes";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./router";
function App() {
    return (
        <RecoilRoot>
            <ThemeProvider theme={themes}>
                <GlobalStyle />
                <BrowserRouter>
                    <Header title={"GUHAT"} />
                    <Router />
                </BrowserRouter>
            </ThemeProvider>
        </RecoilRoot>
    );
}

export default App;
