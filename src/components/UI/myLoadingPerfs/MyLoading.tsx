function MyLoading() {
  return (
    <div className="flex justify-center gap-2 items-center">
      <span className="w-[6px] h-[6px] anim-loading1 bg-black rounded-[50%]"></span>
      <span className="w-[6px] h-[6px] anim-loading2 bg-black rounded-[50%]"></span>
      <span className="w-[6px] h-[6px] anim-loading3 bg-black rounded-[50%]"></span>
    </div>
  );
}

export default MyLoading;
