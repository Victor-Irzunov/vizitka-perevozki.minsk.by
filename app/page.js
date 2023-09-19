'use client'
import { FormTel } from '@/components/form/FormTel';
import { ModalUniversal } from '@/components/modal/ModalUniversal';
import Image from 'next/image';
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [isActive, setIsActive] = useState({
    order: false,
    tel: false
  });
  const handleCancel = () => {
    setIsModalOpen(false)
  };

  const showModal = (title, active) => {
    setIsModalOpen(true)
    setTitle(title)
    if (active === "order") {
      setIsActive(prev => ({ ...prev, order: true, tel: false }))
    }
    if (active === "tel") {
      setIsActive(prev => ({ ...prev, order: false, tel: true, }))
    }
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <div className='w-full min-h-screen bg-cover fon bg-center' />

      <section className='container mx-auto relative xz:pt-16 xs:pt-24 min-h-screen'>
        <div className='flex justify-between sd:w-5/6 xz:w-full'>
          <div className='pt-10 text-white'>
            <h1 className='font-bold xs:text-5xl xz:text-3xl uppercase'>
              Перевозка грузов по Минску и РБ
            </h1>
            <p className='uppercase sd:text-3xl xz:text-xl mt-5 font-semibold'>
              Грузчики
            </p>

            <div className='sd:w-3/4 xz:w-full text-justify mt-7 mb-10'>
              <p className='mt-2 font-light'>
                Добро пожаловать на наш сайт, вашего надежного партнера в сфере грузоперевозок и услуг грузчиков. Мы готовы взять на себя все заботы по перевозке грузов и организации грузоперемещений. С нами вы можете быть уверены в качественном обслуживании и безопасной доставке. Не ждите – свяжитесь с нами прямо сейчас, чтобы начать сотрудничество и упростить ваши грузоперевозки уже сегодня!
              </p>
            </div>

            <span className='uppercase xx:text-base xz:text-sm text-red-600 bg-white px-2 py-1'>
              Работаем круглосуточно | Без выходных
            </span>

            <div className="mt-16 flex xz:flex-col-reverse xs:flex-row xz:items-start">
              <button
                className='text-white px-7 xz:mt-6 xs:mt-0 py-3 font-light rounded-3xl uppercase text-lg bg-[#f70b1b]'
                onClick={() => showModal("Заказать машину", "order")}
              >
                Заказать машину
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className='relative xz:py-10 xs:py-24 bg-white w-full mt-24'>
        <article className='container mx-auto'>
          <Image src='/logo/logo.webp' alt='' width={150} height={150} className='float-left pr-5 pb-1' />
          <h2 className='uppercase font-bold mb-3 sd:text-xl xz:text-lg'>
            Компания по грузоперевозкам в Минске и по всей Беларуси
          </h2>
          <div className='text-justify'>
            <p className='mb-2'>
              Компания <span className='font-semibold'>"Perevozki.minsk.by"</span> - гордится возможностью предложить вам высококачественные грузоперевозки, ориентированные на вашу комфортность и удовлетворение потребностей вашего бизнеса.
            </p>
            <p className='mb-2'>
              Наша компания обладает богатым опытом и безупречной репутацией в сфере транспортных услуг. Мы занимаемся грузоперевозками уже многие годы, и наш опыт позволяет нам эффективно управлять самыми сложными и разнообразными задачами перевозок.
            </p>
            <p className='mb-2'>
              Мы гарантируем вам надежную и своевременную доставку грузов в любой уголок Беларуси. Благодаря нашей опытной команде профессионалов, вы можете быть уверены, что ваш груз будет обработан и доставлен с максимальной аккуратностью и вниманием к деталям.
            </p>
            <p className='mb-2'>
              Мы понимаем, что каждый заказ - уникален, и потребности клиентов могут сильно различаться. Поэтому мы готовы взяться за любой проект, будь то небольшая посылка или крупный логистический проект. Наша гибкая команда адаптируется к вашим потребностям и предложит наилучшие решения для вашего бизнеса.
            </p>
            <p className='mb-2'>
              Мы ценим ваше время и ресурсы, и именно поэтому стремимся обеспечить максимальную эффективность в каждом этапе грузоперевозки. Наши процессы оптимизированы для уменьшения временных и финансовых затрат, что делает наши услуги выгодными для вас.
            </p>
            <p className='mb-2'>
              Мы понимаем важность экономии в бизнесе. Поэтому мы гордимся тем, что предлагаем лучшие услуги по доступным ценам. Вы можете заказать грузоперевозку с нами и быть уверенными, что получите высокое качество услуг без лишних затрат.
            </p>
            <p className='mb-4'>
              Не важно, требуется ли вам перевезти небольшой груз или решить сложную логистическую задачу - Perevozki.minsk.by всегда готовы помочь. Закажите грузоперевозку у нас прямо сейчас и убедитесь сами в преимуществах сотрудничества с нами.
            </p>
            <p className='font-semibold'>
              Мы стремимся сделать ваш бизнес более эффективным и успешным, обеспечивая высококачественные грузоперевозки и предоставляя надежных грузчиков для ваших потребностей. Позвоните нам или отправьте запрос прямо сейчас, и давайте начнем работать вместе! Наши специалисты готовы ответить на все ваши вопросы и помочь вам с вашими грузоперевозками.
            </p>
          </div>
        </article>
      </section>

      <section className='relative xz:py-10 xs:py-24 bg-[#69b554] w-full'>
        <div className='container mx-auto'>
          <h3 className='text-center font-bold uppercase xz:text-xl sd:text-3xl'>
            Наши услуги по грузоперевозкам
          </h3>

          <div className='xz:mt-4 sd:mt-10'>
            <div className=''>
              <p className='font-semibold text-center'>
                Наши микроавтобусы - ваш надежный партнер в грузоперевозках. Доверьте нам перевозку грузов, и мы обеспечим качество и эффективность наших услуг.
              </p>
  
              <ul className='mt-9'>
                <li className='mb-3'>
                  <span className='font-bold text-lg'>
                    Перевозка мебели:
                  </span>{' '}
                  Безопасная и аккуратная доставка мебели из магазина или при переезде
                </li>

                <li className='mb-3'>
                  <span className='font-bold text-lg'>
                    Погрузка и выгрузка:
                  </span>{' '}
                  Услуги грузчиков для удобной погрузки и выгрузки груза
                </li>

                <li className='mb-3'>
                  <span className='font-bold text-lg'>
                    Перевозка стройматериалов:
                  </span>{' '}
                  Доставка стройматериалов на стройплощадку или снабжение стройки всем необходимым
                </li>

                <li className='mb-3'>
                  <span className='font-bold text-lg'>
                    Перевозка мусора:
                  </span>{' '}
                  Вывоз мусора после ремонта или строительства
                </li>

                <li className='mb-3'>
                  <span className='font-bold text-lg'>
                    Перевозка старой бытовой техники:
                  </span>{' '}
                  Утилизация старых бытовых приборов и электроники
                </li>

                <li className='mb-3'>
                  <span className='font-bold text-lg'>
                    Доставка крупной бытовой техники:
                  </span>{' '}
                  Перевозка и доставка бытовой техники, такой как холодильники, стиральные машины и т. д.
                </li>

                <li className='mb-3'>
                  <span className='font-bold text-lg'>
                    Помощь в переезде:
                  </span>{' '}
                  Комплексные услуги при переезде, включая паковку, перевозку и распаковку
                </li>

                <li className='mb-3'>
                  <span className='font-bold text-lg'>
                    Доставка товаров:
                  </span>{' '}
                  Доставка товаров из магазинов или складов к месту назначения
                </li>

                <li className='mb-3'>
                  <span className='font-bold text-lg'>
                    Перевозка документов:
                  </span>{' '}
                  Быстрая и конфиденциальная доставка важных документов
                </li>

                <li className='mb-3'>
                  <span className='font-bold text-lg'>
                    Перевозка грузов на дальние расстояния:
                  </span>{' '}
                  Доставка грузов в любой регион Беларуси
                </li>
                <li className='mb-3'>
                  <span className='font-bold text-lg'>
                    Экспресс-доставка:
                  </span>{' '}
                  Быстрая доставка срочных грузов
                </li>

                <li className='mb-3'>
                  <span className='font-bold text-lg'>
                    Доставка пищи и продуктов в кафе, рестораны, мероприятия
                  </span>{' '}
                  Доставка продуктов и еды по заказу
                </li>

                <li className='mb-3'>
                  <span className='font-bold text-lg'>
                    Подача автомобиля с водителем:
                  </span>{' '}
                  Возможность аренды микроавтобуса с водителем для удобства клиента
                </li>

                <li className='mb-3'>
                  <span className='font-bold text-lg'>
                    Курьерские услуги:
                  </span>{' '}
                  Передача мелких отправлений и посылок
                </li>

                <li className='mb-3'>
                  <span className='font-bold text-lg'>
                    Упаковка грузов:
                  </span>{' '}
                  Профессиональная упаковка груза для его сохранности
                </li>

                <li className='mb-3'>
                  <span className='font-bold text-lg'>
                    Специализированные услуги:
                  </span>{' '}
                  Другие специализированные услуги по запросу клиента
                </li>
              </ul>
              <p className='mt-8 font-bold text-center text-xl'>
                Наши микроавтобусы оборудованы для безопасной и надежной перевозки различных видов грузов. Мы готовы предоставить вам наши услуги для удовлетворения ваших потребностей в грузоперевозках.
              </p>
            </div>

            <div className='sd:flex sd:justify-end xz:flex-row mt-12'>
              <Image src='/main/1.webp' alt='Услуги грузоперевозки' width={670} height={446} className='w-auto h-auto xz:mx-auto sd:mx-0' />
            </div>
          </div>
        </div>
      </section>

      <section className='relative min-h-screen w-full flex justify-center items-center'>
        {/* Псевдоэлементом для затемнения фона */}
        <div className='bg-[url("/main/2.webp")] bg-cover min-h-screen w-full absolute top-0 left-0 filter brightness-50' />
        <div className='sd:w-1/2 xz:container z-10'>
          <div className='bg-[#69b554] w-full text-center py-10 px-5'>
            <h4 className='uppercase sd:text-4xl xz:text-xl font-bold'>
              Заказать машину
            </h4>
            <p className='font-light text-lg mt-6'>
              Наш менеджер свяжется с вами для расчета стоимости.
            </p>
            <div className='mt-5'>
              <FormTel />
            </div>
          </div>
        </div>
      </section>


      <section className='bg-white relative w-full py-16'>
        <div className='container mx-auto text-center'>
          <h5 className='uppercase sd:text-4xl xz:text-xl font-bold'>
            Наши автомобили
          </h5>

          <div className='sd:flex xz:flex-row sd:justify-around mt-16'>
            <div className='sd:w-1/2 xz:w-full'>
              <Image src='/main/3.webp' alt='Наши автомобили' width={881} height={460} className='' />
            </div>
            <div className='mt-4'>
              <p className='font-bold text-lg'>
                Ford Transit, Peugeot Boxer
              </p>
              <ul className='font-light text-lg mt-5'>
                <li className=''>
                  Длина — 3 м
                </li>
                <li className=''>
                  Ширина — 1,7 м
                </li>
                <li className=''>
                  Высота — 1,8 м
                </li>
                <li className=''>
                  Грузодъемность — 1.5 тонны
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#69b554] w-full relative py-16'>
        <div className='container mx-auto text-center'>
          <h6 className='uppercase sd:text-xl xz:text-base font-bold'>
            Задайте вопросы по телефону
          </h6>

          <div className='font-bold sd:text-2xl mt-10 mb-4'>
            <a href="tel:80296926911" className="">
              +375 (29) 692-69-11
            </a>
          </div>
          <div className='font-bold sd:text-2xl'>
            <a href="tel:375292647779" className="">
              +375 (29) 264-77-79
            </a>
          </div>
        </div>
      </section>

      <section className='container mx-auto relative py-32'>
        <p className='text-center font-semibold text-white sd:text-xl xz:text-lg'>
          Не откладывайте свои грузоперевозки на потом. Закажите услуги прямо сейчас, и мы обеспечим быструю и надежную доставку. Позвоните по номеру +375 (29) 692-69-11 и доверьте нам ваш груз!
        </p>
      </section>

      <ModalUniversal
        isModalOpen={isModalOpen}
        title={title}
        handleCancel={handleCancel}
        isActive={isActive}
      />
    </main>
  )
}
