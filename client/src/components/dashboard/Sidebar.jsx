import React from 'react'
import { FaFolderPlus, FaStickyNote, FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa'
import styles from './styles/Sidebar.module.css'

const Sidebar = () => {
  return (
    <div id={styles.sidebar}>
      <ul className={styles.sidebarList}>
        <li>
            <h3 id={styles.user}>Hi User!</h3>
        </li>
        
        <li>
            <button onClick={() => console.log(1)}>
                <FaTachometerAlt className={styles.fa}/>
                <span className={styles.label}>Dashboard</span>
            </button>
        </li>

        <li>
            <button onClick={() => console.log(2)}>
                <FaFolderPlus className={styles.fa}/>
                <span className={styles.label}>Create Project</span>
            </button>
        </li>

        <li>
            <button onClick={() => console.log(3)}>
                <FaStickyNote className={styles.fa}/>
                <span className={styles.label}>Create Task</span>
            </button>
        </li>

        <li id={styles.signOut}>
            <button onClick={() => console.log(4)}>
                <FaSignOutAlt className={styles.fa}/>
                <span className={styles.label}>Sign Out</span>
            </button>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar