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
  isAllLightsOn,
}) {
  return (
    <StyledQuickActions>
      <Button
        disabled={!isAllLightsOn}
        type="button"
        onClick={() => toggleLightsOff()}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={isAllLightsOn}
        type="button"
        onClick={() => toggleLightsOn()}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
