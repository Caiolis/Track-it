import { Title } from './styled';

export default function BodyTitle({ children, textSize, textMargin }) { 
  return (
		<Title textSize={textSize} textMargin={textMargin}>{children}</Title>
	);
}