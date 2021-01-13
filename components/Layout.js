import Head from 'next/head'
import Navbar from './Navbar'
import styles from './Layout.module.scss'


const Layout = (props) => (
    <div>
        <Head>
            <title>Bitzprice</title>
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                rel="stylesheet"
            />

            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.js"
            />
        </Head>
        <Navbar/>
        <div className={styles.container}>
            {props.children}
        </div>
        
    </div>
);

export default Layout;



