import { styled } from 'styled-components';

const MarkdownGuide = () => {
  return (
    <GuideContainer>
      <code>*Italic*</code>
      <code>**Bold**</code>
      <code># Heading 1</code>
      <code>## Heading 2</code>
      <code>[Link](http://a.com)</code>
      <code>![Image](http://url/a.png)</code>
      <code>![Image](http://url/a.png)</code>
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
