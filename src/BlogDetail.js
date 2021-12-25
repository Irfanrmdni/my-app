import { useParams } from "react-router";

export default function BlogDetail() {
    // membuat parameter untuk mengambil dari link artikel 1,2,3 menggunakan useParams
    const urlParams = useParams();
    return (
        <>
            <h1>Blog Detail</h1>
            <p>hallo ini detail dari {urlParams.slug}</p>
        </>
    );
}