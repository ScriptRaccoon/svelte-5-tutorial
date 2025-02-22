<script lang="ts">
	type Props = {
		value: string
		label: string
		placeholder?: string
	}

	const id = Math.random().toString(36).slice(2)

	let { value = $bindable(), label, placeholder }: Props = $props()
</script>

<div>
	<label for={id}>{label}</label>
	<input type="text" {id} bind:value {placeholder} />
</div>

<style>
	div {
		margin-block: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.25rem;
	}

	input {
		width: 100%;
		padding: 0.4rem 0.8rem;
		background-color: var(--input-color);
		border: 1px solid var(--outline-color);
		border-radius: 0.25rem;
	}
</style>
