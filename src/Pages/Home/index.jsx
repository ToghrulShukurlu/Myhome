import React from "react";
import "./style.scss";
import img from "../../assets/images/image_1.jpg";
import ic1 from "../../assets/icons/Icon (8).svg";
import ic2 from "../../assets/icons/Icon (9).svg";
import ic3 from "../../assets/icons/Icon (10).svg";
import ic4 from "../../assets/icons/Icon (11).svg";
import { stuff } from "../../Data/data"

const Home = () => {
  return (
    <div>
      <div className="second">
        <h2>Avtomatik mənzil qiymətləndirici!</h2>
        <div className="line">_____________</div>
        <p>
          Ədalətli və dəqiq qiymətləndirmə ilə daha asan torpaq seçimi edin.
        </p>
        <button>Görüş tələb et</button>

        <img src={img} alt="" />
      </div>

      <section className="first">
        <h3>Xidmətlərimiz</h3>
        <div className="banners">
          <div className="one" style={{ backgroundColor: "#4a43bc" }}>
            <div className="icon">
              <img src={ic1} alt="" />
            </div>
            <p>Avtomatlaşdırılmış mənzil qiymətləndirici</p>
            <span>
              Satmaq istədiyiniz mənzilin real qiymətinin bir neçə saniyyə
              ərzində avtomatlaşdırılmış MyHomeAz platfoması ilə müəyyən etmək
              mümkündür
            </span>
          </div>
          <div className="one" style={{ backgroundColor: "#d77d00" }}>
            <div className="icon">
              <img src={ic2} alt="" />
            </div>
            <p>Tikinti xərcləri kalkulyatoru</p>
            <span>
              Ev tikmək və ya təmir etmək üçün nə qədər vəsait lazıim olacağını
              sadəcə bir klik ilə əldə etmək mümkündür. Siz yalnız mənzilinizin
              ölçülərini əlavə edərək tikmək və ya təmir etmək istədiyiniz
              mənzil üçün nə qədər vəsait lazim olacağını hesablaya bilərsiniz.
            </span>
          </div>
          <div className="one" style={{ backgroundColor: "#bc344f" }}>
            <div className="icon">
              <img src={ic3} alt="" />
            </div>
            <p>Süni intellekt ilə mənzil təmiri</p>
            <span>
              Mənzilinizə uyğun dizaynın tapılması heç vaxt bu qədər asan
              olmamışdır. Sadəcə mənzilinizin şəkillərini əlavə edərək “Süni
              intellekt intellekt” vasitəsi ilə yeni mənzil dizayn töəvsiyyələri
              ilə tanış ola bilərsiniz.
            </span>
          </div>
          <div className="one" style={{ backgroundColor: "#39844c" }}>
            <div className="icon">
              <img src={ic4} alt="" />
            </div>
            <p>Əmlak İnvestisiyası</p>
            <span>
              Almaq istədiyiniz evin bir neçə ildən sonrakı qiymətinin əldə
              edilməsi üçün sadəcə 1 dəqiqə kifayətdir. Süni intellektintillekt
              vasitəsi ilə mənzilinizin son 10 ildəki qiytməti əsasında və
              infilyasiya və digər iqtisadi göstəricilər nəzərə alınmaqla
              mənzilinizin 5 il sonra nə qədər dəyər qazanacağını hesablaya
              bilərsiniz.
            </span>
          </div>
        </div>
      </section>

      <section className="about-company">
        <h1>Şirkət haqqında</h1>
        <p>
          MyHomeAz  platformu mənzil bazarında mənzilinizi sadəcə bir neçə
          saniyə ərzində rahat və dəqiq qiymətləndirməyə imkan verir. Belə ki,
          bu platforma mənzil bazarında olan bütün mənzil qiymətlərini süni
          intillekt vasitəsi ilə təhlil edərək mənzilinizin real qiymətinin
          müəyyən edilməsinə imkan verir
        </p>

        <ul>
          <li>
            📊 <span>Statistik Analiz</span>: Mənzilin yerləşməsi,
            infrastruktur, təyinatı və digər əhəmiyyətli faktorları əhatə edən
            ətraflı bir statistik təhlil ilə sizin üçün ən optimal qiyməti
            tapırıq.
          </li>
          <li>
            📈 <span> Trend İncələməsi</span>: Əmlak bazarının son trendlərini
            izləyir və bu məlumatı qiymətləndirilmə prosesinə daxil edirik. Bu,
            mənzilinizi daha dəqiq dəyərləndirməyə kömək edir.{" "}
          </li>
          <li>
            📱 <span>İstifadəsi Asan İnterfeys</span>: Bizim platformamız,
            tərkibi asan və istifadəsi rahat bir interfeysə sahibdir, bu da
            sizin əmlakın qiymətləndirilmə prosesində asanlıqla iştirak etmənizi
            təmin edir.  
          </li>
        </ul>
      </section>

      <section className="members">
        <h2 className="heading">Bizim komanda</h2>
        <div className="stuff-part">
        {stuff.map((item, index) => (
            <div id="stuff">
              <img src={item.photo} alt="" />
              <div className="box-text">
                <span>{item.name}</span>
                <h6>{item.job}</h6>
              </div>
          </div>
        ))}
        </div>
      </section>

      <section className="contact-us">
        <h1>Bizimlə əlaqə qurmaq istəyirsən?</h1>
        <p>
          Öz mobil nömrənizi qeyd etdikdən 3 iş günündə sizinlə əlaqə
          saxlayacağıq!
        </p>
        <button>Bizimlə əlaqə</button>
      </section>
    </div>
  );
};

export default Home;
