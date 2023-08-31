import styled from 'styled-components';

interface HeaderProps {
  onToggleGuide: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={() => onToggleGuide()}>Cheatsheet</Button>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #c084fc;
`;

const Title = styled.h3`
  color: #f43f5e;
  font-size: 2rem;
  text-transform: uppercase;
`;

const Button = styled.button`
  color: white;
  background-color: #f43f5e;
  padding: 10px 20px 10px;
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: all 0.5s ease-in;

  &:hover {
    background-color: #be123c;
    color: white;
  }
`;

export default Header;
