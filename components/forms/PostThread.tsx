"use client";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { usePathname, useRouter } from "next/navigation";
import { ThreadValidation } from "@/lib/validations/thread";
import { createdThread } from "@/lib/actions/thread.actions";

interface Props {
	user: {
		id: string;
		objectId: string;
		username: string;
		name: string;
		bio: string;
		image: string;
	};
	btnTitle: string;
}

const PostThread = ({ userId }: { userId: string }) => {
	const router = useRouter();
	const pathname = usePathname();
	const form = useForm({
		resolver: zodResolver(ThreadValidation),
		defaultValues: {
			thread: "",
			accountId: userId,
		},
	});

	async function onSubmit(values: z.infer<typeof ThreadValidation>) {
		await createdThread({
			text: values.thread,
			author: userId,
			communityId: null,
			path: pathname,
		});

		router.push("/");
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='mt-10 flex flex-col justify-start gap-10'>
				<FormField
					control={form.control}
					name='thread'
					render={({ field }) => (
						<FormItem className='flex flex-col w-full gap-4'>
							<FormLabel className='text-base-semibold text-light-2 '>
								Content
							</FormLabel>
							<FormControl>
								<Textarea
									rows={15}
									className='no-focus border-dark-4 bg-dark-3 text-light-1'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type='submit' className='bg-primary-500'>
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default PostThread;
