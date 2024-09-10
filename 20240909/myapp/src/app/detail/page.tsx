import axios from 'axios';

export default async function Home() {
    const { data } = await axios.get("http://127.0.0.1:4000/");
    return (
        <div className="">
            {data}
        </div>
    );
}
