import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  toggleLightsOff,
  toggleLightsOn,
  areAllLightsOn,
  areAllLightsOff,
}) {
  return (
    <StyledQuickActions>
      <Button
        disabled={areAllLightsOff}
        type="button"
        onClick={toggleLightsOff}
      >
        Turn all lights off
      </Button>
      <Button disabled={areAllLightsOn} type="button" onClick={toggleLightsOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
