<script lang="ts">
	import { HelloWorld } from '$lib/components';
</script>

<div class="flex w-full flex-col">
	<HelloWorld />
	<div class="mx-6 rounded p-4 md:px-12">
		<p class="mb-8 text-start">
			I'm <strong>Rene Presedo!</strong> And this is the place where you can know about me, so make yourself
			at home!
		</p>
		<p class="mb-8 text-start">
			I'm a software developer placed in Malaga, in the south of Spain. I started my working career
			when I was 23 (back in 2016) and since then I've been working in different fields and areas.
			But before getting down to business, here it is a little bit about me!
		</p>
		<p class="mb-8 text-start">
			I was also born in 1993 in Malaga, and I've spent my whole life in Fuengirola (a small town
			30km away from it)! Since I was a child, I've been always interested in technology. The first
			computer that we had in my parents home was an Intel Pentium II running Windows 98. I could
			say that I spent all my childhood learning coding stuff but it would be a lie... I was playing
			games like <code class="text-yellow-300">Jazz Jackrabbit</code>
		</p>
		<div class="mb-8 flex w-full items-center justify-center">
			<div class="h-36 w-36 overflow-hidden rounded-full border border-white">
				<img alt="Profile" src={'/images/presedo.jpg'} />
			</div>
		</div>
	</div>
	<div class="h-12" />
</div>
