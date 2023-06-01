import styled from '@emotion/styled';

export const CardContainer = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  margin-bottom: 20px;
  padding: 0 90px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const CardBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
  flex-direction: column;
  padding: 28px;
`;

export const LogoImage = styled.img`
position: absolute;
top: 10;
left: 10;
  object-fit: contain;
`;

export const TweetImage = styled.img`
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
`;

export const AvatarImage = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 150px;
  left: 140px;
  background: #ebd8ff;
  box-shadow: 0 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0 -2.19582px 4.39163px #ae7be3, inset 0 4.39163px 3.29372px #fbf8ff;
  border-radius: 13.1749px;
`;

export const Title = styled.p`
  position: absolute;
  width: 150px;
  height: 18px;
  left: 124px;
  top: 250px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
    color: #ebd8ff;
`;

export const TweetCount = styled.p`
  position: absolute;
  width: 132px;
  height: 24px;
  left: 124px;
  top: 284px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const FollowersCount = styled.p`
  position: absolute;
  width: 214px;
  height: 24px;
  left: 83px;
  top: 324px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const FollowButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;
  padding: 14px 28px;
  background: ${({ followStatus }) => (followStatus ? 'green' : 'pink')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
`;

export const FollowButtonText = styled.span`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
`;
