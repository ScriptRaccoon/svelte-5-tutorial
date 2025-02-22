<!-- loader #15 from https://css-loaders.com/spinner/ -->

<div class="wrapper">
	<div class="loader"></div>
</div>

<style>
	.wrapper {
		margin-block: 1.5rem;
		display: flex;
		justify-content: center;
	}

	.loader {
		width: 40px;
		aspect-ratio: 1;
		display: grid;
		border: 4px solid #0000;
		border-radius: 50%;
		border-right-color: var(--secondary-text-color);
		animation: rotate 1s infinite linear;
	}

	.loader::before,
	.loader::after {
		content: '';
		grid-area: 1/1;
		margin: 2px;
		border: inherit;
		border-radius: 50%;
		animation: rotate 2s infinite;
	}

	.loader::after {
		margin: 8px;
		animation-duration: 3s;
	}

	@keyframes rotate {
		100% {
			transform: rotate(1turn);
		}
	}
</style>
