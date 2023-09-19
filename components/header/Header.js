import { MessageOutlined } from '@ant-design/icons';
import Image from 'next/image';


const Header = () => {
  // function gtag_report_conversion(url) {
  //   var callback = function () {
  //   };
  //   window.gtag('event', 'conversion', {
  //     'send_to': 'AW-11273957189/54HvCP2I48oYEMXe6_8p',
  //     'event_callback': callback
  //   });
  //   return false;
  // }


  return (
    <header
      className="pt-5 pb-3 relative z-10"
    >
      <div className="container mx-auto">
        <div className="flex xz:flex-col sd:flex-row sd:justify-between xz:justify-center items-center text-white">
          <div className="sd:font-bold xz:font-semibold xz:text-center">
            <p className="tracking-widest">
              Perevozki.minsk.by
            </p>
            <p className="sd:pl-2 xz:pl-0">
              грузоперевозки 24/7
            </p>
          </div>
          <div className="text-xl xz:mt-3">
            <div className="flex mb-2 justify-start xz:pl-3 sd:pl-0">
              <Image src='/phone.svg' alt='телефон' width={18} height={18} className='xz:hidden sd:block' />
              <a href="tel:80296926911" className="mx-2">
                +375 (29) 692-69-11
              </a>
              <Image src='/a1.svg' alt='оператор А1' width={18} height={18} />
            </div>
            <div className="flex justify-start xz:pl-3 sd:pl-0">
              <Image src='/phone.svg' alt='телефон' width={18} height={18} className='xz:hidden sd:block'  />
              <a href="tel:375292647779" className="mx-2">
                +375 (29) 264-77-79
              </a>
              <Image src='/mts.svg' alt='оператор МТС' width={55} height={55} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
