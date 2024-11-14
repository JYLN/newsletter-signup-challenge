<script lang="ts">
	const newsletterListItems = [
		'Product discovery and building what matters',
		'Measuring to ensure updates are a success',
		'And much more!'
	];
</script>

<section
	class="grid md:max-w-[58rem] md:grid-cols-[1fr_25rem] md:rounded-[2.25rem] md:bg-white md:p-6 md:shadow-[0_0.9375rem_3.75rem_0_rgba(0,0,0,0.25)]"
>
	<picture class="md:col-start-2">
		<source srcset="/images/illustration-sign-up-desktop.svg" media="(min-width: 60rem)" />
		<img
			src="/images/illustration-sign-up-mobile.svg"
			alt="An illustration of a desktop screen, and an open webpage with a chart and number component overlayed"
			class="w-full"
		/>
	</picture>
	<div class="px-6 py-10 md:row-start-1 md:pb-0 md:pl-10 md:pr-16 md:pt-[4.56rem]">
		<h1>Stay updated!</h1>
		<p class="mt-6">Join 60,000+ product managers receiving monthly updates on:</p>
		<ul class="mt-6 grid gap-[0.625rem]">
			{#each newsletterListItems as item}
				<li
					class="flex before:mr-4 before:inline-block before:size-[1.3125rem] before:content-[url('/images/icon-list.svg')] md:items-center"
				>
					{item}
				</li>
			{/each}
		</ul>
		<form>
			<div class="mt-10">
				<label for="email" class="text-xs/[1.125rem] font-bold">Email address</label>
				<input
					type="email"
					name="email"
					placeholder="email@company.com"
					class="mt-2 block w-full rounded-lg border border-grey/25 px-6 py-4 placeholder:text-darkslategrey/[0.5] focus:border-darkslategrey focus:ring-0"
				/>
			</div>

			<button type="submit" class="button">Subscribe to monthly newsletter</button>
		</form>
	</div>
</section>
