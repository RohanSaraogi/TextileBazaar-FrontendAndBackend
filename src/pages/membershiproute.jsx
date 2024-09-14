import react from "react"
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import MembershipSection from "../components/Route/Membership/membership";

const Membershiproute = () =>{
return(
    <>
    <Header/>
    <div className="mt-10">
<span className="mt-5 mb-5 text-3xl items-center justify-center flex font-bold">Take a Premium plan for great Experience </span>
    <MembershipSection />
    </div>
    <Footer/>
    </>
);
}
export default Membershiproute;