"use client";

import { Tabs } from "flowbite-react";

export default function DefaultTabs() {
    return (
        <div className="w-11/12 m-auto text-center">
            <div data-aos="zoom-in" data-aos-duration="3000">
                <h1 className="font-semibold py-5">Tentang PPQ Al Mahir</h1>
                <Tabs.Group aria-label="Default tabs" style="default" className="m-auto">
                    <Tabs.Item active title="TPA Al Mahir">
                        <div className="about py-16 md:py-8" id="about">
                            <div className="bg-slate-300 w-full m-auto text-center p-2 rounded-2xl ring-4 ring-slate-200 shadow-2xl shadow-slate-300">
                                <h1 className="font-semibold py-5">TPA PPQ Al Mahir</h1>
                                <p className="pb-6 w-full lg:w-full m-auto md:w-full 2xl:w-11/12">
                                    TPA PPQ Al-Mahir adalah salah satu program yang diselenggarakan oleh PPQ (Pusat Pendidikan Al-Quran) Al-Mahir yang berada dibawah naungan yayasan Al-Mahir At-Tarbawiyyah. TPA PPQ Al-Mahir beralamat di Jl. Adi Sumarmo Rt. 01 / Rw. 7 Gawanan, Colomadu, Karanganyar.
                                    <br />
                                    <br />
                                    Adanya program ini adalah sebagai wadah pengajaran dan pendidikan Al-Quran yang akan membekali anak-anak dan remaja (usia 6-15 tahun) agar memiliki kemampuan membaca dan menghapal Al-Quran sesuai kaidah tajwid dengan bimbingan secara bertahap dan berkelanjutan dengan metode BBQ Karimah. Selain pendidikan dan pengajaran Al-Quran, para santri juga akan dibekali dengan ilmu-ilmu syari sehingga akan terwujud generasi qurani yang berwawasan keislaman, beraqidah shahihah dan berakhlaqul karimah.
                                </p>
                                <a href="./../assets/profil-tpa.pdf" target="blank">
                                    <button className="px-5 py-3 bg-slate-200 rounded-xl">Lihat Selengkapnya</button>
                                </a>
                            </div>
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="PPQIT Al Mahir">
                        <div className="about py-16 md:py-8" id="about">
                            <div data-aos="zoom-in" data-aos-duration="3000">
                                <div className="bg-slate-300 w-full m-auto text-center p-2 rounded-2xl ring-4 ring-slate-200 shadow-2xl shadow-slate-300">
                                    <h1 className="font-semibold py-5">PPQIT Al Mahir</h1>
                                    <p className="pb-6 w-full lg:w-full m-auto md:w-full 2xl:w-11/12">
                                        Yayasan Almahir Attarbawiyyah Surakarta hadir di tengah Ummat untuk berkiprah pada bidang pendidikan Islam dan bidang sosial. Lebih khusus dalam bidang pendidikan Islam melihat kebutuhan masyarakat akan SDM yang bertakwa, berakhlak, hafizh al-Qur’an, dan menguasai ilmu Tekhnologi (IT).
                                        <br />
                                        <br />
                                        Untuk itu sangat penting kebutuhan ini untuk direalisasikan, bentuk realisasi tersebut adalah sekolah Boarding School dengan nama Pondok Pesantren Qur’an dan IT Al-Mahir (PPQITA). Sebuah sekolah dengan design perpaduan kurikulum Ilmu Diniyyah, Umum, dan IT.
                                        <br />
                                        <br />
                                        Dalam proses pendidikan, kami selalu mengupayakan kolaborasi ilmu teori dan praktek, hal ini penting untuk mewujudkan SDM yang benar-benar unggul dan profesional. Untuk itu, ditengah proses pendidikan peserta didik diamanahi beberapa project untuk mengasah keterampilannya, terlebih pada bidang keilmuan IT. Selain itu, peserta didik sejak awal dibiasakan untuk penerapan bilingual, Arabic dan English. Harapan besar dari output PPQITA adalah SDM yang memahami dengan baik Ilmu Diniyyah, berwawasan luas, dan ahli dibidang IT.
                                    </p>
                                    <a href="https://ppqita.com/profile/" target="blank">
                                        <button className="px-5 py-3 bg-slate-200 rounded-xl">Lihat Selengkapnya</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Tabs.Item>
                </Tabs.Group>
            </div>
        </div>
    );
}
