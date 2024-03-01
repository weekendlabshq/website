import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Knight from "@/components/Knight";

export default function Home() {
  return (
    <>
      <Head>
        <title>Weekend Labs – A software consultancy based in Boston</title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta
          name="description"
          content="Weekend Labs is a full-service software consultancy based in Boston."
        />
        <meta name="author" content="Weekend Labs" />
      </Head>
      <Header></Header>
      <Layout>
        <section className="hero home">
          <div className="container">
            <h1>Building software for tomorrow</h1>
            <div className="heroModel">
              <Canvas camera={{ position: [0, 0, 35] }}>
                <ambientLight intensity={2} />
                <pointLight position={[40, 40, 40]} />
                <Knight position={[0, 0, 0]} />
                <OrbitControls enableZoom={false} enablePan={false} />
              </Canvas>
            </div>
          </div>
        </section>
        <section className="portfolio">
          <div className="container">
            <div className="portfolio__list">
              <Link
                className="portfolio__item"
                href="https://lavidascholars.org"
                target="_blank"
                rel="nofollow"
              >
                <Image
                  src="/static/robot.svg"
                  width="400"
                  height="400"
                  alt="FlossTime."
                />
                <div className="portfolio__meta">
                  <h3>Devgigs</h3>
                  <p>Strategy / Design / Engineering</p>
                </div>
              </Link>
              <Link
                className="portfolio__item"
                href="https://discountdrugnetwork.com"
                target="_blank"
                rel="nofollow"
              >
                <Image
                  src="/static/discountdrugnetwork.png"
                  width="400"
                  height="150"
                  alt="Discount Drug Network."
                />
                <div className="portfolio__meta">
                  <blockquote>
                    Building an enterprise-grade pharmaceutical API
                  </blockquote>
                  <h3>Discount Drug Network</h3>
                  <p>Strategy / Design / Engineering</p>
                </div>
              </Link>
              <Link
                className="portfolio__item"
                href="https://bostonjuniorbruins.com"
                target="_blank"
                rel="nofollow"
              >
                <Image
                  src="/static/bjb.png"
                  width="225"
                  height="125"
                  alt="Boston Junior Bruins."
                />
                <div className="portfolio__meta">
                  <h3>Boston Junior Bruins</h3>
                  <p>Design / Engineering</p>
                </div>
              </Link>
              <Link
                className="portfolio__item"
                href="https://flosstime.io"
                target="_blank"
                rel="nofollow"
              >
                <Image
                  src="/static/flosstime.png"
                  width="400"
                  height="400"
                  alt="FlossTime."
                />
                <div className="portfolio__meta">
                  <blockquote>
                    "Seriously, the best. There is no better team to help you
                    build some internal applications. They are fast, efficient,
                    and have a great eye for design."
                  </blockquote>
                  <h3>FlossTime</h3>
                  <p>Strategy / Design / Engineering</p>
                </div>
              </Link>
              <Link
                className="portfolio__item"
                href="https://palmerpads.com"
                target="_blank"
                rel="nofollow"
              >
                <Image
                  src="/static/palmerpads.png"
                  width="400"
                  height="400"
                  alt="Palmer Pads."
                />
                <div className="portfolio__meta">
                  <h3>Palmer Pads</h3>
                  <p>Design / Engineering</p>
                </div>
              </Link>
              {/* <Link className="portfolio__item" href="https://causehairsalon.com" target="_blank" rel="nofollow">
                <Image src="https://cdn.weekendlabs.net/cause.webp" alt="CAUSE Hair Salon." />
                <h3>CAUSE</h3>
                <p>Strategy / Design / Engineering</p>
              </Link> */}
            </div>
          </div>
        </section>
        {/* <section className="bullets">
          <div className="container">
            <h3>Featured Projects</h3>
            <ul className="bullets__list">
              <li>
                <Link href="https://spoteasy.com" target="_blank">Spot Easy</Link>
                <span>, Boston's #1 apartment rentals directory</span>
              </li>
              <li>
                <Link href="https://discountdrugnetwork.com" target="_blank">
                  Discount Drug Network
                </Link>
                <span>, A pharmaceutical drug pricing API</span>
              </li>
              <li>
                <Link href="https://bostonjuniorbruins.com" target="_blank">
                  Boston Junior Bruins
                </Link>
                <span>, Nationally-ranked AAU youth hockey team</span>
              </li>
              <li>
                <Link href="https://impossiblechess.com" target="_blank">
                  Impossible Chess
                </Link>
                <span>
                  , How long can you last against the world's best chess engine?
                </span>
              </li>
              <li>
                <Link href="https://whois.weekendlabs.net" target="_blank">
                  WHOIS by Weekend Labs
                </Link>
                <span>
                  , Unlock the secrets of any domain with just one WHOIS search.
                </span>
              </li>
              <li>
                <Link
                  href="https://github.com/weekendlabsllc/skeleton"
                  target="_blank"
                >
                  Skeleton
                </Link>
                <span>
                  , An open source WordPress starter theme for developers
                </span>
              </li>
            </ul>
          </div>
        </section> */}
        <section className="about">
          <div className="container">
            <h3>About Weekend Labs</h3>
            <p>
              Weekend Labs is a software consulting and investment collective
              based in Boston. Founded in 2021, Weekend Labs is a tight-knit
              collective of industry insiders, analysts, and innovators. We are
              open, collaborative, and use our collective experience, design and
              technical expertise to create meaningful and compelling content
              for all mediums. We take a hands-on approach to consulting in a
              way that truly feels like a business partner.
            </p>
            <Link href="/about">Read more &#8594;</Link>
          </div>
        </section>
        <section className="social">
          <div className="container">
            <h3>Follow us</h3>
            <span>Twitter: </span>
            <Link href="https://twitter.com/weekendlabs" target="_blank">
              @weekendlabs
            </Link>
            <br />
            <span>LinkedIn: </span>
            <Link
              href="https://linkedin.com/company/weekend-labs"
              target="_blank"
            >
              @weekendlabs
            </Link>
            <br />
            <span>GitHub: </span>
            <Link href="https://github.com/weekendlabsllc" target="_blank">
              @weekendlabs
            </Link>
          </div>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}
