import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TransEffect = () => {
  return (
    <Container>
      <Header>
        <BackLink to="/css-animations">← 애니메이션 메인으로</BackLink>
        <Title>변형 효과</Title>
        <Subtitle>
          회전, 크기 조절, 기울임 등 요소의 형태를 변경하는 다양한 변형 효과
        </Subtitle>
      </Header>

      <AnimationGrid>
        {/* 기본 변형 효과 섹션 */}
        <SectionTitle>기본 변형 효과 (Basic Transforms)</SectionTitle>

        {/* 회전 변형 */}
        <AnimationCard>
          <AnimationTitle>회전 (Rotate)</AnimationTitle>
          <RotateBox />
          <CodeBlock>
            {`transform: rotate(0deg);
transition: transform 0.3s ease;
&:hover {
  transform: rotate(45deg);
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 확대/축소 변형 */}
        <AnimationCard>
          <AnimationTitle>확대/축소 (Scale)</AnimationTitle>
          <ScaleBox />
          <CodeBlock>
            {`transform: scale(1);
transition: transform 0.3s ease;
&:hover {
  transform: scale(1.2);
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 이동 변형 */}
        <AnimationCard>
          <AnimationTitle>이동 (Translate)</AnimationTitle>
          <TranslateBox />
          <CodeBlock>
            {`transform: translateY(0);
transition: transform 0.3s ease;
&:hover {
  transform: translateY(-20px);
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 기울임 변형 */}
        <AnimationCard>
          <AnimationTitle>기울임 (Skew)</AnimationTitle>
          <SkewBox />
          <CodeBlock>
            {`transform: skew(0deg);
transition: transform 0.3s ease;
&:hover {
  transform: skew(15deg);
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 원근감 변형 */}
        <AnimationCard>
          <AnimationTitle>원근감 (Perspective)</AnimationTitle>
          <PerspectiveContainer>
            <PerspectiveBox />
          </PerspectiveContainer>
          <CodeBlock>
            {`perspective: 500px;
.box {
  transition: transform 0.3s ease;
  transform: rotateY(0deg);
  &:hover {
    transform: rotateY(45deg);
  }
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 3D 플립 효과 - 추가 */}
        <AnimationCard>
          <AnimationTitle>3D 플립 (Flip)</AnimationTitle>
          <FlipContainer>
            <FlipBox>
              <FlipFront>앞면</FlipFront>
              <FlipBack>뒷면</FlipBack>
            </FlipBox>
          </FlipContainer>
          <CodeBlock>
            {`perspective: 1000px;
.flip-box {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  &:hover {
    transform: rotateY(180deg);
  }
}
.front, .back {
  position: absolute;
  backface-visibility: hidden;
}
.back {
  transform: rotateY(180deg);
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 다중 변형 */}
        <AnimationCard>
          <AnimationTitle>다중 변형 (Multiple)</AnimationTitle>
          <MultiTransformBox />
          <CodeBlock>
            {`transform: scale(1) rotate(0deg);
transition: transform 0.3s ease;
&:hover {
  transform: scale(1.2) rotate(15deg) translateX(10px);
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 반사 효과 */}
        <AnimationCard>
          <AnimationTitle>반사 효과 (Reflection)</AnimationTitle>
          <ReflectionContainer>
            <ReflectionBox />
          </ReflectionContainer>
          <CodeBlock>
            {`transform-style: preserve-3d;
transition: transform 0.4s ease;
&::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 30px;
  bottom: -30px;
  background: linear-gradient(to bottom, rgba(52, 211, 153, 0.6), transparent);
  transform: rotateX(90deg);
  transform-origin: bottom;
  opacity: 0.3;
}
&:hover {
  transform: rotateX(-20deg);
}
&:hover::after {
  opacity: 0.8;
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 물결 효과 */}
        <AnimationCard>
          <AnimationTitle>물결 효과 (Wave)</AnimationTitle>
          <WaveBox />
          <CodeBlock>
            {`transition: border-radius 0.4s ease-in-out;
&:hover {
  animation: wave 1s ease-in-out infinite;
}
@keyframes wave {
  0% { border-radius: 8px; }
  25% { border-radius: 25px 8px 25px 8px; }
  50% { border-radius: 8px 25px 8px 25px; }
  75% { border-radius: 25px 8px 25px 8px; }
  100% { border-radius: 8px; }
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 트랜지션 효과 섹션 */}
        <SectionTitle>트랜지션 효과 (Transitions)</SectionTitle>

        {/* 색상 변경 트랜지션 */}
        <AnimationCard>
          <AnimationTitle>색상 변경</AnimationTitle>
          <ColorTransitionBox />
          <CodeBlock>
            {`transition: background-color 0.5s ease;
&:hover {
  background-color: #ff6b6b;
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 크기 변경 트랜지션 */}
        <AnimationCard>
          <AnimationTitle>크기 변경</AnimationTitle>
          <ScaleTransitionBox />
          <CodeBlock>
            {`transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
&:hover {
  transform: scale(1.15);
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 그림자 효과 트랜지션 */}
        <AnimationCard>
          <AnimationTitle>그림자 효과</AnimationTitle>
          <ShadowTransitionBox />
          <CodeBlock>
            {`transition: box-shadow 0.3s ease;
&:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 테두리 트랜지션 */}
        <AnimationCard>
          <AnimationTitle>테두리 변화</AnimationTitle>
          <BorderTransitionBox />
          <CodeBlock>
            {`transition: border-radius 0.4s ease;
&:hover {
  border-radius: 50%;
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 투명도 트랜지션 */}
        <AnimationCard>
          <AnimationTitle>투명도 변화</AnimationTitle>
          <OpacityTransitionBox />
          <CodeBlock>
            {`transition: opacity 0.3s ease;
&:hover {
  opacity: 0.5;
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 필터 효과 - 추가 */}
        <AnimationCard>
          <AnimationTitle>필터 효과 (Filter)</AnimationTitle>
          <FilterBox />
          <CodeBlock>
            {`transition: filter 0.4s ease;
&:hover {
  filter: blur(2px) brightness(1.2) contrast(1.4);
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 그라데이션 변화 - 추가 */}
        <AnimationCard>
          <AnimationTitle>그라데이션 변화</AnimationTitle>
          <GradientBox />
          <CodeBlock>
            {`background: linear-gradient(45deg, #3b82f6, #8b5cf6);
background-size: 200% 200%;
background-position: 0% 0%;
transition: background-position 0.5s ease;
&:hover {
  background-position: 100% 100%;
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 다중 속성 트랜지션 */}
        <AnimationCard>
          <AnimationTitle>다중 속성 변화</AnimationTitle>
          <MultiTransitionBox />
          <CodeBlock>
            {`transition: all 0.5s ease;
&:hover {
  background-color: #4d8aff;
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 텍스트 오버레이 트랜지션 */}
        <AnimationCard>
          <AnimationTitle>텍스트 오버레이 트랜지션</AnimationTitle>
          <TextOverlayContainer>
            <TextOverlayCard>
              <TextOverlayImage />
              <TextOverlay>오버레이 텍스트</TextOverlay>
            </TextOverlayCard>
          </TextOverlayContainer>
          <CodeBlock>
            {`position: relative;
overflow: hidden;

.image {
  transition: transform 0.4s ease;
}
.overlay {
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translateY(100%);
  transition: transform 0.4s ease;
}
&:hover .image {
  transform: scale(1.1);
}
&:hover .overlay {
  transform: translateY(0);
}`}
          </CodeBlock>
        </AnimationCard>

        <SectionTitle>텍스트 효과 (Text Effects)</SectionTitle>

        {/* 텍스트 강조 효과 - 기존 */}
        <AnimationCard>
          <AnimationTitle>텍스트 강조 효과</AnimationTitle>
          <TextHighlightContainer>
            <TextHighlight>마우스를 올려보세요</TextHighlight>
          </TextHighlightContainer>
          <CodeBlock>
            {`position: relative;
&::after {
  content: '';
  position: absolute;
  width: 0;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #ff6b6b;
  transition: width 0.3s ease;
}
&:hover::after {
  width: 100%;
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 텍스트 색상 변화 */}
        <AnimationCard>
          <AnimationTitle>텍스트 색상 변화</AnimationTitle>
          <TextColorTransition>색상이 변하는 텍스트</TextColorTransition>
          <CodeBlock>
            {`font-size: 1.2rem;
color: #333;
transition: color 0.3s ease;
&:hover {
  color: #ff6b6b;
  text-shadow: 0 0 8px rgba(255, 107, 107, 0.4);
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 텍스트 크기 변화 */}
        <AnimationCard>
          <AnimationTitle>텍스트 크기 변화</AnimationTitle>
          <TextSizeTransition>크기가 변하는 텍스트</TextSizeTransition>
          <CodeBlock>
            {`font-size: 1.2rem;
transition: font-size 0.3s ease, font-weight 0.3s ease;
&:hover {
  font-size: 1.5rem;
  font-weight: 700;
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 텍스트 자간 변화 */}
        <AnimationCard>
          <AnimationTitle>텍스트 자간 변화</AnimationTitle>
          <TextSpacingTransition>자간이 변하는 텍스트</TextSpacingTransition>
          <CodeBlock>
            {`font-size: 1.2rem;
letter-spacing: 1px;
transition: letter-spacing 0.4s ease;
&:hover {
  letter-spacing: 5px;
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 텍스트 그라데이션 효과 */}
        <AnimationCard>
          <AnimationTitle>텍스트 그라데이션</AnimationTitle>
          <TextGradient>그라데이션 텍스트</TextGradient>
          <CodeBlock>
            {`font-size: 1.5rem;
font-weight: 700;
background: linear-gradient(45deg, #3b82f6 0%, #ec4899 100%);
background-size: 200% auto;
background-position: 0% center;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
transition: background-position 0.5s ease;
&:hover {
  background-position: 100% center;
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 텍스트 타이핑 효과 */}
        <AnimationCard>
          <AnimationTitle>텍스트 타이핑 효과</AnimationTitle>
          <TypingTextContainer>
            <TypingText>타이핑되는 텍스트 효과</TypingText>
          </TypingTextContainer>
          <CodeBlock>
            {`overflow: hidden;
border-right: 2px solid #f1f5f9;
white-space: nowrap;
margin: 0 auto;
width: 0;
animation: typing 3s steps(22) 1s forwards, 
           cursor 0.4s step-end infinite alternate;

@keyframes typing {
  to { width: 100%; }
}
@keyframes cursor {
  50% { border-color: transparent; }
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 텍스트 흔들림 효과 */}
        <AnimationCard>
          <AnimationTitle>텍스트 흔들림 효과</AnimationTitle>
          <ShakeTextContainer>
            <ShakeText>마우스를 올리면 흔들려요</ShakeText>
          </ShakeTextContainer>
          <CodeBlock>
            {`display: inline-block;
font-size: 1.2rem;
transition: transform 0.1s ease;
&:hover {
  animation: shake 0.5s ease-in-out infinite;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 텍스트 글자 간격 확장 효과 */}
        <AnimationCard>
          <AnimationTitle>글자 간격 확장 효과</AnimationTitle>
          <LetterSpacingContainer>
            <LetterSpacingText>
              <span>움</span>
              <span>직</span>
              <span>이</span>
              <span>는</span>
              <span>&nbsp;</span>
              <span>글</span>
              <span>자</span>
            </LetterSpacingText>
          </LetterSpacingContainer>
          <CodeBlock>
            {`span {
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
}
&:hover span {
  color: #3b82f6;
}
&:hover span:nth-child(odd) {
  transform: translateY(-5px);
}
&:hover span:nth-child(even) {
  transform: translateY(5px);
}`}
          </CodeBlock>
        </AnimationCard>

        {/* 3D 텍스트 효과 */}
        <AnimationCard>
          <AnimationTitle>3D 텍스트 효과</AnimationTitle>
          <Text3DContainer>
            <Text3D>3D 텍스트</Text3D>
          </Text3DContainer>
          <CodeBlock>
            {`font-size: 1.8rem;
font-weight: 800;
color: #333;
text-shadow: 0 1px 0 #ccc,
           0 2px 0 #c9c9c9,
           0 3px 0 #bbb,
           0 4px 0 #b9b9b9,
           0 5px 0 #aaa,
           0 6px 1px rgba(0,0,0,.1);
transition: all 0.3s ease;
&:hover {
  color: #3b82f6;
  transform: scale(1.1) rotate(2deg);
  text-shadow: 0 1px 0 #5a9cff,
             0 2px 0 #4d8aff, 
             0 3px 0 #3b82f6,
             0 4px 0 #2563eb,
             0 5px 0 #1d4ed8;
}`}
          </CodeBlock>
        </AnimationCard>
      </AnimationGrid>
    </Container>
  );
};

export default TransEffect;

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
  color: #666;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #333;
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

const SectionTitle = styled.h2`
  grid-column: 1 / -1;
  font-size: 1.6rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
  color: #f1f5f9;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eaeaea;

  ${media.mobile} {
    font-size: 1.4rem;
    margin: 1.5rem 0 0.75rem;
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

  ${media.mobile} {
    padding: 1.25rem;
  }
`;

const AnimationTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #f1f5f9;
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

// 회전 변형
const RotateBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #3b82f6;
  border-radius: 8px;
  margin: 0 auto;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: rotate(45deg);
  }
`;

// 확대/축소 변형
const ScaleBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #10b981;
  border-radius: 8px;
  margin: 0 auto;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

// 이동 변형
const TranslateBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #8b5cf6;
  border-radius: 8px;
  margin: 0 auto;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-20px);
  }
`;

// 기울임 변형
const SkewBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f59e0b;
  border-radius: 8px;
  margin: 0 auto;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: skew(15deg);
  }
`;

// 원근감 변형
const PerspectiveContainer = styled.div`
  perspective: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PerspectiveBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ec4899;
  border-radius: 8px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: rotateY(45deg);
  }
`;

// 3D 플립 효과 - 추가
const FlipContainer = styled.div`
  perspective: 1000px;
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

const FlipBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const FlipFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #0ea5e9;
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const FlipBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #14b8a6;
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  font-weight: 600;
`;

// 다중 변형
const MultiTransformBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #6366f1;
  border-radius: 8px;
  margin: 0 auto;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2) rotate(15deg) translateX(10px);
  }
`;

// 색상 변경 트랜지션
const ColorTransitionBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: #3b82f6;
  border-radius: 8px;
  transition: background-color 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #ff6b6b;
  }
`;

// 크기 변경 트랜지션
const ScaleTransitionBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: #10b981;
  border-radius: 8px;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;

  &:hover {
    transform: scale(1.15);
  }
`;

// 그림자 효과 트랜지션
const ShadowTransitionBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: #8b5cf6;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

// 테두리 변화 트랜지션
const BorderTransitionBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f59e0b;
  border-radius: 8px;
  transition: border-radius 0.4s ease;
  cursor: pointer;

  &:hover {
    border-radius: 50%;
  }
`;

// 투명도 트랜지션
const OpacityTransitionBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ec4899;
  border-radius: 8px;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

// 필터 효과 - 추가
const FilterBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: #0ea5e9;
  border-radius: 8px;
  transition: filter 0.4s ease;
  cursor: pointer;
  background-image: url("/api/placeholder/100/100");
  background-size: cover;
  background-position: center;

  &:hover {
    filter: blur(2px) brightness(1.2) contrast(1.4);
  }
`;

// 그라데이션 변화 - 추가
const GradientBox = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  background-size: 200% 200%;
  background-position: 0% 0%;
  border-radius: 8px;
  transition: background-position 0.5s ease;
  cursor: pointer;

  &:hover {
    background-position: 100% 100%;
  }
`;

// 텍스트 강조 효과 - 추가
const TextHighlightContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextHighlight = styled.span`
  position: relative;
  font-size: 1.2rem;
  font-weight: 500;
  color: #f1f5f9;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    bottom: -5px;
    left: 0;
    background-color: #ff6b6b;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

// 다중 속성 트랜지션
const MultiTransitionBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: #6366f1;
  border-radius: 8px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #4d8aff;
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

// 텍스트 색상 변화
const TextColorTransition = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #f1f5f9;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
    text-shadow: 0 0 8px rgba(255, 107, 107, 0.4);
  }
`;

// 텍스트 크기 변화
const TextSizeTransition = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: font-size 0.3s ease, font-weight 0.3s ease;
  cursor: pointer;

  &:hover {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

// 텍스트 자간 변화
const TextSpacingTransition = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  letter-spacing: 1px;
  transition: letter-spacing 0.4s ease;
  cursor: pointer;

  &:hover {
    letter-spacing: 5px;
  }
`;

// 텍스트 그라데이션 효과
const TextGradient = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #3b82f6 0%, #ec4899 100%);
  background-size: 200% auto;
  background-position: 0% center;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: background-position 0.5s ease;
  cursor: pointer;

  &:hover {
    background-position: 100% center;
  }
`;

// 텍스트 타이핑 효과
const TypingTextContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TypingText = styled.div`
  font-size: 1.2rem;
  overflow: hidden;
  border-right: 2px solid #f1f5f9;
  white-space: nowrap;
  margin: 0 auto;
  width: 0;
  animation: typing 3s steps(22) 1s forwards,
    cursor 0.4s step-end infinite alternate;

  @keyframes typing {
    to {
      width: 100%;
    }
  }
  @keyframes cursor {
    50% {
      border-color: transparent;
    }
  }
`;

// 텍스트 흔들림 효과
const ShakeTextContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShakeText = styled.div`
  display: inline-block;
  font-size: 1.2rem;
  transition: transform 0.1s ease;
  cursor: pointer;

  &:hover {
    animation: shake 0.5s ease-in-out infinite;
  }

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

// ===== 기본 변형 효과 추가 (2개) =====

// 1. 반사 효과 (Reflection)
const ReflectionContainer = styled.div`
  perspective: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReflectionBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #34d399;
  border-radius: 8px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.4s ease;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 30px;
    bottom: -30px;
    background: linear-gradient(
      to bottom,
      rgba(52, 211, 153, 0.6),
      transparent
    );
    transform: rotateX(90deg);
    transform-origin: bottom;
    opacity: 0.3;
  }

  &:hover {
    transform: rotateX(-20deg);
  }

  &:hover::after {
    opacity: 0.8;
  }
`;

// 2. 물결 효과 (Wave Transform)
const WaveBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #60a5fa;
  border-radius: 8px;
  margin: 0 auto;
  transition: border-radius 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    animation: wave 1s ease-in-out infinite;
  }

  @keyframes wave {
    0% {
      border-radius: 8px;
    }
    25% {
      border-radius: 25px 8px 25px 8px;
    }
    50% {
      border-radius: 8px 25px 8px 25px;
    }
    75% {
      border-radius: 25px 8px 25px 8px;
    }
    100% {
      border-radius: 8px;
    }
  }
`;

// ===== 트랜지션 효과 추가 (1개) =====

// 1. 텍스트 오버레이 트랜지션
const TextOverlayContainer = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
`;

const TextOverlayImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #8b5cf6;
  transition: transform 0.4s ease;
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  transform: translateY(100%);
  transition: transform 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextOverlayCard = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100px;

  &:hover ${TextOverlayImage} {
    transform: scale(1.1);
  }

  &:hover ${TextOverlay} {
    transform: translateY(0);
  }
`;

// ===== 텍스트 효과 추가 (2개) =====

// 1. 텍스트 글자 간격 확장 효과
const LetterSpacingContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LetterSpacingText = styled.div`
  font-size: 1.2rem;
  font-weight: 500;

  span {
    display: inline-block;
    transition: transform 0.3s ease, color 0.3s ease;
    color: #f1f5f9;
  }

  &:hover span {
    color: #3b82f6;
  }

  &:hover span:nth-child(odd) {
    transform: translateY(-5px);
  }

  &:hover span:nth-child(even) {
    transform: translateY(5px);
  }
`;

// 2. 3D 텍스트 효과
const Text3DContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text3D = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: #f1f5f9;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #3b82f6;
    transform: scale(1.1) rotate(2deg);
    text-shadow: 0 1px 0 #5a9cff, 0 2px 0 #4d8aff, 0 3px 0 #3b82f6,
      0 4px 0 #2563eb, 0 5px 0 #1d4ed8, 0 6px 1px rgba(59, 130, 246, 0.1),
      0 0 5px rgba(59, 130, 246, 0.1), 0 1px 3px rgba(59, 130, 246, 0.3),
      0 3px 5px rgba(59, 130, 246, 0.2), 0 5px 10px rgba(59, 130, 246, 0.25);
  }
`;
