import { styled } from 'styled-components';

interface MarkdownInputProps {
  value: string;
  onChange: () => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <StyledTextArea></StyledTextArea>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 50%;
  height: 70vh;
`;

const StyledTextArea = styled.textarea``;

export default MarkdownInput;
