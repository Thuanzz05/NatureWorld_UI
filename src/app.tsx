import { Link, NavLink, Route, Routes } from "react-router-dom";

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="NatureWorld, trang chủ">
      <span className="brand-name"><span>Nature</span><b>World</b></span>
      <span className="brand-caption">NATURE WORLD GROUP JSC.</span>
    </Link>
  );
}

function Header() {
  return (
    <header className="site-header">
      <Brand />
      <nav className="main-nav" aria-label="Điều hướng chính">
        <NavLink to="/" end>Trang chủ</NavLink>
        <NavLink to="/gioi-thieu">Giới thiệu</NavLink>
      </nav>
      <a className="header-contact" href="tel:+84969924279">
        Kết nối với NWG <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Brand />
          <p className="footer-summary">Kết nối nguồn lực cho một tương lai phát triển bền vững.</p>
        </div>
        <div className="footer-contact">
          <span className="eyebrow">Liên hệ</span>
          <a href="tel:+84969924279">(+84) 969 924 279</a>
          <a href="https://www.gtisd.com" target="_blank" rel="noreferrer">www.gtisd.com</a>
          <span>24 Lý Thường Kiệt, Cửa Nam, Hà Nội</span>
        </div>
        <div className="footer-navigation">
          <span className="eyebrow">Khám phá</span>
          <Link to="/">Trang chủ</Link>
          <Link to="/gioi-thieu">Về NatureWorld</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© Nature World Group JSC.</span>
        <span>Công nghệ xanh · Đổi mới sáng tạo · Phát triển bền vững</span>
      </div>
    </footer>
  );
}

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

function HomePage() {
  return (
    <main>
      <section className="home-hero page-gutter">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> Công nghệ xanh · Đổi mới · Bền vững</p>
          <h1>Chuyển đổi xanh <em>bắt đầu từ hôm nay.</em></h1>
          <p className="hero-lead">
            NWG kết nối chuyên gia, công nghệ và nguồn lực để đưa phát triển bền vững vào thực tiễn doanh nghiệp.
          </p>
          <Link className="text-link" to="/gioi-thieu">Khám phá NatureWorld <Arrow /></Link>
          <div className="hero-meta">
            <span>Hà Nội, Việt Nam</span>
            <span>01 / Về chúng tôi</span>
          </div>
        </div>
        <figure className="hero-visual">
          <img src="/images/technology-cover.png" alt="Hai chuyên gia trao đổi bên máy tính bảng và báo cáo dữ liệu." />
          <figcaption>
            <span>Nature World Group</span>
            <span>Công nghệ xanh, đổi mới sáng tạo và phát triển bền vững</span>
          </figcaption>
        </figure>
      </section>

      <section className="mission-band">
        <div className="mission-inner">
          <p className="eyebrow eyebrow-light">Vai trò của NWG</p>
          <h2>Mở lối cho những kết nối tạo nên <span>chuyển đổi bền vững.</span></h2>
          <p>
            Từ doanh nghiệp và cơ quan quản lý đến nhà khoa học, nhà đầu tư và đối tác quốc tế, NWG xây dựng mạng lưới cùng hành động vì phát triển bền vững.
          </p>
        </div>
        <span className="mission-index" aria-hidden="true">NWG / 01</span>
      </section>

      <section className="services-section page-gutter" id="dich-vu">
        <div className="services-intro">
          <p className="eyebrow">Năng lực cốt lõi</p>
          <h2>Từ định hướng ESG đến giải pháp tại hiện trường.</h2>
          <p>Đồng hành cùng doanh nghiệp qua từng bước chuyển đổi, từ chiến lược đến triển khai.</p>
        </div>
        <div className="service-list">
          <Link className="service-row" to="/gioi-thieu#esg">
            <span className="service-number">01</span>
            <h3>Chiến lược ESG<br />và đào tạo</h3>
            <p>Tư vấn lộ trình, kiểm toán, chứng nhận và đào tạo ESG gắn với mục tiêu phát triển của doanh nghiệp.</p>
            <Arrow />
          </Link>
          <Link className="service-row" to="/gioi-thieu#cong-nghe">
            <span className="service-number">02</span>
            <h3>Công nghệ xanh<br />và Net Zero</h3>
            <p>Kiểm kê phát thải, tư vấn giảm phát thải, chuyển dịch năng lượng và giải pháp công nghệ phù hợp.</p>
            <Arrow />
          </Link>
          <Link className="service-row" to="/gioi-thieu#he-sinh-thai">
            <span className="service-number">03</span>
            <h3>Hệ sinh thái<br />hợp tác</h3>
            <p>Kết nối doanh nghiệp, chuyên gia, tổ chức quốc tế và nguồn lực cho phát triển bền vững.</p>
            <Arrow />
          </Link>
        </div>
      </section>

      <section className="field-section page-gutter" id="cong-nghe">
        <figure className="field-image">
          <img src="/images/technology-in-practice.png" alt="Các kỹ thuật viên kiểm tra thiết bị công nghiệp tại hiện trường." />
        </figure>
        <div className="field-copy">
          <p className="eyebrow">Từ tư vấn đến triển khai</p>
          <h2>Giải pháp phải phù hợp với điều kiện thực tế.</h2>
          <p>
            Mỗi doanh nghiệp có đặc thù riêng. NWG kết nối chuyên gia vận hành, nhà sản xuất và nhà cung cấp công nghệ để đề xuất hướng đi phù hợp với hiện trạng, năng lực tài chính và lộ trình giảm phát thải.
          </p>
          <Link className="text-link" to="/gioi-thieu#cong-nghe">Tìm hiểu cách chúng tôi làm việc <Arrow /></Link>
        </div>
      </section>

      <section className="network-section page-gutter" id="he-sinh-thai">
        <figure className="network-image">
          <img src="/images/working-together.png" alt="Đại diện các tổ chức gặp mặt trong cuộc họp hợp tác quốc tế." />
        </figure>
        <div className="network-copy">
          <p className="eyebrow">Một mạng lưới cùng hành động</p>
          <h2>Kết nối trong nước. Hợp tác với thế giới.</h2>
          <p>NWG là đối tác được ủy quyền của The ESG Institute tại Việt Nam, kết nối với mạng lưới chuyên gia ESG ở hơn 70 quốc gia.</p>
          <Link className="text-link" to="/gioi-thieu#he-sinh-thai">Tìm hiểu về mạng lưới <Arrow /></Link>
        </div>
      </section>

      <section className="closing-band page-gutter">
        <p className="eyebrow eyebrow-light">Cùng bắt đầu</p>
        <h2>Hãy đưa mục tiêu bền vững vào hành động.</h2>
        <a className="light-link" href="tel:+84969924279">Trao đổi cùng NWG <Arrow /></a>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <section className="about-hero page-gutter">
        <div className="about-hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> Về NatureWorld</p>
          <h1>Kết nối để chuyển đổi xanh tạo tác động <em>thực chất.</em></h1>
          <p>
            Là đơn vị tiên phong trong chuyển đổi xanh, NWG kết nối chuyên gia, tổ chức, doanh nghiệp và nhà đầu tư cùng hướng tới phát triển bền vững.
          </p>
        </div>
        <figure className="about-hero-visual">
          <img src="/images/about-team.png" alt="Chuyên gia và đại biểu tham dự một sự kiện kết nối ESG." />
          <figcaption>Con người · Chuyên môn · Hợp tác</figcaption>
        </figure>
      </section>

      <section className="about-story page-gutter">
        <div className="story-label"><span>01</span><p>Chúng tôi tin vào</p></div>
        <div className="story-content">
          <h2>Phát triển bền vững cần sự tham gia của nhiều bên.</h2>
          <p>
            NWG hoạt động theo mô hình mạng lưới mở, thúc đẩy đổi mới và kết nối các giải pháp kinh tế, môi trường, xã hội. Chúng tôi đưa tri thức quốc tế đến gần hơn với nhu cầu thực tế tại Việt Nam.
          </p>
          <p>
            NWG cũng phát triển các chương trình đào tạo và hội thảo về Net Zero, ứng phó biến đổi khí hậu, đồng thời cung cấp nền tảng ESG định hướng phát triển bền vững.
          </p>
        </div>
      </section>

      <section className="values-band">
        <div className="values-inner page-gutter">
          <div className="values-heading">
            <p className="eyebrow eyebrow-light">Nguyên tắc hoạt động</p>
            <h2>Giá trị cốt lõi</h2>
          </div>
          <div className="value-list">
            <div className="value-row"><span>01</span><h3>Bền vững</h3><p>Hài hòa tăng trưởng kinh tế, bảo vệ môi trường và công bằng xã hội.</p></div>
            <div className="value-row"><span>02</span><h3>Đổi mới</h3><p>Ứng dụng công nghệ và tri thức mới để mở rộng khả năng hành động.</p></div>
            <div className="value-row"><span>03</span><h3>Minh bạch</h3><p>Đặt thông tin rõ ràng và kết quả có thể đánh giá vào trọng tâm.</p></div>
            <div className="value-row"><span>04</span><h3>Trách nhiệm</h3><p>Gắn cam kết với trách nhiệm đối với cộng đồng và các thế hệ tương lai.</p></div>
          </div>
        </div>
      </section>

      <section className="hub-section page-gutter" id="gtisd">
        <div className="hub-heading">
          <p className="eyebrow">Sáng kiến kết nối</p>
          <h2>GTISD HUB</h2>
          <p>Một điểm đến cho công nghệ xanh, đổi mới sáng tạo và phát triển bền vững.</p>
        </div>
        <div className="hub-steps">
          <div><span>01</span><p>Xây dựng điểm kết nối đa ngành, đa bên trong hệ sinh thái phát triển bền vững.</p></div>
          <div><span>02</span><p>Hỗ trợ hệ sinh thái khởi nghiệp, chuyển đổi xanh, chuyển đổi số và tăng trưởng bền vững.</p></div>
          <div><span>03</span><p>Đóng góp vào mục tiêu Net Zero quốc gia thông qua hợp tác và giải pháp công nghệ.</p></div>
        </div>
      </section>

      <section className="technology-story page-gutter" id="cong-nghe">
        <figure className="technology-story-image">
          <img src="/images/technology-in-practice.png" alt="Đội ngũ kỹ thuật kiểm tra hệ thống thiết bị tại cơ sở sản xuất." />
        </figure>
        <div className="technology-story-copy" id="esg">
          <p className="eyebrow">Đồng hành cùng doanh nghiệp</p>
          <h2>Chiến lược ESG đi cùng năng lực triển khai.</h2>
          <p>NWG tư vấn định hướng, xây dựng lộ trình, đào tạo nhân sự và kết nối giải pháp kỹ thuật để doanh nghiệp đưa ESG vào hoạt động thực tế.</p>
          <p>Các nội dung hỗ trợ gồm kiểm kê phát thải, lộ trình giảm phát thải, báo cáo ESG, chuyển dịch năng lượng và tài chính khí hậu.</p>
        </div>
      </section>

      <section className="global-network page-gutter" id="he-sinh-thai">
        <div className="network-number">70<span>+</span></div>
        <div className="global-network-copy">
          <p className="eyebrow">Mạng lưới chuyên gia ESG</p>
          <h2>Hợp tác quốc tế, gắn với bối cảnh Việt Nam.</h2>
          <p>NWG là đối tác được ủy quyền của The ESG Institute tại Việt Nam và duy trì mạng lưới chuyên gia ESG tại hơn 70 quốc gia.</p>
        </div>
      </section>

      <section className="closing-band page-gutter">
        <p className="eyebrow eyebrow-light">Nature World Group</p>
        <h2>Cùng kết nối nguồn lực cho phát triển bền vững.</h2>
        <a className="light-link" href="tel:+84969924279">Liên hệ với chúng tôi <Arrow /></a>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gioi-thieu" element={<AboutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}
