<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		onClick: () => void
		children: Snippet
		disabled?: boolean
	}

	let { onClick, children, disabled = false }: Props = $props()
</script>

<button onclick={onClick} {disabled}>
	{@render children()}
</button>

<style>
	button {
		padding: 0.25rem 0.75rem;
		background-color: var(--button-color);
		border-radius: 0.25rem;
		transition: opacity 0.2s;
	}

	button[disabled] {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
