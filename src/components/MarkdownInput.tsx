import { styled } from 'styled-components';

interface MarkdownInputProps {
  value: string;
  onChange: (text: string) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <StyledTextArea
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 45%;
  height: 70vh;
  margin: 1rem;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export default MarkdownInput;
