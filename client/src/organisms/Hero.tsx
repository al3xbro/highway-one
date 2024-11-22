import HeroImage from '../assets/hero.png'
import { FaSearch } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <div className='relative h-[80vh]'>
        <div className='absolute z-10 w-[1000px] h-full flex items-center pl-32'>
          <div className='flex flex-col gap-10'>
            <div>
              <div className='text-champwhite text-[100px] font-bold tracking-tight'>FIND YOUR BABY</div>
              <div className='bg-champwhite h-[10px] w-96'></div>
            </div>
            <div className='text-champwhite'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, velit repellendus iure molestiae rerum reprehenderit quibusdam mollitia quod asperiores, nisi repellat id aut perferendis laborum numquam distinctio sunt delectus quo?
            </div>
            <div className='flex items-center gap-5 px-5 border-4 h-16 rounded-xl w-2/3'>
              <FaSearch className='text-champwhite' height={20} width={20} />
              <input className='bg-transparent text-champwhite h-full placeholder-champwhite w-full text-xl' type="text" placeholder='Search' />
            </div>
          </div>
        </div>
        <div className='absolute w-full h-full bg-gradient-to-r from-black to-transparent' />
        <img src={HeroImage} className='w-full h-full object-cover' alt="" />
      </div>
    </>
  )
}