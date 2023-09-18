"use client"
import { Modal } from 'antd'
import { FormOrder } from '../form/FormOrder'
import { FormTel } from '../form/FormTel'

export const ModalUniversal = ({ isModalOpen, title = '', handleCancel, isActive }) => {

	return (
		<Modal
			title={title}
			open={isModalOpen}
			onCancel={handleCancel}
			centered
			footer={null}
		>
			{
				isActive.order && <FormOrder handleCancel={handleCancel} />
			}
			{
				isActive.tel && <FormTel handleCancel={handleCancel} />
			}

		
		</Modal>
	)
}
