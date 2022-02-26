import Link from 'next/link'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div>
              <div>
                ©2020 Keisuke Nakayama
              </div>
              <div>
                <Link href="/privacy-policy">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
    )
}

export default Footer;
