'use client';

import 'remixicon/fonts/remixicon.css'
import Img2 from './../assets/ppq-w.png'
import Bsi from './../assets/Bank_Syariah_Indonesia.svg.png'
import './../css/style.css'

export default function Footer() {
    return (
        <div data-aos="zoom-in" data-aos-duration="2000">
            <footer className="bg-white dark:bg-gray-900 w-11/12 m-auto mt-20" id='contact'>
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between md:flex-col gap-6 xl:flex-row xl:flex">
                        <div className="mb-6 md:mb-0 md:w-10/12 md:m-auto xl:m-0">
                            <div className="flex flex-col gap-5">
                                <img src={Img2} className="w-56 md:m-auto md:pt-5 xl:m-0 xl:pt-0" alt="" />
                                <p className='lg:w-full text-justify lg:text-center md:text-center xl:text-left xl:w-11/12'>Yayasan Almahir Attarbawiyyah Surakarta hadir di tengah Ummat untuk berkiprah pada bidang pendidikan Islam dan bidang sosial. Lebih khusus dalam bidang pendidikan Islam melihat kebutuhan masyarakat akan SDM yang bertakwa, berakhlakul karimah, berakidah shahihah, hafizh al-Qur’an, dan menguasai ilmu Tekhnologi (IT)</p>
                            </div>
                        </div>
                        <div className="grid gap-8 text-center sm:gap-6 sm:grid-cols-3 md:grid-cols-1 md:text-center lg:flex lg:m-auto xl:text-left xl:w-full">
                            <div className='md:flex md:justify-center md:gap-16 lg:flex-col xl:gap-6'>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white xl:mb-4">Informasi & Pendaftaran</h2>
                                    <ul className="text-gray-600 dark:text-gray-400 font-medium mb-5 lg:m-0">
                                        <li className="mb-4">
                                            <p>Ikhwan</p>
                                            <a href="https://wa.me/62895363423453" target='blank' className="hover:underline">0895-3634-23453</a>
                                        </li>
                                        <li>
                                            <p>Akhawat</p>
                                            <a href="https://wa.me/6281548751407" target='blank' className="hover:underline">0815-4875-1407</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">PPQIT Al Mahir</h2>
                                    <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <p>Kunjungi Website PPQIT Al Mahir</p>
                                            <a href="https://ppqita.com/" target='blank' className="hover:underline">https://ppqita.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='md:flex md:justify-center md:m-auto md:gap-5 xl:my-0'>
                                <div className='pb-10'>
                                    <h2 className="mb-1 text-sm font-semibold text-gray-900 uppercase dark:text-white xl:mb-6 md:pb-5">Donasi</h2>
                                    <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <img src={Bsi} alt="" className='lg:w-36 lg:pb-5 md:w-40 md:pb-5 md:m-auto w-52 pb-4 m-auto 2xl:m-0'/>
                                            <h3>6565698893</h3>
                                            <p>Yayasan Almahir Attarbawiyyah</p>
                                        </li>
                                        <li>
                                            <p>Konfirmasi Donasi</p>
                                            <a href="https://wa.me/6281232104431" target='blank' className="hover:underline">0812-3210-4431</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='m-auto md:pb-6 xl:my-0'>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-center lg:text-left">Lokasi</h2>
                                    <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.3768798225!2d110.75946661477657!3d-7.5338094945664205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a147e46eda873%3A0xd2f585378cd3f5e3!2sPPQ%20AL-MAHIR!5e0!3m2!1sen!2sid!4v1687243537455!5m2!1sen!2sid" className='m-auto maps w-full lg:w-full mb-2 rounded-xl md:w-52' style={{ border: "0" }}></iframe>
                                            <p className='text-center lg:text-left md:w-60'>Jl. Adi Sumarmo Rt 01/07 Gawanan, Colomadu, Karanganyar, Jawa Tengah 57175</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between text-center">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; 2023 PPQ Al Mahir. All Rights Reserved
                        </span>
                        <div className="flex mt-4 space-x-6 justify-center sm:mt-0">
                            <a href="https://www.instagram.com/ppqalmahir/" target='blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="https://www.facebook.com/ppqalmahir" target='blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <i className="ri-facebook-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}