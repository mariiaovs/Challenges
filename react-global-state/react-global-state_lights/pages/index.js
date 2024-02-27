import Link from "../components/Link";

export default function HomePage({ lights }) {
  const lightsCount = lights.filter((light) => light.isOn).length;
  return (
    <div>
      <h1>Home</h1>
      <p>{lightsCount} light(s) are on.</p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
