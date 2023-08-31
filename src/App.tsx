import { useState } from 'react';
import {
  Header,
  MarkdownGuide,
  MarkdownInput,
  MarkdownOutput,
} from './components';
import { styled } from 'styled-components';

const App = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [markdown, setMarkdown] = useState('# Hello World');

  const handleChange = () => {};
  return (
    <div>
      <Header onToggleGuide={() => setShowGuide((prev) => !prev)} />
      {showGuide && <MarkdownGuide />}
      <Container>
        <MarkdownInput />
        <MarkdownOutput />
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
`;

export default App;
