import { useState, useEffect } from "react";
import { Hobi } from "../components/Hobi";
import { Container, Row, Col } from "react-bootstrap";
import healtylogo from "../assets/img/healty/healty.png";
import healty2 from "../assets/img/healty/healty2.jpg";
import healty3 from "../assets/img/healty/healty3.jpg";
import healty4 from "../assets/img/healty/healty4.jpg";
import healty5 from "../assets/img/healty/healty5.jpg";
import healty6 from "../assets/img/healty/healty6.jpg";



import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Content = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="content" id="content">
      <Container>
        <div className="aligh-items-center text-center">
          <Col xs={4} md={4} xl={12}>
            <h1 className="txt-rotate text-chocolate">MENTAL HEALTD</h1>

          </Col>
        </div>

        <Row className="aligh-items-center">
          <Col xs={12} md={4} xl={4}>
            <img src={healtylogo} alt="Header Img"
            />
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? " animate__zoomIn" : ""}>
                </div>}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={8} xl={8}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="txt-rotate">Apa itu kesehatan Mental?</h2>
                  <p> Kesehatan mental mengacu pada kondisi kejiwaan dan emosional seseorang. </p>
                  <p>Ini mencakup perasaan, pikiran, dan perilaku yang mempengaruhi bagaimana individu berfungsi dalam kehidupan sehari-hari mereka.</p>
                  <p>Kesehatan mental yang baik penting untuk kesejahteraan secara keseluruhan, karena dapat mempengaruhi cara seseorang berinteraksi dengan orang lain, mengelola stres, membuat keputusan, dan merasakan kebahagiaan.</p>
                  <p > Perawatan yang tepat dan dukungan sosial yang memadai dapat membantu individu dalam menjaga kesehatan mental yang baik, dan meningkatkan kemampuan mereka untuk mengatasi tantangan dan menghadapi kesulitan dengan cara yang sehat dan adaptif. </p>


                </div>}
            </TrackVisibility>
          </Col>
        </Row>

      </Container>

      <Container id="food">
        <Row className="aligh-items-center text-center">
          <Col xs={4} md={4} xl={12}>
            <h1 className="txt-rotate" style={{ mt: '40px', textDecorationColor: '#000000' }}
            >MAINTAINING YOUR MENTAL HEALTH</h1>
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="txt-rotate">OLAHRAGA YANG TERATUR</h2>
                  <p> Olahraga teratur telah terbukti efektif dalam meningkatkan suasana hati. Saat Anda berolahraga, tubuh mengeluarkan endorfin, yaitu hormon yang meningkatkan perasaan bahagia dan mengurangi stres. </p>
                  <p>Mengurangi stres dan kecemasan: Aktivitas fisik dapat berfungsi sebagai alat yang efektif untuk mengurangi stres dan kecemasan. </p>
                  <p>Olahraga teratur dapat membantu meningkatkan kualitas tidur. Kegiatan fisik yang cukup membantu mengatur ritme sirkadian tubuh, mempromosikan tidur yang lebih nyenyak dan teratur. Tidur yang cukup dan berkualitas penting untuk pemulihan mental dan emosional, serta memperbaiki fungsi kognitif</p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={4} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={healty2} alt="Olahraga Img"
                    style={{ borderRadius: "10% 40% 20%" }}

                  />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>


      <Container id="food">
        <Row className="aligh-items-center">
          <Col xs={12} md={4} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={healty5} alt="Musik Img"
                    style={{ borderRadius: "10% 40% 20%", width: "70%", position: "center" }}

                  />
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={8} xl={8}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="txt-rotate">Mendengarkan Musik</h2>

                  <p>Mendengarkan musik yang menenangkan dapat membantu meredakan stres dan kecemasan. Musik memiliki kekuatan untuk mempengaruhi suasana hati dan mengalihkan perhatian dari pikiran yang mengkhawatirkan. </p>
                  <p>Mendengarkan musik saat bekerja atau belajar dapat membantu meningkatkan fokus dan konsentrasi.</p>
                  <p>  Musik yang sesuai dapat membantu menciptakan lingkungan yang menenangkan dan membantu mengurangi gangguan eksternal.</p>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>



      <Container id="food">
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="txt-rotate">Mengonsumsi Makanan Sehat</h2>

                  <p>Dengan mengonsumsi makanan sehat yang kaya nutrisi seperti buah-buahan, sayuran, biji-bijian, dan protein dapat membantu menjaga keseimbangan kimia otak dan stabilisasi mood</p>
                  <p>Mengadopsi pola makan sehat juga berdampak positif pada kebiasaan hidup secara keseluruhan</p>
                  <p>Hal ini dapat mendorong pola pikir yang lebih sadar akan kesehatan dan meningkatkan kepercayaan diri dalam menjaga gaya hidup sehat secara holistik. Perubahan positif ini pada kebiasaan hidup dapat memberikan umpan balik positif yang meningkatkan kesejahteraan mental Anda.</p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={4} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={healty4} alt="Makanan Sehat Img"
                    style={{ borderRadius: "50%" }}

                  />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>


      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={4} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={healty6} alt="Makanan Sehat Img"
                    style={{ borderRadius: "20% 10%" }}

                  />
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={8} xl={8}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="txt-rotate">lingkungan Sehat</h2>
                  <p>Memiliki lingkungan teman dan keluarga yang positif memberikan dukungan emosional yang penting dalam menghadapi tantangan hidup. </p>
                  <p>Interaksi sosial yang sehat dan positif dengan teman dan keluarga dapat memberikan rasa koneksi, kebersamaan, dan rasa pentingnya. </p>
                  <p>Lingkungan teman dan keluarga yang positif dapat menjadi sumber inspirasi dan motivasi dalam mencapai tujuan dan menghadapi tantangan hidup. Mereka dapat memberikan dorongan, memberikan perspektif baru, dan memotivasi Anda untuk meraih potensi terbaik Anda. </p>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <Hobi />


      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={4} xl={5}>
            {/* <img src={Images.healty2} className='w-[100px]' alt="app__logo" /> */}
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={healty3} alt="Header Img"
                    style={{ borderRadius: "40% 20%" }}
                  />

                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={8} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="txt-rotate">JAM TIDUR YANG TERATUR</h2>
                  <p>
                    Keseimbangan Emosional: Jam tidur teratur membantu menjaga keseimbangan emosional, mengurangi risiko depresi dan kecemasan, serta memperkuat stabilitas mental.</p>
                  <p>Konsentrasi dan Memori: Tidur yang cukup dan teratur meningkatkan kemampuan konsentrasi, daya ingat, dan pemrosesan informasi, membantu meningkatkan produktivitas dan kreativitas.
                  </p>
                  <p>Pengurangan Stres dan Regulasi Hormon: Tidur yang cukup memungkinkan otak untuk memulihkan diri, mengurangi stres, dan mengatur produksi hormon yang berperan dalam pengaturan suasana hati dan kesejahteraan mental secara keseluruhan.</p>

                </div>}
            </TrackVisibility>
          </Col>
        </Row>

      </Container>

    </section >
  )
}










