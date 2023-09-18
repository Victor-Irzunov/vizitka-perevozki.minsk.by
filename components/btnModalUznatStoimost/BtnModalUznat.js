"use client"
import { Tag } from 'antd';
import { useState } from 'react';
import { ModalUniversal } from '../modal/ModalUniversal';

const BtnModalUznat = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [isActive, setIsActive] = useState({
		uznat: false,
	});
	const handleCancel = () => {
		setIsModalOpen(false)
	};

	const showModal = (title, active) => {
		setIsModalOpen(true)
		setTitle(title)
		if (active === "uznat") {
			setIsActive(prev => ({ ...prev, uznat: true}))
		}
	}

	return (
		<>
			<Tag color="blue"
				className="mt-6"
				onClick={() => showModal('Узнать стоимость и сроки ремонта', "uznat")}
			>
				узнать стоимость и сроки
			</Tag>
			<ModalUniversal
				isModalOpen={isModalOpen}
				title={title}
				handleCancel={handleCancel}
				isActive={isActive}
			/>
		</>
	)
}

export default BtnModalUznat