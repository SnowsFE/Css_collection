import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Loading = () => {
  return (
    <Container>
      <Header>
        <BackLink to="/css-animations">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#f1f1f1"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path
                strokeDasharray="64"
                strokeDashoffset="64"
                d="M21 12c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.6s"
                  values="64;0"
                />
              </path>
              <path
                strokeDasharray="6"
                strokeDashoffset="6"
                d="M10 12l3 -3M10 12l3 3"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.7s"
                  dur="0.3s"
                  values="6;0"
                />
              </path>
            </g>
          </svg>
        </BackLink>
        <Title>로딩 애니메이션</Title>
        <Subtitle>
          사용자에게 처리 중임을 알려주는 다양한 로딩 애니메이션 효과
        </Subtitle>
      </Header>

      <AnimationGrid>
        {/* 스피너 로딩 */}
        <AnimationCard>
          <AnimationTitle>스피너 (Spinner)</AnimationTitle>
          <AnimationContainer>
            <Spinner />
          </AnimationContainer>
          <CodeBlock>
            {`@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

border: 4px solid rgba(0, 0, 0, 0.1);
border-radius: 50%;
border-top: 4px solid #3498db;
width: 40px;
height: 40px;
animation: spin 1s linear infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 펄스 로딩 */}
        <AnimationCard>
          <AnimationTitle>펄스 (Pulse)</AnimationTitle>
          <AnimationContainer>
            <Pulse />
          </AnimationContainer>
          <CodeBlock>
            {`@keyframes pulse {
  0% { transform: scale(0.8); opacity: 0.5; }
  50% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.8); opacity: 0.5; }
}

width: 40px;
height: 40px;
background-color: #3498db;
border-radius: 50%;
animation: pulse 1.5s ease infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 도트 로딩 */}
        <AnimationCard>
          <AnimationTitle>도트 로딩 (Dots)</AnimationTitle>
          <AnimationContainer>
            <DotContainer>
              <Dot $delay="0s" />
              <Dot $delay="0.2s" />
              <Dot $delay="0.4s" />
            </DotContainer>
          </AnimationContainer>
          <CodeBlock>
            {`@keyframes bounce {
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
}

.dot {
  width: 12px;
  height: 12px;
  background-color: #3498db;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
  animation: bounce 1.4s ease infinite;
  animation-delay: [varies];
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 원형 프로그레스 */}
        <AnimationCard>
          <AnimationTitle>원형 프로그레스 (Circle)</AnimationTitle>
          <AnimationContainer>
            <CircleProgress />
          </AnimationContainer>
          <CodeBlock>
            {`@keyframes circle-progress {
  0% { stroke-dasharray: 0 283; }
  50% { stroke-dasharray: 141.5 141.5; }
  100% { stroke-dasharray: 283 0; }
}

svg {
  width: 50px;
  height: 50px;
  transform: rotate(-90deg);
}

circle {
  fill: transparent;
  stroke: #3498db;
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 0 283;
  animation: circle-progress 2s ease infinite;
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 스켈레톤 로딩 */}
        <AnimationCard>
          <AnimationTitle>스켈레톤 (Skeleton)</AnimationTitle>
          <AnimationContainer>
            <SkeletonContainer>
              <SkeletonLine $width="100%" />
              <SkeletonLine $width="80%" />
              <SkeletonLine $width="60%" />
            </SkeletonContainer>
          </AnimationContainer>
          <CodeBlock>
            {`@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

background: linear-gradient(90deg, 
  #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
background-size: 200% 100%;
border-radius: 4px;
height: 12px;
margin-bottom: 8px;
animation: shimmer 2s infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 타이핑 로딩 */}
        <AnimationCard>
          <AnimationTitle>타이핑 로딩 (Typing)</AnimationTitle>
          <AnimationContainer>
            <TypingLoader />
          </AnimationContainer>
          <CodeBlock>
            {`@keyframes typing {
  0% { width: 0; }
  50% { width: 40px; }
  100% { width: 0; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

width: 0;
height: 20px;
border-right: 2px solid #3498db;
white-space: nowrap;
overflow: hidden;
animation: 
  typing 2s steps(20) infinite,
  blink 0.5s step-end infinite alternate;`}
          </CodeBlock>
        </AnimationCard>

        {/* 파도 로딩 */}
        <AnimationCard>
          <AnimationTitle>파도 로딩 (Wave)</AnimationTitle>
          <AnimationContainer>
            <WaveContainer>
              <WaveBar $delay="0s" />
              <WaveBar $delay="0.2s" />
              <WaveBar $delay="0.4s" />
              <WaveBar $delay="0.6s" />
              <WaveBar $delay="0.8s" />
            </WaveContainer>
          </AnimationContainer>
          <CodeBlock>
            {`@keyframes wave {
  0%, 100% { transform: scaleY(0.5); }
  50% { transform: scaleY(1); }
}

.bar {
  width: 8px;
  height: 40px;
  margin: 0 4px;
  background-color: #3498db;
  border-radius: 4px;
  animation: wave 1.2s ease-in-out infinite;
  animation-delay: [varies];
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 시계 로딩 */}
        <AnimationCard>
          <AnimationTitle>시계 로딩 (Clock)</AnimationTitle>
          <AnimationContainer>
            <ClockLoader />
          </AnimationContainer>
          <CodeBlock>
            {`@keyframes rotate-clock {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

width: 40px;
height: 40px;
border: 3px solid #f3f3f3;
border-radius: 50%;
position: relative;

&:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 15px;
  background-color: #3498db;
  margin-left: -1px;
  transform-origin: 0% 0%;
  animation: rotate-clock 2s linear infinite;
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 그라데이션 회전 */}
        <AnimationCard>
          <AnimationTitle>그라데이션 회전 (Gradient)</AnimationTitle>
          <AnimationContainer>
            <GradientLoader />
          </AnimationContainer>
          <CodeBlock>
            {`@keyframes gradient-rotation {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

width: 50px;
height: 50px;
border-radius: 50%;
background: conic-gradient(
  #3498db, #9b59b6, #e74c3c, #f1c40f, #3498db
);
animation: gradient-rotation 3s linear infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 텍스트 로딩 */}
        <AnimationCard>
          <AnimationTitle>텍스트 로딩 (Text)</AnimationTitle>
          <AnimationContainer>
            <TextLoader>
              Loading<TextDot $delay="0s">.</TextDot>
              <TextDot $delay="0.5s">.</TextDot>
              <TextDot $delay="1s">.</TextDot>
            </TextLoader>
          </AnimationContainer>
          <CodeBlock>
            {`@keyframes fade-in-out {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.dot {
  display: inline-block;
  animation: fade-in-out 1.5s infinite;
  animation-delay: [varies];
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 물결 효과 */}
        <AnimationCard>
          <AnimationTitle>물결 효과 (Ripple)</AnimationTitle>
          <AnimationContainer>
            <RippleContainer>
              <RippleCircle $delay="0s" />
              <RippleCircle $delay="1s" />
              <RippleCircle $delay="2s" />
            </RippleContainer>
          </AnimationContainer>
          <CodeBlock>
            {`@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

position: absolute;
width: 50px;
height: 50px;
border: 2px solid #3498db;
border-radius: 50%;
animation: ripple 3s linear infinite;
animation-delay: [varies];`}
          </CodeBlock>
        </AnimationCard>

        {/* 음성파 로딩 */}
        <AnimationCard>
          <AnimationTitle>음성파 로딩 (Audio Wave)</AnimationTitle>
          <AnimationContainer>
            <AudioWaveContainer>
              {[...Array(10)].map((_, index) => (
                <AudioBar key={index} $delay={`${index * 0.1}s`} />
              ))}
            </AudioWaveContainer>
          </AnimationContainer>
          <CodeBlock>
            {`@keyframes audio-wave {
  0%, 100% { transform: scaleY(0.3); }
  50% { transform: scaleY(1); }
}

.bar {
  width: 4px;
  height: 30px;
  margin: 0 2px;
  background-color: #3498db;
  animation: audio-wave 1s ease-in-out infinite;
  animation-delay: [varies];
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 진행바 */}
        <AnimationCard>
          <AnimationTitle>진행바 (Progress Bar)</AnimationTitle>
          <AnimationContainer>
            <ProgressBarContainer>
              <ProgressBar />
              <ProgressText>Loading...</ProgressText>
            </ProgressBarContainer>
          </AnimationContainer>
          <CodeBlock>
            {`@keyframes progress {
  0% { width: 0%; }
  100% { width: 100%; }
}

.bar {
  height: 8px;
  background-color: #3498db;
  border-radius: 4px;
  animation: progress 3.5s ease-in-out infinite;
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 미니멀 로딩 */}
        <AnimationCard>
          <AnimationTitle>미니멀 로딩 (Minimal)</AnimationTitle>
          <AnimationContainer>
            <MinimalLoader />
          </AnimationContainer>
          <CodeBlock>
            {`@keyframes minimal-fade {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

width: 10px;
height: 10px;
background-color: #3498db;
border-radius: 50%;
animation: minimal-fade 1s linear infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 플립 카드 로딩 */}
        <AnimationCard>
          <AnimationTitle>플립 카드 로딩 (Flip Card)</AnimationTitle>
          <AnimationContainer>
            <FlipCardContainer>
              <FlipCard>
                <FrontFace>Loading</FrontFace>
                <BackFace>Please Wait</BackFace>
              </FlipCard>
            </FlipCardContainer>
          </AnimationContainer>
          <CodeBlock>
            {`@keyframes flip {
  0%, 100% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
}

.card {
  position: relative;
  width: 100px;
  height: 40px;
  transform-style: preserve-3d;
  animation: flip 2.5s linear infinite;
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.back-face {
  transform: rotateY(180deg);
}`}
          </CodeBlock>
        </AnimationCard>
      </AnimationGrid>
    </Container>
  );
};

export default Loading;

// 미디어 쿼리 정의
const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
};

const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  laptop: `@media (max-width: ${breakpoints.laptop})`,
};

// 스타일 컴포넌트
const Container = styled.div`
  background: linear-gradient(to bottom, #0f172a, #1e293b);
  min-height: 100vh;
  padding: 2rem;
  font-family: "Noto Sans KR", sans-serif;
  color: #e2e8f0;

  ${media.tablet} {
    padding: 1.5rem;
  }

  ${media.mobile} {
    padding: 1rem;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  ${media.mobile} {
    margin-bottom: 2rem;
  }
`;

const BackLink = styled(Link)`
  display: block;
  margin-bottom: 1rem;
  text-decoration: none;
  font-size: 1rem;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #60a5fa, #a78bfa);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${media.mobile} {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #94a3b8;

  ${media.mobile} {
    font-size: 1rem;
  }
`;

const AnimationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  gap: 2rem;

  ${media.laptop} {
    grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  }

  ${media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
    gap: 1.5rem;
  }

  ${media.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
    gap: 1.25rem;
  }
`;

const AnimationCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(99, 102, 241, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15), 0 0 30px rgba(99, 102, 241, 0.3);
  }
`;

const AnimationTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #f1f5f9;
`;

const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const CodeBlock = styled.pre`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 8px;
  font-family: "Consolas", monospace;
  font-size: 0.9rem;
  overflow-x: auto;
  margin-top: 2rem;
  color: #e2e8f0;
`;

// 스피너 애니메이션
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

// 펄스 애니메이션
const pulse = keyframes`
  0% { transform: scale(0.8); opacity: 0.5; }
  50% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.8); opacity: 0.5; }
`;

const Pulse = styled.div`
  width: 40px;
  height: 40px;
  background-color: #3498db;
  border-radius: 50%;
  animation: ${pulse} 1.5s ease infinite;
`;

// 도트 로딩 애니메이션
const bounce = keyframes`
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
`;

const DotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #3498db;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
  animation: ${bounce} 1.4s ease infinite;
  animation-delay: ${(props) => props.$delay};
`;

// 원형 프로그레스 애니메이션
const circleProgress = keyframes`
  0% { stroke-dasharray: 0 283; }
  50% { stroke-dasharray: 141.5 141.5; }
  100% { stroke-dasharray: 283 0; }
`;

const StyledCircle = styled.circle`
  fill: transparent;
  stroke: #3498db;
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 0 283;
  animation: ${circleProgress} 2s ease infinite;
`;

const CircleProgress = () => (
  <svg
    viewBox="0 0 100 100"
    width="50"
    height="50"
    style={{ transform: "rotate(-90deg)" }}
  >
    <StyledCircle cx="50" cy="50" r="45" />
  </svg>
);

// 스켈레톤 로딩 애니메이션
const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonContainer = styled.div`
  width: 100%;
  max-width: 200px;
`;

const SkeletonLine = styled.div`
  height: 12px;
  width: ${(props) => props.$width || "100%"};
  margin-bottom: 8px;
  border-radius: 4px;

  /* 그라데이션과 애니메이션을 직접 배경에 적용 */
  background: linear-gradient(90deg, #e2e5e7 0%, #f0f0f0 50%, #e2e5e7 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

// 타이핑 로딩 애니메이션
const typing = keyframes`
  0% { width: 0; }
  50% { width: 40px; }
  100% { width: 0; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

const TypingLoader = styled.div`
  width: 0;
  height: 20px;
  border-right: 2px solid #3498db;
  white-space: nowrap;
  overflow: hidden;
  animation: ${typing} 2s steps(20) infinite,
    ${blink} 0.5s step-end infinite alternate;
`;

// 파도 로딩 애니메이션
const wave = keyframes`
  0%, 100% { transform: scaleY(0.5); }
  50% { transform: scaleY(1); }
`;

const WaveContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

const WaveBar = styled.div`
  width: 8px;
  height: 40px;
  margin: 0 4px;
  background-color: #3498db;
  border-radius: 4px;
  animation: ${wave} 1.2s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay};
  transform-origin: center bottom;
`;

// 시계 로딩 애니메이션
const rotateClock = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ClockLoader = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 15px;
    background-color: #3498db;
    margin-left: -1px;
    transform-origin: 0% 0%;
    animation: ${rotateClock} 2s linear infinite;
  }
`;

// 그라데이션 회전 애니메이션
const gradientRotation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const GradientLoader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(#3498db, #9b59b6, #e74c3c, #f1c40f, #3498db);
  animation: ${gradientRotation} 3s linear infinite;
`;

// 텍스트 로딩 애니메이션
const fadeInOut = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

const TextLoader = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #3498db;
`;

const TextDot = styled.span`
  display: inline-block;
  animation: ${fadeInOut} 1.5s infinite;
  animation-delay: ${(props) => props.$delay};
`;

// 물결 효과 애니메이션
const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const RippleContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`;

// 물결 효과 애니메이션 (이어서)
const RippleCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  border: 2px solid #3498db;
  border-radius: 50%;
  animation: ${ripple} 3s linear infinite;
  animation-delay: ${(props) => props.$delay};
`;

// 음성파 로딩 애니메이션
const audioWave = keyframes`
  0%, 100% { transform: scaleY(0.3); }
  50% { transform: scaleY(1); }
`;

const AudioWaveContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;

const AudioBar = styled.div`
  width: 4px;
  height: 30px;
  margin: 0 2px;
  background-color: #3498db;
  animation: ${audioWave} 1s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay};
  transform-origin: center bottom;
`;

// 진행바 애니메이션
const progress = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  max-width: 200px;
  position: relative;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f3f3f3;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #3498db;
    border-radius: 4px;
    animation: ${progress} 3.5s ease-in-out infinite;
  }
`;

const ProgressText = styled.div`
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
  color: #f1f5f9;
`;

// 미니멀 로딩 애니메이션
const minimalFade = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

const MinimalLoader = styled.div`
  width: 10px;
  height: 10px;
  background-color: #3498db;
  border-radius: 50%;
  animation: ${minimalFade} 1s linear infinite;
`;

// 플립 카드 로딩 애니메이션
const flip = keyframes`
  0%, 100% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
`;

const FlipCardContainer = styled.div`
  perspective: 1000px;
`;

const FlipCard = styled.div`
  position: relative;
  width: 100px;
  height: 40px;
  transform-style: preserve-3d;
  animation: ${flip} 2.5s linear infinite;
`;

const FaceStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
`;

const FrontFace = styled(FaceStyle)`
  background-color: #3498db;
  color: f1f5f9;
`;

const BackFace = styled(FaceStyle)`
  background-color: #2980b9;
  color: f1f5f9;
  transform: rotateY(180deg);
`;
