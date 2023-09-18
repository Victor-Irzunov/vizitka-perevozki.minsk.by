import { useState } from 'react'
import { Form, Button, message, Input } from 'antd'
import InputMask from 'react-input-mask'
import { sendOrderTelegram } from '../../http/telegramAPI'

export const FormTel = ({ btn = 'Жду звонка', handleCancel, title, isActive }) => {
	const [tel, setTel] = useState('')
	const onFinish = (values) => {
		console.log('Success:', values);

		let messageForm = `<b>Клиент с сайта Грузоперевозки</b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b> ${isActive ? 'Интерисует:' : ''}</b>\n`
		messageForm += `<b>${isActive ? title : ''} </b>\n`
		messageForm += `<b>Телефон:</b> ${values.tel}\n`
		messageForm += `<b>Имя:</b> ${values.name || '-'}\n`

		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) message.success('Мы получили сообщение и скоро Вам перезвоним')
				handleCancel()
			})
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}

	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		var { value } = newState
		var selection = newState.selection
		var cursorPosition = selection ? selection.start : null
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				cursorPosition--
				selection = { start: cursorPosition, end: cursorPosition }
			}
			value = value.slice(0, -1)
		}
		return {
			value,
			selection
		}
	}
	return (
		<>
			<Form
				name="basic"
				labelCol={{
					span: 24,
				}}
				wrapperCol={{
					span: 24,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>

				<div className='sd:flex sd:items-end sd:justify-between xz:flex-row'>
					<Form.Item
						label="Ваше имя"
						name="name"
						tooltip=""
					>
						<Input
						/>
					</Form.Item>

					<Form.Item
						label='Телефон'
						name="tel"
						tooltip="код оператора и номер"
						rules={[
							{
								required: true,
								message: 'Пожалуйста введите номер!',
							},
						]}
					>
						<InputMask
							placeholder="29 123-45-67"
							mask="+3\7\5 99 999 99 99"
							maskChar={'-'}
							className='border py-1 px-3 rounded-md w-full'
							beforeMaskedValueChange={beforeMaskedValueChange}
							value={tel}
							onChange={(e) => setTel(e.target.value)}
						/>
					</Form.Item>

					<Form.Item
						
					>
						<Button htmlType="submit">
							{btn}
						</Button>
					</Form.Item>

				</div>

			</Form>
			<p className='text-[10px] mt-10 uppercase'>
				Оправьте нам свой номер телефона и мы Вам перезвоним в ближайшее время {isActive ? 'с информацией о данной техники' : ''}
			</p>
		</>
	)
}
