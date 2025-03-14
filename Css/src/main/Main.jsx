import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Wrapper isLoaded={isLoaded}>
      <GradientBackground>
        <Container>
          <Header isLoaded={isLoaded}>
            <TitleWrapper>
              <Title>CSS Tools</Title>
              <TitleAccent>.</TitleAccent>
            </TitleWrapper>
            <Subtitle>
              <span>최신 트렌드와 고급 기법을 한곳에</span>
            </Subtitle>
          </Header>

          <FeatureSection isLoaded={isLoaded}>
            <FeatureCard
              as={Link}
              to="/css-animations"
              whileHover={{ scale: 1.05 }}
            >
              <CardContent>
                <IconWrapper>
                  <FeatureIcon>
                    <AnimatedEmoji>✨</AnimatedEmoji>
                  </FeatureIcon>
                </IconWrapper>
                <FeatureInfo>
                  <FeatureTitle>CSS 애니메이션</FeatureTitle>
                  <FeatureDescription>
                    트랜지션, 트랜스폼, 키프레임, 로딩 애니메이션을 활용한
                    현대적 인터랙션 디자인의 모든 것
                  </FeatureDescription>
                  <ViewButton>
                    <ButtonText>살펴보기</ButtonText>
                    <ButtonArrow>→</ButtonArrow>
                  </ViewButton>
                </FeatureInfo>
              </CardContent>
              <CardGlow />
            </FeatureCard>
          </FeatureSection>

          <FooterSection isLoaded={isLoaded}>
            <FooterText>최신 웹 개발 트렌드와 함께하세요</FooterText>
          </FooterSection>
        </Container>
      </GradientBackground>
    </Wrapper>
  );
};

export default Main;

const glowPulse = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 0.8; }
  100% { opacity: 0.5; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// 미디어 쿼리를 위한 브레이크포인트 정의
const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
};

// 미디어 쿼리 헬퍼 함수
const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  laptop: `@media (max-width: ${breakpoints.laptop})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`,
};

// 스타일 컴포넌트 정의
const Wrapper = styled.div`
  min-height: 100vh;
  opacity: ${(props) => (props.isLoaded ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
`;

const GradientBackground = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(99, 102, 241, 0.15) 0%,
      rgba(99, 102, 241, 0) 60%
    );
    pointer-events: none;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  font-family: "Inter", "Noto Sans KR", sans-serif;
  color: #f8fafc;

  ${media.tablet} {
    padding: 3rem 1.5rem;
  }

  ${media.mobile} {
    padding: 2rem 1rem;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem;
  opacity: ${(props) => (props.isLoaded ? 1 : 0)};
  transform: ${(props) =>
    props.isLoaded ? "translateY(0)" : "translateY(30px)"};
  transition: opacity 0.8s ease, transform 0.8s ease;
  transition-delay: 0.2s;

  ${media.mobile} {
    margin-bottom: 3rem;
  }
`;

const TitleWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #f9fafb 0%, #94a3b8 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${media.laptop} {
    font-size: 3rem;
  }

  ${media.tablet} {
    font-size: 2.5rem;
  }

  ${media.mobile} {
    font-size: 2rem;
  }
`;

const TitleAccent = styled.span`
  font-size: 3.5rem;
  font-weight: 800;
  color: #6366f1;
  margin-left: 2px;

  ${media.laptop} {
    font-size: 3rem;
  }

  ${media.tablet} {
    font-size: 2.5rem;
  }

  ${media.mobile} {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  color: #cbd5e1;
  line-height: 1.5;
  max-width: 650px;
  margin: 0 auto;

  span {
    display: inline-block;
    background: linear-gradient(90deg, #cbd5e1 0%, #cbd5e1 50%, #94a3b8 100%);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shimmer} 3s linear infinite;
  }

  ${media.tablet} {
    font-size: 1.1rem;
  }

  ${media.mobile} {
    font-size: 1rem;
  }
`;

const FeatureSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  opacity: ${(props) => (props.isLoaded ? 1 : 0)};
  transform: ${(props) =>
    props.isLoaded ? "translateY(0)" : "translateY(30px)"};
  transition: opacity 0.8s ease, transform 0.8s ease;
  transition-delay: 0.4s;

  ${media.mobile} {
    margin-bottom: 3rem;
  }
`;

const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 1;
`;

const CardGlow = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: conic-gradient(
    from 180deg at 50% 50%,
    #6366f1 0deg,
    #4f46e5 72.5deg,
    #4338ca 145deg,
    #3730a3 217.5deg,
    #6366f1 360deg
  );
  border-radius: 24px;
  z-index: 0;
  opacity: 0;
  transform: rotate(0deg);
  transition: opacity 0.3s ease;
`;

const FeatureCard = styled.div`
  position: relative;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
  padding: 2.5rem;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    box-shadow 0.4s ease;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 10px 30px -10px rgba(2, 6, 23, 0.3),
    0 0 20px rgba(99, 102, 241, 0.15);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15), 0 0 30px rgba(99, 102, 241, 0.3);
  }

  ${media.tablet} {
    padding: 2rem;
  }

  ${media.mobile} {
    padding: 1.75rem;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  margin-bottom: 1.5rem;

  &::before {
    content: "";
    position: absolute;
    inset: -10px;
    background: radial-gradient(
      circle at center,
      rgba(99, 102, 241, 0.2) 0%,
      rgba(99, 102, 241, 0) 70%
    );
    border-radius: 50%;
    animation: ${glowPulse} 3s ease-in-out infinite;
  }

  ${media.mobile} {
    width: 60px;
    height: 60px;
  }
`;

const FeatureIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4338ca 0%, #6366f1 100%);
  border-radius: 50%;
  font-size: 2rem;

  ${media.mobile} {
    font-size: 1.75rem;
  }
`;

const AnimatedEmoji = styled.span`
  display: inline-block;
  animation: ${float} 3s ease-in-out infinite;
`;

const FeatureInfo = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${media.mobile} {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  color: #94a3b8;
  line-height: 1.7;
  margin-bottom: 1.5rem;

  ${media.mobile} {
    font-size: 1rem;
    margin-bottom: 1.25rem;
  }
`;

const ViewButton = styled.div`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  font-size: 1rem;
  color: #6366f1;
  transition: all 0.3s ease;
`;

const ButtonText = styled.span`
  transition: transform 0.3s ease;
  ${FeatureCard}:hover & {
    transform: translateX(-3px);
  }
`;

const ButtonArrow = styled.span`
  margin-left: 8px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0.7;

  ${FeatureCard}:hover & {
    transform: translateX(5px);
    opacity: 1;
  }
`;

const FooterSection = styled.footer`
  text-align: center;
  opacity: ${(props) => (props.isLoaded ? 1 : 0)};
  transform: ${(props) =>
    props.isLoaded ? "translateY(0)" : "translateY(30px)"};
  transition: opacity 0.8s ease, transform 0.8s ease;
  transition-delay: 0.6s;
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: #64748b;
  font-weight: 400;

  ${media.mobile} {
    font-size: 0.9rem;
  }
`;
