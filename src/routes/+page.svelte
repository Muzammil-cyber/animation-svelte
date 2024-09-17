<script lang="ts">
	const year = new Date().getFullYear();
</script>

<header>
	<nav>
		<h1>Welcome to Muzammil Loya's Animation Collection</h1>
	</nav>
</header>

<main>
	<section class="collection">
		<h2>My Animation Collection</h2>
		<p>This is a collection of animations I've created using various tools and techniques.</p>
		<ul class="collection wrapper">
			<li>
				<span class="tooltip">Authentication Page Animation where an image slides covering the inactive tab</span>
				<a href="/signin-signup-slide">Auth Page</a>
			</li>
			<li>
                <span class="tooltip">Authentication Page Animation where an image slides covering the inactive tab</span>
				<a href="/signin-signup-slide-2">Auth Page 2</a>
			</li>
			<li>
                <span class="tooltip">Some text</span>

				<a href="https://example.com/animation2">Animation3</a>
			</li>
			<li>
                <span class="tooltip">Some text</span>

				<a href="https://example.com/animation1">Animation1</a>
			</li>
			<li>
                <span class="tooltip">Some text</span>

				<a href="https://example.com/animation2">Animation2</a>
			</li>
			<li>
                <span class="tooltip">Some text</span>

				<a href="https://example.com/animation2">Animation3</a>
			</li>
		</ul>
	</section>
</main>

<footer>
	<p>Powered By <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer">Sevelt</a></p>
	<p>&copy; {year} <a href="https://muzammil-cool.vercel.app/" target="_blank" rel="noopener noreferrer">Muzammil Loya</a>. All rights reserved.</p>
</footer>

<style>
	header {
		background-color: #333;
		padding: 1rem;
		text-align: center;
		* {
			color: #fff;
		}
	}
	footer {
		background-color: #f0f0f0;
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 0.5rem;
		p {
			font-size: 1.5rem;
			font-weight: 600;
		}
	}

	main {
		flex-grow: 1;
	}

	.collection {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		padding: 2rem;
		&.wrapper {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
            /* RESPONSIVE MD SIZE 2 COLS AND sm SIZE 1 COL With MediaQUery */
            @media   (max-width: 768px) {
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            }
			gap: 1rem;
			li {
				position: relative;
				display: inline-block;
				border-bottom: 1px dotted #fff; /* If you want dots under the hoverable text */
				&:hover .tooltip {
					visibility: visible;
				}
				.tooltip {
					visibility: hidden;
					background-color: #fff;
					color: #333;
                    border: #333 1px solid;
					text-align: center;
					padding: 5px 0;
					border-radius: 6px;
                    padding: 0.25rem;
					/* Position the tooltip text - see examples below! */
					position: absolute;
					z-index: 1;
					width: 100%;
					bottom: 110%;
					left: 0;
					/* margin-left: -60px; */
				}
                a {
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #333;
				color: #fff;
				padding: 1rem;
				border-radius: 0.25rem;
                text-decoration: none;
			}
			}
			
		}
	}
    a {
        text-decoration: underline;
        text-underline-offset: 5px;
        &:hover {
            text-decoration: none;
        }
    }
</style>
