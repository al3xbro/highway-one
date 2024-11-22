import HeaderHero from '../molecules/HeaderHero';
import HeaderLinks from '../molecules/HeaderLinks';

export default function Header() {
  return (
    <>
      <div className='flex flex-row justify-between items-center p-5 bg-atlasweiss px-10'>
        <HeaderHero />
        <HeaderLinks />
      </div>
    </>
  )
}