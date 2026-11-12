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
        <NavLink to="/en">English</NavLink>
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

function EnglishPage() {
  return (
    <main className="nwg-en">
      <section className="nwg-en-sec nwg-en-dark nwg-en-hero">
        <div className="nwg-en-wrap nwg-en-grid">
          <div>
            <div className="nwg-en-eyebrow">About us</div>
            <h1>Nature World <span>Group</span></h1>
            <p>
              Nature World Group (NWG) is a Vietnam-based organization driving sustainable innovation, green technology, and long-term value creation. We connect enterprises, experts, researchers, public agencies, and development partners to bring sustainability goals into action.
            </p>
          </div>
          <div>
            <img
              className="nwg-en-img"
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
              alt="Nature World Group team"
            />
          </div>
        </div>
      </section>

      <section className="nwg-en-sec nwg-en-light">
        <div className="nwg-en-wrap nwg-en-grid nwg-en-reverse">
          <div className="nwg-en-media">
            <img
              className="nwg-en-img flip"
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80"
              alt="Sustainable environment"
            />
          </div>
          <div>
            <div className="nwg-en-eyebrow">Purpose</div>
            <p className="nwg-en-lead">
              We believe sustainable development requires a balanced approach between economic growth, environmental responsibility, and community well-being.
            </p>
            <div className="nwg-en-tags">
              <span className="nwg-en-tag">Economic growth</span>
              <span className="nwg-en-tag">Environmental responsibility</span>
              <span className="nwg-en-tag">Community well-being</span>
            </div>
          </div>
        </div>
      </section>

      <section className="nwg-en-sec nwg-en-white">
        <div className="nwg-en-wrap">
          <div className="nwg-en-cards c2">
            <div className="nwg-en-card nwg-en-mv-dark">
              <div className="nwg-en-eyebrow">Mission</div>
              <h3>From ambition to action</h3>
              <p>We connect people, knowledge, and resources to help organizations move from sustainability goals to practical implementation.</p>
            </div>
            <div className="nwg-en-card nwg-en-mv-light">
              <div className="nwg-en-eyebrow">Vision</div>
              <h3>Green growth ecosystem</h3>
              <p>We aim to build a collaborative ecosystem that supports long-term value creation and sustainable development across Vietnam.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="nwg-en-sec nwg-en-light">
        <div className="nwg-en-wrap">
          <div className="nwg-en-head">
            <div className="nwg-en-eyebrow">Core values</div>
            <h2>What guides <span>the way we work</span></h2>
          </div>
          <div className="nwg-en-cards c4">
            <div className="nwg-en-card nwg-en-value">
              <span className="nwg-en-num">01</span>
              <h3>Sustainability</h3>
              <p>Balancing long-term economic, environmental, and social impact.</p>
            </div>
            <div className="nwg-en-card nwg-en-value">
              <span className="nwg-en-num">02</span>
              <h3>Innovation</h3>
              <p>Finding practical solutions that fit real-world conditions and opportunities.</p>
            </div>
            <div className="nwg-en-card nwg-en-value">
              <span className="nwg-en-num">03</span>
              <h3>Transparency</h3>
              <p>Prioritizing clear information, accountability, and measurable outcomes.</p>
            </div>
            <div className="nwg-en-card nwg-en-value">
              <span className="nwg-en-num">04</span>
              <h3>Responsibility</h3>
              <p>Aligning decisions with the interests of organizations, communities, and future generations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="nwg-en-sec nwg-en-dark">
        <div className="nwg-en-wrap nwg-en-grid">
          <div>
            <div className="nwg-en-eyebrow">How we connect</div>
            <h2>A <span>dynamic network</span> for every goal</h2>
            <p>NWG operates through an open network model, connecting businesses with specialists, research organizations, technology partners, and development institutions according to the needs of each program.</p>
            <div className="nwg-en-chips">
              <span className="nwg-en-chip">Businesses</span>
              <span className="nwg-en-chip">Experts</span>
              <span className="nwg-en-chip">Research institutions</span>
              <span className="nwg-en-chip">Technology partners</span>
              <span className="nwg-en-chip">Development organizations</span>
            </div>
          </div>
          <div>
            <img
              className="nwg-en-img"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
              alt="Network collaboration"
            />
          </div>
        </div>
      </section>

      <section className="nwg-en-sec nwg-en-white">
        <div className="nwg-en-wrap">
          <div className="nwg-en-head nwg-en-journey-head">
            <div className="nwg-en-eyebrow">Journey and activities</div>
            <h2>How NWG has <span>been taking action</span></h2>
            <p>NWG participates in and organizes activities focused on green transition, ESG training, expert engagement, and community-driven sustainability initiatives.</p>
          </div>

          <div className="nwg-en-journey">
            <article className="nwg-en-journey-item">
              <div className="nwg-en-journey-no">01</div>
              <div className="nwg-en-journey-copy">
                <span className="nwg-en-journey-label">Forums</span>
                <p>Spaces for dialogue on green transformation and sustainable development, where stakeholders exchange ideas and practical challenges.</p>
              </div>
            </article>

            <article className="nwg-en-journey-item">
              <div className="nwg-en-journey-no">02</div>
              <div className="nwg-en-journey-copy">
                <span className="nwg-en-journey-label">ESG training</span>
                <p>Programs designed to improve organizational capabilities in ESG strategy, implementation, and performance tracking.</p>
              </div>
            </article>

            <article className="nwg-en-journey-item">
              <div className="nwg-en-journey-no">03</div>
              <div className="nwg-en-journey-copy">
                <span className="nwg-en-journey-label">Expert connection</span>
                <p>Matching the right expertise to the right organizational needs, enabling practical collaboration and long-term impact.</p>
              </div>
            </article>

            <article className="nwg-en-journey-item">
              <div className="nwg-en-journey-no">04</div>
              <div className="nwg-en-journey-copy">
                <span className="nwg-en-journey-label">Social & environmental initiatives</span>
                <p>Programs that generate value for communities and the environment while supporting sustainable growth.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="nwg-en-sec nwg-en-light" style={{ padding: "70px 0" }}>
        <div className="nwg-en-wrap">
          <div className="nwg-en-cta">
            <div>
              <h2>Let’s collaborate</h2>
              <p>Whether you are looking for an ESG partner, green-tech collaboration, or a community-driven initiative, we are ready to discuss your goals and needs.</p>
            </div>
            <a href="tel:+84969924279" className="nwg-en-btn">Connect with NWG ↗</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="nwg-about">
      <section className="nwg-ab-sec nwg-ab-dark nwg-ab-hero">
        <div className="nwg-ab-wrap nwg-ab-grid">
          <div>
            <div className="nwg-ab-eyebrow">Về chúng tôi</div>
            <h1>Về <br /><span>Nature World Group</span></h1>
            <p>Nature World Group (NWG) là một tổ chức hoạt động tại Việt Nam trong lĩnh vực công nghệ xanh, đổi mới sáng tạo và phát triển bền vững. NWG kết nối doanh nghiệp, chuyên gia, nhà nghiên cứu, cơ quan công và các đối tác phát triển để đưa mục tiêu bền vững vào những hoạt động cụ thể.</p>
          </div>
          <div>
            <img
              className="nwg-ab-img"
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
              alt="Đội ngũ Nature World Group"
            />
          </div>
        </div>
      </section>

      <section className="nwg-ab-sec nwg-ab-light">
        <div className="nwg-ab-wrap nwg-ab-grid nwg-ab-reverse">
          <div className="nwg-ab-media">
            <img
              className="nwg-ab-img flip"
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80"
              alt="Rừng xanh"
            />
          </div>
          <div>
            <div className="nwg-ab-eyebrow">Mục đích hoạt động</div>
            <p className="nwg-ab-lead">Chúng tôi tin rằng phát triển bền vững cần kết hợp hài hòa giữa tăng trưởng kinh tế, trách nhiệm với môi trường và chất lượng sống của cộng đồng.</p>
            <div className="nwg-ab-tags">
              <span className="nwg-ab-tag">Tăng trưởng kinh tế</span>
              <span className="nwg-ab-tag">Trách nhiệm với môi trường</span>
              <span className="nwg-ab-tag">Chất lượng sống cộng đồng</span>
            </div>
          </div>
        </div>
      </section>

      <section className="nwg-ab-sec nwg-ab-white">
        <div className="nwg-ab-wrap">
          <div className="nwg-ab-cards c2">
            <div className="nwg-ab-card nwg-ab-mv-dark">
              <div className="nwg-ab-eyebrow">Sứ mệnh</div>
              <h3>Từ mục tiêu đến hành động</h3>
              <p>Kết nối con người, tri thức và nguồn lực để hỗ trợ tổ chức chuyển từ mục tiêu bền vững sang hành động phù hợp với nhu cầu thực tế.</p>
            </div>
            <div className="nwg-ab-card nwg-ab-mv-light">
              <div className="nwg-ab-eyebrow">Tầm nhìn</div>
              <h3>Hệ sinh thái phát triển xanh</h3>
              <p>Góp phần xây dựng một hệ sinh thái phát triển xanh có sự hợp tác rộng mở, năng lực thực thi và khả năng tạo giá trị lâu dài tại Việt Nam.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="nwg-ab-sec nwg-ab-light">
        <div className="nwg-ab-wrap">
          <div className="nwg-ab-head">
            <div className="nwg-ab-eyebrow">Giá trị cốt lõi</div>
            <h2>Những điều <span>định hướng</span> cách NWG làm việc</h2>
          </div>
          <div className="nwg-ab-cards c4">
            <div className="nwg-ab-card nwg-ab-value">
              <span className="nwg-ab-num">01</span>
              <h3>Bền vững</h3>
              <p>Cân nhắc tác động dài hạn đến kinh tế, môi trường và xã hội.</p>
            </div>
            <div className="nwg-ab-card nwg-ab-value">
              <span className="nwg-ab-num">02</span>
              <h3>Đổi mới</h3>
              <p>Tìm kiếm cách tiếp cận và giải pháp phù hợp với bối cảnh thực tế.</p>
            </div>
            <div className="nwg-ab-card nwg-ab-value">
              <span className="nwg-ab-num">03</span>
              <h3>Minh bạch</h3>
              <p>Đề cao thông tin rõ ràng và trách nhiệm trong hợp tác.</p>
            </div>
            <div className="nwg-ab-card nwg-ab-value">
              <span className="nwg-ab-num">04</span>
              <h3>Trách nhiệm</h3>
              <p>Hướng đến lợi ích của tổ chức, cộng đồng và môi trường.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="nwg-ab-sec nwg-ab-dark">
        <div className="nwg-ab-wrap nwg-ab-grid">
          <div>
            <div className="nwg-ab-eyebrow">Cách chúng tôi kết nối</div>
            <h2>Một <span>mạng lưới mở</span> cho từng mục tiêu</h2>
            <p>NWG hoạt động theo mô hình mạng lưới mở. Tùy mục tiêu của từng chương trình, chúng tôi kết nối doanh nghiệp với chuyên gia, tổ chức nghiên cứu, đối tác công nghệ, tổ chức phát triển và các nguồn lực phù hợp.</p>
            <div className="nwg-ab-chips">
              <span className="nwg-ab-chip">Doanh nghiệp</span>
              <span className="nwg-ab-chip">Chuyên gia</span>
              <span className="nwg-ab-chip">Tổ chức nghiên cứu</span>
              <span className="nwg-ab-chip">Đối tác công nghệ</span>
              <span className="nwg-ab-chip">Tổ chức phát triển</span>
            </div>
          </div>
          <div>
            <img
              className="nwg-ab-img"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
              alt="Mạng lưới hợp tác"
            />
          </div>
        </div>
      </section>

      <section className="nwg-ab-sec nwg-ab-white">
        <div className="nwg-ab-wrap">
          <div className="nwg-ab-head nwg-ab-journey-head">
            <div className="nwg-ab-eyebrow">Hành trình và hoạt động</div>
            <h2>NWG đã <span>cùng hành động</span> như thế nào</h2>
            <p>NWG tham gia và tổ chức nhiều hoạt động về chuyển đổi xanh, đào tạo ESG, kết nối chuyên gia và các sáng kiến xã hội, môi trường.</p>
          </div>

          <div className="nwg-ab-journey">
            <article className="nwg-ab-journey-item">
              <div className="nwg-ab-journey-no">01</div>
              <div className="nwg-ab-journey-copy">
                <span className="nwg-ab-journey-label">Diễn đàn</span>
                <p>Không gian trao đổi về chuyển đổi xanh và phát triển bền vững, nơi các bên cùng chia sẻ thực tiễn, thách thức và cơ hội.</p>
              </div>
            </article>

            <article className="nwg-ab-journey-item">
              <div className="nwg-ab-journey-no">02</div>
              <div className="nwg-ab-journey-copy">
                <span className="nwg-ab-journey-label">Đào tạo ESG</span>
                <p>Các chương trình đào tạo giúp tổ chức nâng cao năng lực về ESG, từ nhận diện rủi ro đến thiết lập lộ trình thực thi cụ thể.</p>
              </div>
            </article>

            <article className="nwg-ab-journey-item">
              <div className="nwg-ab-journey-no">03</div>
              <div className="nwg-ab-journey-copy">
                <span className="nwg-ab-journey-label">Kết nối chuyên gia</span>
                <p>Đưa chuyên gia đến đúng nhu cầu của doanh nghiệp và tổ chức, tạo ra các chuỗi hợp tác có tính ứng dụng và giá trị dài hạn.</p>
              </div>
            </article>

            <article className="nwg-ab-journey-item">
              <div className="nwg-ab-journey-no">04</div>
              <div className="nwg-ab-journey-copy">
                <span className="nwg-ab-journey-label">Sáng kiến xã hội, môi trường</span>
                <p>Các hoạt động hướng đến lợi ích của cộng đồng và môi trường, góp phần xây dựng một hệ sinh thái phát triển bền vững.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="nwg-ab-sec nwg-ab-light" style={{ padding: "70px 0" }}>
        <div className="nwg-ab-wrap">
          <div className="nwg-ab-cta">
            <div>
              <h2>Cùng hợp tác</h2>
              <p>Bạn đang tìm đối tác để phát triển một sáng kiến ESG, công nghệ xanh hoặc chương trình cộng đồng? Hãy trao đổi với NWG về mục tiêu và nhu cầu của bạn.</p>
            </div>
            <a href="tel:+84969924279" className="nwg-ab-btn">Trao đổi với NWG ↗</a>
          </div>
        </div>
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
        <Route path="/en" element={<EnglishPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}
