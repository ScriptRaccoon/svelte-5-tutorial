<script lang="ts">
	import Button from './components/Button.svelte'
	import Header from './components/Header.svelte'
	import Input from './components/Input.svelte'
	import Loader from './components/Loader.svelte'
	import TopicSelection from './components/TopicSelection.svelte'

	import { maxTopics, politicalTopics, storageKey } from './lib/config'
	import { isTopic, type Topic } from './lib/types'

	let step = $state(0)

	let country = $state('')

	const defaultTopics: Topic[] = politicalTopics.map((name) => ({
		name,
		selected: false,
	}))

	const savedTopics: unknown = JSON.parse(
		localStorage.getItem(storageKey) || '[]',
	)

	const savedTopicsAreValid =
		Array.isArray(savedTopics) &&
		savedTopics.length === defaultTopics.length &&
		savedTopics.every(isTopic)

	let topics = $state<Topic[]>(
		savedTopicsAreValid ? savedTopics : defaultTopics,
	)

	$effect(() => {
		localStorage.setItem(storageKey, JSON.stringify(topics))
	})

	let numberSelectedTopics = $derived(
		topics.filter((topic) => topic.selected).length,
	)

	let pluralForm = $derived(numberSelectedTopics === 1 ? 'topic' : 'topics')

	function reset() {
		for (const topic of topics) {
			topic.selected = false
		}
	}

	function goNext() {
		if (step === 0 && numberSelectedTopics === 0) return
		step++
	}

	function goBack() {
		if (step === 0) return
		step--
	}
</script>

<Header />

<main>
	{#if step === 0}
		<Input
			bind:value={country}
			label="Country"
			placeholder="The country in which you vote"
		/>

		<p>Select up to 5 political topics that matter most to you.</p>

		<TopicSelection {topics} {numberSelectedTopics} />

		<p>
			You have selected {numberSelectedTopics}
			{pluralForm}.
			{#if numberSelectedTopics === maxTopics}
				This is the maximum number of topics you can select.
			{/if}
		</p>

		<menu>
			<Button onClick={reset}>Reset</Button>
			<Button onClick={goNext} disabled={numberSelectedTopics === 0}>
				Continue
			</Button>
		</menu>
	{:else if step === 1}
		<p>Retrieving the parties that fit your topics...</p>

		<Loader />

		<menu>
			<Button onClick={goBack}>Go back</Button>
		</menu>
	{/if}
</main>

<style>
	main {
		padding-inline: 1rem;
		max-width: 42rem;
		margin: 0 auto;
	}

	menu {
		margin-top: 2rem;
		display: flex;
		gap: 1rem;
	}
</style>
