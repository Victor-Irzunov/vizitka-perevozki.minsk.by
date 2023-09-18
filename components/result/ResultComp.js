import { Button, Result } from 'antd';
import Link from 'next/link';
const ResultComp = ({ link }) => (
	<Result
		status="success"
		title="Ваш заказ на аренду техники отправлен!"
		subTitle="Мы в ближайшее время свяжемся с вами, чтобы обсудить детали вашего заказа и предоставить всю необходимую информацию."
		extra={[
			<Button type="primary" >
				<Link href='/'>
					На главную
				</Link>
			</Button>,
			<Button >
				<Link href={`/uslugi/${link}`}>
					Назад к услуге
				</Link>
			</Button>,
		]}
	/>
);
export default ResultComp