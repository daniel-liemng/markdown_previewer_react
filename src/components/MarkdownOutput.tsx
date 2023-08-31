import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { styled } from 'styled-components';

interface MarkdownOutputProps {
  markdown: string;
}

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <ReactMarkdown children={markdown} />
    </OutputContainer>
  );
};

const OutputContainer = styled.div`
  width: 45%;
  height: 70vh;
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
`;

export default MarkdownOutput;
