import { dataMainService } from "@/constants/data/DataMainServiceSection"
import Image from "next/image"
import Link from "next/link"


const ServiceSectionComp = () => {

	return (
		<section className="bg-white w-full py-10 relative mt-20">
			<div className="container mx-auto text-center">
				<h2 className="text-xl uppercase text-black">
					Наш автопарк
				</h2>
				<p className="mt-3 font-light text-xs">
				Мы оперативно доставим выбранную вами технику на ваш объект в любой регион Беларуси
				</p>

				<div className="mt-10 flex flex-wrap justify-center items-center">
					{
						dataMainService ? dataMainService.map(el => {
							return (
								<div className="mb-16 text-center mx-4 hover:shadow-lg p-4 rounded-lg" key={el.id}>
									<Link href={`${el.link}`}>
										<Image
											src={el.img}
											alt={el.alt}
											className="mx-auto"
											width={150}
											height={105}
										/>
										<p className="text-yellow-700 mt-4">
											{el.title}
										</p>
									</Link>
								</div>
							)
						})
							:
							null
					}
				</div>
			</div>
		</section>
	)
}

export default ServiceSectionComp
