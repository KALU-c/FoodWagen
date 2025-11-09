const Hero = () => {
	return (
		<section className="h-[628px] container-desktop bg-primary flex flex-col justify-center">
			{/* title + short short description */}
			<div className="flex flex-col gap-[15px] text-white">
				<h1 className="text-[88px] font-bold">Are you starving?</h1>
				<p className="text-[22px]">Withing a few clicks, find meals that are accessible near you</p>
			</div>

			{/* order card */}
			<div className="flex flex-col gap-2"></div>
		</section>
	)
}

export default Hero
