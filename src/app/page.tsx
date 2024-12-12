// pages/index.js
'use client';
import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [navActive, setNavActive] = useState(false)

  const toggleNav = () => {
    setNavActive(!navActive)
  }

  const closeNav = () => {
    setNavActive(false)
  }

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="ts7yHXzWlDUZe5-2nYYO1nwschtiiHo4WZc60Sswbgc" />
        <title>Zether</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Zether" />
        <meta property="og:description" content="Decentralized Layer 1 EVM Blockchain Powered by Proof of Work." />
        <meta property="og:image" content="https://zether.org/img/card.png" />
        <meta property="og:url" content="https://zether.org/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zether" />
        <meta name="twitter:description" content="Zether - Decentralized Layer 1 EVM Blockchain Powered by Proof of Work." />
        <meta name="twitter:image" content="https://zether.org/img/card.png" />
        <meta name="twitter:site" content="@ZetherOrg" />
        <meta name="twitter:creator" content="@ZetherOrg" />

        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <header>
        <nav>
          <div className="logo">
            <Link href="/">
              <img src="/img/text.png" alt="Zether" />
            </Link>
          </div>
          <div className={`menu-toggle ${navActive ? 'is-active' : ''}`} onClick={toggleNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
            <li className="nav-close-btn">
              <button id="close-nav" onClick={closeNav} style={{ background: 'none', border: 'none', fontSize: '2em', color: '#fff' }}>×</button>
            </li>
            <li><a href="#features" onClick={closeNav}>Features</a></li>
            <li><a href="https://zthscan.com/" target="_blank" rel="noreferrer">Block Explorer</a></li>
            <li><a href="https://zether.org/ecosystem/" target="_blank" rel="noreferrer">Ecosystem</a></li>
            <li><a href="https://zether.games/" target="_blank" rel="noreferrer">Games</a></li>
            <li><a href="#community" onClick={closeNav}>Community</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>Welcome to Zether</h1>
        <p style={{ lineHeight: '37px' }}>
          EVM-Compatible Layer 1 Blockchain with Proof of Work Consensus
          <br />
          Powered by Miners, Driven by Decentralization
        </p>
        <a href="#features" className="btn" style={{ marginTop: '50px' }}>Get Started</a>
      </section>

      {/* Key Features Section */}
      <section id="features">
        <div className="section-title">
          <h2>Key Features</h2>
          <p>Empowering miners and fostering innovation in decentralized applications.</p>
        </div>
        <div className="features">
          <div className="feature-box">
            <div className="feature-title">Decentralized</div>
            <div className="feature-desc">A decentralized infrastructure that supports a distributed network and prevents centralization, promoting security and autonomy.</div>
          </div>
          <div className="feature-box">
            <div className="feature-title">Proof of Work</div>
            <div className="feature-desc">Utilizes Ethash, a secure and battle-tested consensus mechanism that ensures decentralization and robust network reliability.</div>
          </div>
          <div className="feature-box">
            <div className="feature-title">Aggressive Tokenomics</div>
            <div className="feature-desc">An incentivized block reward structure that starts at 10,000 and decreases over time to encourage long-term participation.</div>
          </div>
          <div className="feature-box">
            <div className="feature-title">EVM Compatibility</div>
            <div className="feature-desc">Full support for deploying smart contracts and decentralized applications (DApps) seamlessly on the Ethereum Virtual Machine.</div>
          </div>
          <div className="feature-box">
            <div className="feature-title">No Premine</div>
            <div className="feature-desc">A fair launch strategy with zero premined coins, ensuring equitable distribution among participants from the start.</div>
          </div>
          <div className="feature-box">
            <div className="feature-title">No Instamine</div>
            <div className="feature-desc">Sufficient initial block difficulty prevents instamining, allowing fair coin distribution from the genesis block onward.</div>
          </div>
          <div className="feature-box">
            <div className="feature-title">Low Fees</div>
            <div className="feature-desc">Minimal transaction costs make interactions affordable and efficient, enhancing network usability and accessibility.</div>
          </div>
          <div className="feature-box">
            <div className="feature-title">No Uncle Rewards</div>
            <div className="feature-desc">A streamlined reward system focused on main blocks only, enhancing network clarity and simplifying miner incentives.</div>
          </div>
        </div>
      </section>

      {/* Block Reward Structure Section */}
      <section id="block-rewards">
        <div className="section-title">
          <h2>Aggressive Block Reward Structure</h2>
          <p>A balanced and fair distribution through a decreasing block reward system.</p>
        </div>
        <div className="block-reward">
          <table>
            <tbody>
              <tr>
                <th>Block Range</th>
                <th>Reward per Block</th>
              </tr>
              <tr><td>0 - 100,000</td><td>10,000 ZTH</td></tr>
              <tr><td>100,001 - 200,000</td><td>9,000 ZTH</td></tr>
              <tr><td>200,001 - 300,000</td><td>8,000 ZTH</td></tr>
              <tr><td>300,001 - 400,000</td><td>7,000 ZTH</td></tr>
              <tr><td>400,001 - 500,000</td><td>6,000 ZTH</td></tr>
              <tr><td>500,001 - 600,000</td><td>5,000 ZTH</td></tr>
              <tr><td>600,001 - 700,000</td><td>4,000 ZTH</td></tr>
              <tr><td>700,001 - 800,000</td><td>3,000 ZTH</td></tr>
              <tr><td>800,001 - 900,000</td><td>2,000 ZTH</td></tr>
              <tr><td>900,001 - 1,000,000</td><td>1,000 ZTH</td></tr>
              <tr><td>1,000,001 - 1,100,000</td><td>900 ZTH</td></tr>
              <tr><td>1,100,001 - 1,200,000</td><td>800 ZTH</td></tr>
              <tr><td>1,200,001 - 1,300,000</td><td>700 ZTH</td></tr>
              <tr><td>1,300,001 - 1,400,000</td><td>600 ZTH</td></tr>
              <tr><td>1,400,001 - 1,500,000</td><td>500 ZTH</td></tr>
              <tr><td>1,500,001 - 1,600,000</td><td>400 ZTH</td></tr>
              <tr><td>1,600,001 - 1,700,000</td><td>300 ZTH</td></tr>
              <tr><td>1,700,001 - 1,800,000</td><td>200 ZTH</td></tr>
              <tr><td>1,800,001 - 1,900,000</td><td>100 ZTH</td></tr>
              <tr><td>1,900,001 - 2,000,000</td><td>90 ZTH</td></tr>
              <tr><td>2,000,001 - 2,100,000</td><td>80 ZTH</td></tr>
              <tr><td>2,100,001 - 2,200,000</td><td>70 ZTH</td></tr>
              <tr><td>2,200,001 - 2,300,000</td><td>60 ZTH</td></tr>
              <tr><td>2,300,001 - 2,400,000</td><td>50 ZTH</td></tr>
              <tr><td>2,400,001 - 2,500,000</td><td>40 ZTH</td></tr>
              <tr><td>2,500,001 - 2,600,000</td><td>30 ZTH</td></tr>
              <tr><td>2,600,001 - 2,700,000</td><td>20 ZTH</td></tr>
              <tr><td>2,700,001 - onwards</td><td>10 ZTH</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Technical Details Section */}
      <section id="technical-details">
        <div className="section-title">
          <h2>Technical Details</h2>
          <p>Robust architecture designed for performance and scalability.</p>
        </div>
        <div className="features">
          <div className="feature-box">
            <div className="feature-title">Chain ID</div>
            <div className="feature-desc">715131</div>
          </div>
          <div className="feature-box">
            <div className="feature-title">Currency Ticker</div>
            <div className="feature-desc">ZTH</div>
          </div>
          <div className="feature-box">
            <div className="feature-title">Mining Algorithm</div>
            <div className="feature-desc">Ethash</div>
          </div>
          <div className="feature-box">
            <div className="feature-title">Average Block Time</div>
            <div className="feature-desc">~12 seconds</div>
          </div>
          <div className="feature-box">
            <div className="feature-title">Circulating Supply</div>
            <div className="feature-desc">2,662,909,200 ZTH</div>
          </div>
          <div className="feature-box">
            <div className="feature-title">Estimated Inflation Rate</div>
            <div className="feature-desc">~0.44%</div>
          </div>
          <div className="feature-box">
            <div className="feature-title">Price</div>
            <div className="feature-desc">0.00074569 USD</div>
          </div>
          <div className="feature-box">
            <div className="feature-title">Market Cap</div>
            <div className="feature-desc">1,985,705 USD</div>
          </div>
          <div className="feature-box">
            <div className="feature-title">Foundation Fee</div>
            <div className="feature-desc">5% equivalent of total block reward</div>
          </div>
          <div className="feature-box">
            <div className="feature-title">Contract Address (BSC)</div>
            <div className="feature-desc">0xF8598A646C4d6f4D5Fc9BE0673D2C2d4c2e18c91</div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap">
        <div className="section-title">
          <h2>Roadmap</h2>
          <p>Charting our path towards a decentralized and innovative future.</p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Phase 1: Foundation</h3>
            <p>Launch of the mainnet, RPC setup, Block Explorer release, introduction of Web Wallet, community development, and initial exchange listings.</p>
          </div>
          <div className="timeline-item">
            <h3>Phase 2: Ecosystem Growth</h3>
            <p>Development of Cross-chain Bridge, Token Generator, various DApps and mini-games, mobile wallet, API, forum, and social platform.</p>
          </div>
          <div className="timeline-item">
            <h3>Phase 3: Expansion</h3>
            <p>Forging strategic partnerships, launching marketing and promotion campaigns, and planning for future expansions to strengthen the ecosystem.</p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="community">
        <div className="section-title">
          <h2>Join Our Community</h2>
          <p>Connect with us and be a part of the Zether revolution.</p>
        </div>
        <div className="community-links">
          <a href="https://bitcointalk.org/index.php?topic=5515921" target="_blank" rel="noreferrer">Bitcointalk</a>
          <a href="https://x.com/ZetherOrg" target="_blank" rel="noreferrer">Twitter/X</a>
          <a href="https://discord.gg/rdvTu2Ks7S" target="_blank" rel="noreferrer">Discord</a>
          <a href="https://t.me/ZetherOrg" target="_blank" rel="noreferrer">TG Channel</a>
          <a href="https://t.me/ZetherPoW" target="_blank" rel="noreferrer">TG Group</a>
        </div>
      </section>

      {/* Important Links Section */}
      <section id="important-links">
        <div className="section-title">
          <h2>Important Links</h2>
          <p>Access essential resources and tools for Zether.</p>
        </div>
        <div className="links-section">
          <div className="links-row">
            {/* Column 1 */}
            <div className="links-column">
              <h3>Official Resources</h3>
              <ul>
                <li><a href="blog" target="_blank" rel="noreferrer">Blog</a></li>
                <li><a href="emission" target="_blank" rel="noreferrer">Emission Table</a></li>
              </ul>

              <h3>Zether Ecosystem</h3>
              <ul>
                <li><a href="metamask" target="_blank" rel="noreferrer">Metamask</a></li>
                <li><a href="https://zether.org/ecosystem/" target="_blank" rel="noreferrer">Zether Ecosystem</a></li>
                <li><a href="https://zether.games/" target="_blank" rel="noreferrer">Zether Games</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="links-column">
              <h3>Mining Resources</h3>
              <ul>
                <li><a href="https://miningpoolstats.stream/zether" target="_blank" rel="noreferrer">Mining Pools</a></li>
                <li><a href="https://miningpoolstats.stream/zether" target="_blank" rel="noreferrer">MiningPoolStats</a></li>
              </ul>

              <h3>Development Resources</h3>
              <ul>
                <li><a href="https://github.com/ZetherOrg" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://api.zether.org/" target="_blank" rel="noreferrer">Zether API</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2024 Zether. All rights reserved.</p>
      </footer>
    </>
  )
}
