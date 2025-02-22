<script lang="ts">
	import { maxTopics } from '../lib/config'
	import type { Topic } from '../lib/types'

	type Props = {
		topics: Topic[]
		numberSelectedTopics: number
	}

	let { topics, numberSelectedTopics }: Props = $props()

	function toggle(topic: Topic) {
		if (topic.selected) {
			topic.selected = false
		} else if (numberSelectedTopics < maxTopics) {
			topic.selected = true
		}
	}
</script>

<div class="topics">
	{#each topics as topic}
		<button
			class="topic"
			class:selected={topic.selected}
			aria-pressed={topic.selected}
			onclick={() => toggle(topic)}
		>
			<span>{topic.name}</span>
		</button>
	{/each}
</div>

<style>
	.topics {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.topic {
		padding: 0.25rem 0.75rem;
		border-radius: 100vw;
		font-size: 0.825rem;
		border: 1px solid var(--outline-color);
		color: var(--secondary-text-color);
	}

	.topic:not(.selected):hover {
		border-color: var(--text-color);
	}

	.topic.selected {
		background-color: var(--text-color);
		border-color: var(--text-color);
		color: var(--inverted-text-color);
	}
</style>
