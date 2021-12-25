import { Link, Outlet } from "react-router-dom";

export default function About() {
    return (
        <>
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum perspiciatis eos unde at voluptates laudantium placeat perferendis. Quod, aperiam doloribus.</h1>
            <p>ini adalah halaman about. untuk tentang kami lainnya bisa klik link dibawah</p>
            <ul>
                {/* link menuju ke halaman about-team */}
                <li><Link to="/about/about-team">Team</Link></li>
            </ul>

            <Outlet />
            {/* ini outlet nya untuk menampilkan content about-team atau child */}

        </>
    );
}