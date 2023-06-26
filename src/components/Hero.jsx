// import { Button } from 'flowbite-react'
import './../css/style.css'
import Navigation from './Navbar'
import './../css/dekstop.css'
import Img from './../assets/hero.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Hero () {
    return (
        <div>
            <Navigation/>
            <div className="hero lg:py-20 xl:px-20">
                <div className="hero-text text-center lg:text-left py-20 lg:p-0 w-11/12 lg:w-5/12 m-auto lg:mr-40 xl:w-7/12 2xl:w-5/12 text-white">
                    <div data-aos="zoom-in" data-aos-duration="1500">
                        <h3 className="text-sm mb-2 lg:pb-3">YAYASAN AL MAHIR ATTARBAWIYYAH SURAKARTA</h3>
                        <h1 className="font-bold text-3xl lg:text-6xl w-72 lg:w-full lg:pr-10 m-auto mb-1 lg:pb-6">Pusat Pendidikan Al-Quran Al-Mahir</h1>
                        <p className='mb-6'>Mendidik Santri Berbakat Dengan Berlandaskan Al-Quran Dan Sunnah</p>
                        <a href='#contact'>
                            <button className='m-auto mb-2 bg-blue-600 hover:bg-slate-50 hover:text-blue-600 focus:ring-transparent transition-all duration-500 w-40 p-3 rounded-xl'>
                                <h3 className='text-md font-bold'>Daftar</h3>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="img-hero lg:m-auto">
                    <div data-aos="fade-left" data-aos-duration="1500">
                        <img src={Img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}