import { Button } from "./styled";

export default function ButtonPrimary ({ children }) {
	return (
		<Button type='button'>{children}</Button>
	);
}