import MainLayout from "@components/Layout/MainLayout";
import Banner from "@domain/home/Banner/Banner";
import MyInfoLayout from "@domain/home/Layout/MyInfoLayout";
import RecruitingLayout from "../domain/home/Layout/RecruitingLayout";

const Home = () => {
    return (
        <>
            <MainLayout>
                <Banner />
                <MyInfoLayout />
                <div style={{ width: "100%", height: "10vh" }}></div>
                <RecruitingLayout />
                <div style={{ width: "100%", height: "10vh" }}></div>
            </MainLayout>
        </>
    );
};

export default Home;
