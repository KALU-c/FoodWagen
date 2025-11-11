import { Mail } from "@/components/icons/Mail"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const links = [
	{
		group: "Company",
		items: [
			{ title: "About us", href: "#" },
			{ title: "Team", href: "#" },
			{ title: "Careers", href: "#" },
			{ title: "Blog", href: "#" },
		]
	},
	{
		group: "Contact",
		items: [
			{ title: "Help & Support", href: "#" },
			{ title: "Partner with us", href: "#" },
			{ title: "Ride with us", href: "#" },
		]
	},
	{
		group: "Legal",
		items: [
			{ title: "Terms and Conditions", href: "#" },
			{ title: "Refund and Cancellation", href: "#" },
			{ title: "Privacy Policy", href: "#" },
			{ title: "Cookie Policy", href: "#" },
		]
	},
]

const socials = [
	{ title: "instagram", src: "/icons/instagram.svg", href: "#" },
	{ title: "facebook", src: "/icons/facebook.svg", href: "#" },
	{ title: "twitter", src: "/icons/twitter.svg", href: "#" }
]

const Footer = () => {
	return (
		<footer className='bg-[#212121] text-white pb-8'>
			<div className="container-desktop flex flex-col gap-4">
				<div className="flex justify-between pb-8 pt-16">
					<div className="flex gap-40">
						{links.map((link, index) => (
							<div key={`${link.group}-${index}`} className="flex flex-col gap-6">
								<p className="text-[22px] font-bold">{link.group}</p>

								<div className="flex flex-col gap-3">
									{link.items.map((item, index) => (
										<Link key={`${item.title}-${index}`} href={item.href}>
											<p className="text-lg text-[#F5F5F5] leading-none">{item.title}</p>
										</Link>
									))}
								</div>
							</div>
						))}
					</div>

					<div className="flex flex-col gap-9">
						<p className="uppercase text-lg text-[#F5F5F5]/60 font-bold">Follow us</p>

						<div className="flex gap-8">
							{socials.map(social => (
								<Link key={`footer-${social.title}-icon`} href={social.href}>
									<Image
										height={20}
										width={20}
										src={social.src}
										alt={social.title}
										className="h-5 w-5 opacity-70"
										unoptimized
									/>
								</Link>
							))}
						</div>

						<p className="text-lg text-[#F5F5F5]/60 font-bold">Receive exclusive offer in your mailbox</p>

						<div className="flex gap-4">
							<div className="relative bg-[#424242] flex items-center rounded-md focus-within:ring-1 focus-within:ring-ring pl-4 h-[60px] min-w-[340px]">
								<Mail />
								<Input
									type="email"
									placeholder="Enter Your email"
									className="border-0 focus-visible:ring-0 shadow-none placeholder:text-[#ADADAD] text-lg!"
								/>
							</div>
							<Button className="px-6 h-full bg-linear-to-r from-[#FFB800] to-[#FF8A00] text-lg font-bold">
								Subscribe
							</Button>
						</div>
					</div>
				</div>

				<Separator className="bg-[#424242]" />

				<div className="flex justify-between">
					<div className="flex gap-2 text-[#F5F5F5]">
						<p>All rights Reserved</p>
						<span className="font-bold">&copy; FoodWagen, {new Date().getFullYear()}</span>
					</div>

					<div className="flex gap-1.5 items-center">
						Made with <Heart className="size-4 text-[#FFB800] fill-[#FFB800]" /> by <span className="font-bold">Endekalu</span>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
