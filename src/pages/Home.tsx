import MainLayout from "@components/Layout/MainLayout";
import Banner from "@domain/home/Banner/Banner";
import MyInfoLayout from "@domain/home/Layout/MyInfoLayout";
import RecruitingLayout from "../domain/home/Layout/RecruitingLayout";
import ReviewLayout from "../domain/home/Layout/ReviewLayout";

const Home = () => {
    return (
        <>
            <MainLayout>
                <Banner />
                <MyInfoLayout />
                <div style={{ width: "100%", height: "7vh" }}></div>
                <RecruitingLayout />
                <div style={{ width: "100%", height: "5vh" }}></div>
                <ReviewLayout />
                <div style={{ width: "100%", height: "10vh" }}></div>
            </MainLayout>
        </>
    );
};

export default Home;
