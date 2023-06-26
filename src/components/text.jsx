"use client";

import { Tabs } from "flowbite-react";

export default function DefaultTabs() {
    return (
        <div className="w-11/12 m-auto text-center py-6">
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
                                <a href="https://doc-14-94-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/5q1kfchkaomos0fvkb4gh55fvfp9j8ak/8i5eurgt9ijavt0g87n76a85el5vl0eh/1687765725000/3/104520605745824761691/APznzabNbskzOQBOe_ZxuP4OUoyVH3eqN8q6ltEtxSck8HzRMCivX8U35ClPBH3LeYFMRi8-VHmR_0B42q-pZIw6TMDEfHwPS2UWKYRBcDEAvpoLjA0MpxmlRHrvR7D4oL9gpwVrDt8__MT3JFwau9-T8mn2ITr9RyUxKh97fhRrTQnb1UArbALhgjBE-bq9NO2VbOvFnjCk_jpbR8Nw0GvMJHPDFp4U7wlwAUWw4vx2NRCW60FvMLN0lUqmRgfIK8CaL6c77vSQNUFQhp0KlvPcOxtZd2J3LpkjJ6QSSt_ZZ3-HgoVqrnZW1JtvKM6vabklMqb3CalURKl6Ji5aFuZ-XTHqlPk3D7Wm-63h_nHW_Cguwb3nvJ-yHAl_kp_90KZE-pnn7x88n--t-BZArbE8cTWOOETOzg==?authuser=0&nonce=dnmtm7cg1dp8e&user=104520605745824761691&hash=88btpqu53l9dsb7r5fhe54s6v579aado" target="blank">
                                    <button className="px-5 py-3 mb-5 bg-slate-200 rounded-xl">Lihat Selengkapnya</button>
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
                                        <button className="px-5 py-3 mb-5 bg-slate-200 rounded-xl">Lihat Selengkapnya</button>
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
