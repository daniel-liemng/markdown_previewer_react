import { styled } from 'styled-components';

const MarkdownGuide = () => {
  return (
    <GuideContainer>
      <code># H1</code>
      <code>## H2</code>
      <code>### H3</code>
      <code>**bold**</code>
      <code>*italic*</code>
      <code>[Link](http://a.com)</code>
      <code>![Image](http://url/a.png)</code>
      <code>`inline code`</code>
      <code>```block code```</code>
      <code>-list</code>
    </GuideContainer>
  );
};

const GuideContainer = styled.div`
  padding: 1rem;
  margin: 7px;
  background-color: #d1d5db;

  code {
    display: block;
    margin-bottom: 10px;
  }
`;

export default MarkdownGuide;
