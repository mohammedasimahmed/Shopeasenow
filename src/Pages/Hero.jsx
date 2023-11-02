import Navbar from '../Components/Navbar/Navbar'
import WhatsShopEase from '../Components/WhatsShopEase'
const Hero = () => {
    return (
        <>
            <div className="flex">
                <Navbar />
                <div className='flex justify-center items-center w-full h-full'>
                    <WhatsShopEase />
                </div>
            </div>
        </>)
}

export default Hero