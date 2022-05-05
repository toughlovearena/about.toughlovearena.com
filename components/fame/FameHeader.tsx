import styled from 'styled-components';
import { CONSTANTS } from '../../data/constants';
import { HallOfFameData } from '../../interfaces';
import { sortArray } from '../../utils/list';

const HeaderDiv = styled.div`
  padding: 1em;
  text-align: center;
  font-size: 1.5em;

  a {
    color: var(--heart);
  }
`;

const StatsTitle = styled.div`
  font-size: 2em;
`;
const SubTitle = styled.div`
  font-size: 1em;
  margin: 1em 0;
`;
const Updated = styled.div`
  width: 100%;
  text-align: right;
  font-style: italic;
  font-size: 0.8em;
`;
const SocialInfo = styled.div`
  font-size: 0.8em;
`;

export const FameHeader = (props: { fame: HallOfFameData, }) => {
  const updated = sortArray(props.fame.events.map((evt) => evt.date)).reverse()[0];
  return (
    <HeaderDiv>
      <StatsTitle>The Hall of Fame</StatsTitle>
      <Updated>last updated {updated}</Updated>
      <SubTitle>
        Here we celebrate and immortalize all of the{" "}
        <a href={CONSTANTS.URLs.Game}>Tough Love Arena</a> champions
      </SubTitle>
      <SocialInfo>
        Want to submit your event to the Hall of Fame?
        <br />
        Send us an <a href={CONSTANTS.URLs.Email}>email</a>, message us on{" "}
        <a href={CONSTANTS.URLs.Twitter}>Twitter</a>, or fill out our{" "}
        <a href={CONSTANTS.URLs.Form}>Google Form</a>
      </SocialInfo>
    </HeaderDiv>
  );
}
