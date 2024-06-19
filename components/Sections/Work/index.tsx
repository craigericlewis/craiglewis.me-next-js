import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Content from '../../Content';
import Subsection from '../../Content/Subsection';
import { RiotSVG } from '../../../assets/images';

interface SVGProps {
  isHovered: boolean;
}

const StyledRiot = styled(RiotSVG)<SVGProps>`
  width: 150px;
  height: 150px;
  margin: 50px auto 50px auto;
  display: block;
  transform: ${({ isHovered }) =>
  isHovered ? 'translate3D(0, 8px, 0)' : 'translateZ(0)'};
  transition-duration: 0.3s;
`;

const riotClick = () => {
  window.open('https://www.leagueoflegends.com/en-us/news/game-updates/patch-11-16-notes/#patch-ranked-updates', '__blank');
}

const Work: React.FC = () => {
  const { color: themeColors } = useContext(ThemeContext);
  const [riotHovered, setRiotHovered] = useState<SVGProps['isHovered']>(
    false
  );
  return (
    <Content title={'Work'}>
      <Subsection
        color={themeColors.red}
        title={'Riot Games'}
        description={
          'On the Behavioral Systems team for League of Legends I helped build systems that detect and punish disruptive actors as well as promoting prosocial play'
        }
        popinEnabled={true}
        onClick={riotClick}
        setSvgHovered={setRiotHovered}
        textColor={'white'}
        popinText={'Read More'}
      >
        <StyledRiot isHovered={riotHovered} />
      </Subsection>
    </Content>
  );
};

export default Work;
