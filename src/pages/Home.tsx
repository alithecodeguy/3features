import Link from "../components/router/Link";

type Props = {};

export default function Home({}: Props) {
  return (
    <div style={{ height: "20vh", width: "20vw", backgroundColor: "blue" }}>
      <Link to="/about">about</Link>
    </div>
  );
}
