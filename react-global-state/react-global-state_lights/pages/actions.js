import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  toggleLightsOff,
  toggleLightsOn,
  isAllLightsOn,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        toggleLightsOff={toggleLightsOff}
        toggleLightsOn={toggleLightsOn}
        isAllLightsOn={isAllLightsOn}
      />
    </>
  );
}
