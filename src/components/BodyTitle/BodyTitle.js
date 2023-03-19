import { Title } from './styled';

export default function BodyTitle({ children, textSize }) { 
  return (
		<Title textSize={textSize}>{children}</Title>
	);
}