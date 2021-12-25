import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

// ? mengimport beberapa component. Default nya Welcome sedangkan { Welcome2, Welcome3 } bukan default
// import Welcome, { Welcome2, Welcome3 } from './Welcome';
import Welcome from './Welcome';
import { Welcome2 } from './Welcome';
import { Welcome3 } from './Welcome';

// ? mengimport component dari welcome yang bukan default
import { WelcomeH2 } from './Welcome';

// ? mengimport component button
import Button from './Button';

// ? mengimpot component about team
import AboutTeam from './AboutTeam';

// ? mengimport component blog
import Blog from './Blog';
import BlogDetail from './BlogDetail';

// ? mengimport component not found
import NotFound from './NotFound';

// ? mengimport component login
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                {/* memanggil beberapa component */}
                <Welcome />
                <Welcome2 />
                <Welcome3 />
                {/* <Welcome children="irfan" /> */}
                {/* <Welcome children="fitri" /> */}

                {/* kita bisa juga dengan menggunakan tag penutup nya */}
                {/* <Welcome>anisa</Welcome> */}

                {/* <WelcomeH2 text="fitri" /> */}

                {/* dengan menggunakan tag penutup. ini sama saja namun di function return nya harus menggunakan children */}
                <WelcomeH2>zihan indah syahfitri</WelcomeH2>
                {/* <WelcomeH2 children="zihan indah syahfitri" /> */}

                {/* <Button>Click Me</Button> */}
                <Button children="Click Me" />

                {/* menambahkan gambar. kita harus gunakan tanda '/' untuk path nya */}
                <img src="/logo512.png" alt="gambar" />

            </header>

            {/* navigasi */}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="about/about-team">About Team</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/login">Login</Link>
            </nav>

            {/* router halaman */}
            <Routes>
                <Route path="/" element={<Home />} />

                {/* cara - 2 membuat multiple halaman. ketika menggunakan cara ini kita butuh outlet untuk menampilkan
                content child (about-team) dari parent (about) */}
                <Route path="about" element={<About />}>
                    <Route path="about-team" element={<AboutTeam />} />
                </Route>

                {/* cara - 1 membuat multiple halaman */}
                {/* <Route path="about" element={<About />} />
                <Route path="about/about-team" element={<AboutTeam />} /> */}

                <Route path="blog" element={<Blog />} />
                {/* <Route path="blog/artikel-1" element={<BlogDetail />} />
                <Route path="blog/artikel-2" element={<BlogDetail />} />
                <Route path="blog/artikel-3" element={<BlogDetail />} /> */}

                {/* membuat dynamic route. agar tidak membuat satu-persatu artikel. jadi 
                kita hanya perlu membuat 1 route aja dengan menambahkan :slug */}
                {/* lalu kita akan menggunakan useParams untuk mengambil parameter dari artikel 1,2,3 */}
                <Route path="blog/:slug" element={<BlogDetail />} />

                <Route path="login" element={<Login />} />

                <Route path="dashboard" element={<Dashboard />} />

                {/* membuat route ketika user menuju kehalaman selain dari route yang kita buat atau tidak ada route nya 
                dengan special keyowrd '*' */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
