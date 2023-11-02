import Navbar from '../Components/Navbar/Navbar'
import WhatsShopEase from '../Components/WhatsShopEase'
const Hero = () => {
    return (
        <>
            <div className="flex flex-row">
                <Navbar />
                <div>
                    <WhatsShopEase />
                </div>
            </div>
        </>)
}

export default Hero