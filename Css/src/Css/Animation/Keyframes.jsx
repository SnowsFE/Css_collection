import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Keyframes = () => {
  useEffect(() => {
    // 모든 pre 태그 선택
    const codeBlocks = document.querySelectorAll("pre");

    // 스타일 추가 - 복사됨 메시지를 위한 CSS 클래스
    if (!document.getElementById("copy-style")) {
      const style = document.createElement("style");
      style.id = "copy-style";
      style.textContent = `
        .copied::after {
          content: "";
          position: absolute;
          top: 10px;
          right: 10px;
          width: 20px;
          height: 20px;
          background-image: url("/images/copyOk.svg");
          animation: fade-out 2s forwards;
        }
        
        @keyframes fade-out {
          0% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }

    const handleCodeBlockClick = (e) => {
      const codeBlock = e.currentTarget;
      const code = codeBlock.textContent;

      navigator.clipboard
        .writeText(code)
        .then(() => {
          // 복사 후 클래스 추가
          codeBlock.classList.add("copied");

          // 애니메이션이 끝난 후 클래스 제거
          setTimeout(() => {
            codeBlock.classList.remove("copied");
          }, 2000);
        })
        .catch((err) => console.error("복사 실패:", err));
    };

    // 이벤트 리스너 등록
    codeBlocks.forEach((block) => {
      block.removeEventListener("click", handleCodeBlockClick);
      block.addEventListener("click", handleCodeBlockClick);
      block.style.cursor = "pointer"; // 클릭 가능함을 시각적으로 표시
    });

    // 클린업 함수
    return () => {
      codeBlocks.forEach((block) => {
        block.removeEventListener("click", handleCodeBlockClick);
      });
    };
  }, []);

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
        <Title>키프레임 애니메이션</Title>
        <Subtitle>
          복잡한 움직임을 단계별로 정의하는 CSS 키프레임 애니메이션 예제
        </Subtitle>
      </Header>

      <AnimationGrid>
        {/* 페이드 인/아웃 */}
        <AnimationCard>
          <AnimationTitle>페이드 인/아웃 (Fade)</AnimationTitle>
          <FadeBox />
          <CodeBlock>
            {`const fadeAnimation = keyframes\`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
\`;

animation: \${fadeAnimation} 2s ease infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 바운스 */}
        <AnimationCard>
          <AnimationTitle>바운스 (Bounce)</AnimationTitle>
          <BounceBox />
          <CodeBlock>
            {`const bounceAnimation = keyframes\`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
\`;

animation: \${bounceAnimation} 1s ease infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 펄스 */}
        <AnimationCard>
          <AnimationTitle>펄스 (Pulse)</AnimationTitle>
          <PulseBox />
          <CodeBlock>
            {`const pulseAnimation = keyframes\`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
\`;

animation: \${pulseAnimation} 1.5s ease-in-out infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 회전 */}
        <AnimationCard>
          <AnimationTitle>회전 (Spin)</AnimationTitle>
          <SpinBox />
          <CodeBlock>
            {`const spinAnimation = keyframes\`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
\`;

animation: \${spinAnimation} 2s linear infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 진동 */}
        <AnimationCard>
          <AnimationTitle>진동 (Shake)</AnimationTitle>
          <ShakeBox />
          <CodeBlock>
            {`const shakeAnimation = keyframes\`
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-10px); }
  40%, 80% { transform: translateX(10px); }
\`;

animation: \${shakeAnimation} 0.8s ease-in-out infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 색상 변화 */}
        <AnimationCard>
          <AnimationTitle>색상 변화 (Color Change)</AnimationTitle>
          <ColorChangeBox />
          <CodeBlock>
            {`const colorChangeAnimation = keyframes\`
  0% { background-color: #3b82f6; }
  25% { background-color: #10b981; }
  50% { background-color: #8b5cf6; }
  75% { background-color: #f59e0b; }
  100% { background-color: #3b82f6; }
\`;

animation: \${colorChangeAnimation} 4s linear infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 플립 */}
        <AnimationCard>
          <AnimationTitle>플립 (Flip)</AnimationTitle>
          <FlipBox />
          <CodeBlock>
            {`const flipAnimation = keyframes\`
  0% { transform: perspective(400px) rotateY(0); }
  100% { transform: perspective(400px) rotateY(360deg); }
\`;

animation: \${flipAnimation} 3s ease infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 스윙 */}
        <AnimationCard>
          <AnimationTitle>스윙 (Swing)</AnimationTitle>
          <SwingBox />
          <CodeBlock>
            {`const swingAnimation = keyframes\`
  0% { transform: rotate(0deg); }
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
\`;

animation: \${swingAnimation} 2s ease infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 타닥거림 */}
        <AnimationCard>
          <AnimationTitle>타닥거림 (Wobble)</AnimationTitle>
          <WobbleBox />
          <CodeBlock>
            {`const wobbleAnimation = keyframes\`
  0%, 100% { transform: translateX(0) rotate(0); }
  15% { transform: translateX(-25px) rotate(-5deg); }
  30% { transform: translateX(20px) rotate(3deg); }
  45% { transform: translateX(-15px) rotate(-3deg); }
  60% { transform: translateX(10px) rotate(2deg); }
  75% { transform: translateX(-5px) rotate(-1deg); }
\`;

animation: \${wobbleAnimation} 2.5s ease infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 점프 */}
        <AnimationCard>
          <AnimationTitle>점프 (Jump)</AnimationTitle>
          <JumpBox />
          <CodeBlock>
            {`const jumpAnimation = keyframes\`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  30% {
    transform: translateY(-30px) scale(1);
  }
  50% {
    transform: translateY(0) scale(0.9);
  }
  75% {
    transform: translateY(-15px) scale(1);
  }
\`;

animation: \${jumpAnimation} 2s ease infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 화면 진입 */}
        <AnimationCard>
          <AnimationTitle>화면 진입 (Slide In)</AnimationTitle>
          <SlideInBox />
          <CodeBlock>
            {`const slideInAnimation = keyframes\`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
\`;

animation: \${slideInAnimation} 1.5s ease infinite alternate;`}
          </CodeBlock>
        </AnimationCard>

        {/* 깜빡임 */}
        <AnimationCard>
          <AnimationTitle>깜빡임 (Blink)</AnimationTitle>
          <BlinkBox />
          <CodeBlock>
            {`const blinkAnimation = keyframes\`
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
\`;

animation: \${blinkAnimation} 2s linear infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 흔들림 */}
        <AnimationCard>
          <AnimationTitle>흔들림 (Jello)</AnimationTitle>
          <JelloBox />
          <CodeBlock>
            {`const jelloAnimation = keyframes\`
  0%, 100% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
\`;

animation: \${jelloAnimation} 2s ease infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 심장 박동 */}
        <AnimationCard>
          <AnimationTitle>심장 박동 (Heartbeat)</AnimationTitle>
          <HeartbeatBox />
          <CodeBlock>
            {`const heartbeatAnimation = keyframes\`
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1);
  }
\`;

animation: \${heartbeatAnimation} 1.5s ease infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 폭발 */}
        <AnimationCard>
          <AnimationTitle>폭발 (Explosion)</AnimationTitle>
          <ExplosionBox />
          <CodeBlock>
            {`const explosionAnimation = keyframes\`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
\`;

animation: \${explosionAnimation} 2s ease-in-out infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 입체 회전 */}
        <AnimationCard>
          <AnimationTitle>입체 회전 (3D Cube)</AnimationTitle>
          <Cube3DBox />
          <CodeBlock>
            {`const cube3DAnimation = keyframes\`
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: rotateX(180deg) rotateY(90deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(180deg);
  }
\`;

animation: \${cube3DAnimation} 4s ease infinite;
transform-style: preserve-3d;`}
          </CodeBlock>
        </AnimationCard>

        {/* 그라데이션 */}
        <AnimationCard>
          <AnimationTitle>그라데이션 (Gradient)</AnimationTitle>
          <GradientBox />
          <CodeBlock>
            {`const gradientAnimation = keyframes\`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
\`;

background: linear-gradient(270deg, #3b82f6, #10b981, #8b5cf6, #f59e0b);
background-size: 400% 400%;
animation: \${gradientAnimation} 4s ease infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 원형 확장 */}
        <AnimationCard>
          <AnimationTitle>원형 확장 (Circle Expand)</AnimationTitle>
          <CircleExpandBox />
          <CodeBlock>
            {`const circleExpandAnimation = keyframes\`
  0% {
    transform: scale(0);
    border-radius: 50%;
  }
  50% {
    transform: scale(1);
    border-radius: 50%;
  }
  75% {
    transform: scale(1);
    border-radius: 8px;
  }
  100% {
    transform: scale(0);
    border-radius: 8px;
  }
\`;

animation: \${circleExpandAnimation} 2.5s ease infinite;`}
          </CodeBlock>
        </AnimationCard>

        {/* 텍스트 타이핑 */}
        <AnimationCard>
          <AnimationTitle>텍스트 타이핑 (Typing)</AnimationTitle>
          <TypingTextBox />
          <CodeBlock>
            {`const typingAnimation = keyframes\`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
\`;

const blinkCursorAnimation = keyframes\`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: #000;
  }
\`;

  width: fit-content;
  height: 20px;
  margin: 40px auto;
  overflow: hidden;
  border-right: 2px solid #000;
  white-space: nowrap;
  font-family: monospace;
  font-size: 16px;
  animation: \${typingAnimation} 3.5s steps(36) infinite alternate,
    \${blinkCursorAnimation} 0.7s step-end infinite;

  &:after {
    content: "Typing Animation";
  }`}
          </CodeBlock>
        </AnimationCard>
      </AnimationGrid>
    </Container>
  );
};

export default Keyframes;

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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  ${media.laptop} {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  ${media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.5rem;
  }

  ${media.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.25rem;
  }
`;

// AnimationCard 컴포넌트에 className 추가
const AnimationCard = styled.div.attrs({ className: "animation-card" })`
  position: relative; /* 알림의 absolute 위치 지정을 위해 필요 */
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

const CodeBlock = styled.pre`
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 8px;
  font-family: "Consolas", monospace;
  font-size: 0.9rem;
  overflow-x: auto;
  margin-top: 2rem;
  color: #e2e8f0;

  &::after {
    content: "";
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    background-image: url("/images/copyCode.svg");
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  &:hover::after {
    opacity: 1;
  }
`;

// 페이드 인/아웃 애니메이션
const fadeAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const FadeBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #3b82f6;
  border-radius: 8px;
  margin: 0 auto;
  animation: ${fadeAnimation} 2s ease infinite;
`;

// 바운스 애니메이션
const bounceAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const BounceBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #10b981;
  border-radius: 8px;
  margin: 0 auto;
  animation: ${bounceAnimation} 1s ease infinite;
`;

// 펄스 애니메이션
const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const PulseBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #8b5cf6;
  border-radius: 8px;
  margin: 0 auto;
  animation: ${pulseAnimation} 1.5s ease-in-out infinite;
`;

// 회전 애니메이션
const spinAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpinBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f59e0b;
  border-radius: 8px;
  margin: 0 auto;
  animation: ${spinAnimation} 2s linear infinite;
`;

// 진동 애니메이션
const shakeAnimation = keyframes`
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-10px); }
  40%, 80% { transform: translateX(10px); }
`;

const ShakeBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ec4899;
  border-radius: 8px;
  margin: 0 auto;
  animation: ${shakeAnimation} 0.8s ease-in-out infinite;
`;

// 색상 변화 애니메이션
const colorChangeAnimation = keyframes`
  0% { background-color: #3b82f6; }
  25% { background-color: #10b981; }
  50% { background-color: #8b5cf6; }
  75% { background-color: #f59e0b; }
  100% { background-color: #3b82f6; }
`;

const ColorChangeBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin: 0 auto;
  animation: ${colorChangeAnimation} 4s linear infinite;
`;

// 플립 애니메이션
const flipAnimation = keyframes`
  0% { transform: perspective(400px) rotateY(0); }
  100% { transform: perspective(400px) rotateY(360deg); }
`;

const FlipBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #06b6d4;
  border-radius: 8px;
  margin: 0 auto;
  animation: ${flipAnimation} 3s ease infinite;
`;

// 스윙 애니메이션
const swingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

const SwingBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #14b8a6;
  border-radius: 8px;
  margin: 0 auto;
  transform-origin: top center;
  animation: ${swingAnimation} 2s ease infinite;
`;

// 타닥거림 애니메이션
const wobbleAnimation = keyframes`
  0%, 100% { transform: translateX(0) rotate(0); }
  15% { transform: translateX(-25px) rotate(-5deg); }
  30% { transform: translateX(20px) rotate(3deg); }
  45% { transform: translateX(-15px) rotate(-3deg); }
  60% { transform: translateX(10px) rotate(2deg); }
  75% { transform: translateX(-5px) rotate(-1deg); }
`;

const WobbleBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #6366f1;
  border-radius: 8px;
  margin: 0 auto;
  animation: ${wobbleAnimation} 2.5s ease infinite;
`;

// 점프 애니메이션
const jumpAnimation = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  30% {
    transform: translateY(-30px) scale(1);
  }
  50% {
    transform: translateY(0) scale(0.9);
  }
  75% {
    transform: translateY(-15px) scale(1);
  }
`;

const JumpBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f43f5e;
  border-radius: 8px;
  margin: 0 auto;
  animation: ${jumpAnimation} 2s ease infinite;
`;

// 화면 진입 애니메이션
const slideInAnimation = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SlideInBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #84cc16;
  border-radius: 8px;
  margin: 0 auto;
  animation: ${slideInAnimation} 1.5s ease infinite alternate;
`;

// 깜빡임 애니메이션
const blinkAnimation = keyframes`
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
`;

const BlinkBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #a855f7;
  border-radius: 8px;
  margin: 0 auto;
  animation: ${blinkAnimation} 2s linear infinite;
`;

// 흔들림 애니메이션
const jelloAnimation = keyframes`
  0%, 100% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
`;

const JelloBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fb923c;
  border-radius: 8px;
  margin: 0 auto;
  animation: ${jelloAnimation} 2s ease infinite;
`;

// 심장 박동 애니메이션
const heartbeatAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1);
  }
`;

const HeartbeatBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ef4444;
  border-radius: 8px;
  margin: 0 auto;
  animation: ${heartbeatAnimation} 1.5s ease infinite;
`;

// 폭발 애니메이션
const explosionAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const ExplosionBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f97316;
  border-radius: 50%;
  margin: 0 auto;
  animation: ${explosionAnimation} 2s ease-in-out infinite;
`;

// 입체 회전 애니메이션
const cube3DAnimation = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: rotateX(180deg) rotateY(90deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(180deg);
  }
`;

const Cube3DBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #0ea5e9;
  border-radius: 8px;
  margin: 0 auto;
  animation: ${cube3DAnimation} 4s ease infinite;
  transform-style: preserve-3d;
`;

// 그라데이션 애니메이션
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const GradientBox = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(270deg, #3b82f6, #10b981, #8b5cf6, #f59e0b);
  background-size: 400% 400%;
  border-radius: 8px;
  margin: 0 auto;
  animation: ${gradientAnimation} 4s ease infinite;
`;

// 원형 확장 애니메이션
const circleExpandAnimation = keyframes`
  0% {
    transform: scale(0);
    border-radius: 50%;
  }
  50% {
    transform: scale(1);
    border-radius: 50%;
  }
  75% {
    transform: scale(1);
    border-radius: 8px;
  }
  100% {
    transform: scale(0);
    border-radius: 8px;
  }
`;

const CircleExpandBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #8b5cf6;
  margin: 0 auto;
  animation: ${circleExpandAnimation} 2.5s ease infinite;
`;

// 텍스트 타이핑 애니메이션
const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blinkCursorAnimation = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: #000;
  }
`;

const TypingTextBox = styled.div`
  width: fit-content;
  height: 20px;
  margin: 40px auto;
  overflow: hidden;
  border-right: 2px solid #000;
  white-space: nowrap;
  font-family: monospace;
  font-size: 16px;
  animation: ${typingAnimation} 3.5s steps(36) infinite alternate,
    ${blinkCursorAnimation} 0.7s step-end infinite;

  &:after {
    content: "여러분이 좋아하는 애니메이션 효과는 무엇인가요?";
  }
`;
