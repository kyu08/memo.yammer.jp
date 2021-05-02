const Header = () => {
    return (
        <header>
          <div className="header-inner">
            <div className="header-left">
              <div className="header-title">memo.basd4g.net</div>
              <div className="header-subtitle">常に完成形</div>
            </div>
              <div className="header-right">
                <nav className="header-nav">
                  <a className="header-nav-item" href="/about">
                    <img className="header-nav-icon" src="/assets/user.svg" alt="自己紹介" />
                  </a>
                  <a className="header-nav-item" href="https://github.com/basd4g" target="_blank">
                    <img className="header-nav-icon" src="/assets/github.svg" alt="GitHub (@basd4g)" />
                  </a>
                  <a className="header-nav-item" href="https://twitter.com/basd4g" target="_blank">
                    <img className="header-nav-icon" src="/assets/twitter.svg" alt="Twitter (@basd4g)" />
                  </a>
                  <a className="header-nav-item" href="https://basd4g.net" target="_blank">
                    <img className="header-nav-icon" src="/assets/home.svg" alt="著者のWebサイト" />
                  </a>
              </nav>
            </div>
          </div>
        </header>
    )
}
export default Header;
