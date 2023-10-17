import styles from './Header.module.css'
import logoIgnite from '../assets/IgniteSimbol.png'

export default function header () {
    return (
        <div className={styles.backgroundHeader}>
            <img src={logoIgnite} alt="Logo ignite" />
            <h2>Ignite feed</h2>
        </div>
    )
}