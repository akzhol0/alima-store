type HomePageUnitPostProps = {
  title: string;
  small1: string;
  small2: string;
  img: string;
}

function HomePageUnitPost({ title, small1, small2, img }: HomePageUnitPostProps) {
  return (
    <div className="w-full my-[80px] flex flex-wrap justify-center">
      <div className="w-[100%] md:w-[50%] flex flex-col justify-center items-start">
        <strong className='w-full text-[30px] text-start mb-6'>{title}</strong>
        <small className='text-sm md:text-lg text-start text-gray-500'>{small1}</small>
        <small className='w-full text-sm md:text-lg text-start text-gray-500'>{small2}</small>
      </div>
      <div className="w-[100%] md:w-[50%] flex flex-col justify-center items-center">
        <img src={img} alt="unit picture" />
      </div>
    </div>
  )
}

export default HomePageUnitPost;
