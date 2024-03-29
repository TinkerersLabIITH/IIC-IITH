import { Fragment } from "react"
import styles from "./App.module.css";
import AnnualReport from "./Components/AnnualReport/AnnualReport";
import Mom from "./Components/Mom/Mom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import IIC_Council from "./Components/IIC_Council/IIC_Council";
import Major_Functions from "./Components/Major_Functions/Major_Functions";
import IandE from "./Components/IandE/IandE";
import CoverImage from "./Components/Starter/startImg";
import IntroductionSection from "./Components/Intro/Introduction";
import ImageCarousel from "./Components/Imageslider/ImageSlider";
const HomePage=()=>{
    return(
   <Fragment>
        <div className={styles.App} >
        <Header />
        <CoverImage/>
        <IntroductionSection/>
        <ImageCarousel/>
        <Major_Functions />
        <IandE />
        <IIC_Council />
        <Mom />
        <AnnualReport />
        <Footer />
        </div>
        </Fragment>
    )
}
export default HomePage
