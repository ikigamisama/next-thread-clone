import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<section className='w-full h-full md:h-screen flex items-center justify-center'>
			<SignIn />
		</section>
	);
}
