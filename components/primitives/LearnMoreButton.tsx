import Link from 'next/link'

export const LearnMoreButton = ({ path }: { path: string }): JSX.Element => {
  return (
    <Link className='cursor-pointer' href={path}>
      <div
        className={
          'group cursor-pointer border border-red-700 rounded-md py-2 px-5 flex space-x-3 items-center hover:border-transparent hover:bg-red-600 hover:text-white'
        }>
        <div className={'flex flex-col text-sm text-secondary group-hover:text-white'}>
          <span>
            <strong>Learn More</strong>
          </span>
        </div>
        <svg viewBox='0 0 15 15' fill='none' className={'w-6 h-6 fill-red-500 group-hover:fill-white'} xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z'
            fill='currentColor'
            fillRule='evenodd'
            clipRule='evenodd'></path>
        </svg>
      </div>
    </Link>
  )
}
