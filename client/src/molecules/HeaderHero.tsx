import HighwayOneLogo from '../assets/highway-one-logo.png'

export default function HeaderHero() {
  return (
    <div className='flex flex-row items-center gap-10'>
      <button>
        <img src={HighwayOneLogo} alt="" />
      </button>
      <div className='h-10 border-[2px] border-black'></div>
      <button className='text-2xl font-semibold tracking-wider'>ABOUT US</button>
      <button className='font-semibold text-2xl tracking-wider'>BROWSE</button>
      <button className='font-semibold text-2xl tracking-wider'>SELL</button>
    </div>
  )
}