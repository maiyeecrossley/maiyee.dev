import styles from "./Home.module.css"
import { Link } from "react-router"
import GitHubIcon from "../../assets/github.png"
import LinkedInIcon from "../../assets/linkedin.png"
import GmailIcon from "../../assets/gmail.png"


export default function Home() {
    return (
        <>
            <main className={styles.homeContainer}>
                <section className={styles.heroSection}>
                    <h1>Mai-Yee Crossley 🌸</h1>
                    <h2>Junior Full-Stack Developer</h2>

                    <div className={styles.socials}>
                        <Link to="https://github.com/maiyeecrossley/" target="_blank"><img src={GitHubIcon} width="40" alt="GitHub icon" /></Link>
                        <Link to="https://www.linkedin.com/in/maiyeecrossley/" target="_blank"> <img src={LinkedInIcon} width="40" alt="LinkedIn icon" /></Link>
                        <Link to="mailto:maiyee.crossley@gmail.com"><img src={GmailIcon} width="40" alt="Gmail icon" /></Link>
                    </div>
                </section>
            </main>
        </>

    )
}