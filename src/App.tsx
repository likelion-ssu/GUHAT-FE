import Header from "@components/Header";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "@styles/GlobalStyle";
import themes from "@styles/themes";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import Test from "./pages/Test";

const queryClient = new QueryClient();

function App() {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={themes}>
                    <GlobalStyle />
                    <BrowserRouter>
                        <Header title={"GUHAT"} />
                        <Routes>
                            <Route path="/" element={<Test />} />
                        </Routes>

                        {/* <Router /> */}
                    </BrowserRouter>
                </ThemeProvider>
            </QueryClientProvider>
        </RecoilRoot>
    );
}

export default App;
