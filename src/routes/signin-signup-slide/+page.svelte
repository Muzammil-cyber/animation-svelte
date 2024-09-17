<script lang="ts">
	import type { PageData } from "./$types";
    export const p : PageData = $props()
    let left = $state(false)
    $effect(()=>{
        console.log('run',window.location.hash);
        
        if(window.location.hash) {
            if(window.location.hash === "#sign-in") {
                left = false
            } else if(window.location.hash === "#sign-up") {
                left = true
            }
        }
    }) 
</script>
<!-- {console.log(page.url.hash)} -->
<main>
    <section>
        <div class="sign up">
            <h1>Sign Up</h1>
			<form>
                <div class="form-group">
					<label for="username">Username:</label>
					<input type="text" id="username" name="username" required />
				</div>
				<div class="form-group">
					<label for="email">Email:</label>
					<input type="email" id="email" name="email" required />
				</div>
				<div class="form-group">
                    <label for="password">Password:</label>
					<input type="password" id="password" name="password" required />
				</div>
				<div class="form-group">
                    <label for="confirm_password">Confirm Password:</label>
					<input type="password" id="confirm_password" name="confirm_password" required />
				</div>
                <div class="checkbox">
                    Already have an account? <a href="#sign-in" onclick={()=>left = false}>Sign In</a>
                </div>
				<button type="submit">Sign Up</button>
			</form>
		</div>
		<div class="sign in">
            <h1>Sign In</h1>
			<form>
                <div class="form-group">
                    <label for="email">Email:</label>
					<input type="email" id="email" name="email" required />
				</div>
				<div class="form-group">
                    <label for="password">Password:</label>
					<input type="password" id="password" name="password" required />
				</div>
				<div class="form-group checkbox">
                    <input type="checkbox" id="remember_me" name="remember_me" />
					<label for="remember_me">Remember Me</label>
				</div>
                <div class="checkbox">
                    Don&apos;t have an account? <a href="#sign-up" onclick={()=>left=true}>Create an account</a>
                </div>
				<button type="submit">Sign In</button>
			</form>
		</div>
        <div class="image" class:left>
            <img src="/overlay-signin-signup.webp" alt="overlay">
        </div>
	</section>
</main>

<style>
    main {
        flex-grow: 1;
	}
	section {
        width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		.sign {
            display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 50%;
			position: absolute;
			top: 0;
			padding: 2rem;
			&.in {
                left: 0;
			}
			&.up {
				right: 0;
			}
			background-color: #fff;
			h1 {
                margin-bottom: 1rem;
			}
			form {
                display: flex;
				flex-direction: column;
				width: 100%;
				.form-group {
                    display: flex;
					flex-direction: column;
					margin-bottom: 1rem;
					label {
                        margin-bottom: 0.5rem;
					}
					input {
                        padding: 0.5rem;
						border-radius: 0.5rem;
						border: 1px solid #000;
						/* for checkbox */
						&[type='checkbox'] {
                            margin-right: 0.5rem;
						}
					}
				}
				/* for checkbox */
				.checkbox {
                    display: flex;
					align-items: center;
					margin-bottom: 1rem;
                    flex-direction: row;
                    gap: 0.5rem;
                    label {
                        margin-bottom: 0;
                    }
				}
				button {
                    padding: 0.5rem;
					border-radius: 0.5rem;
					border: 1px solid #000;
					background-color: #000;
					color: #fff;
					cursor: pointer;
				}
			}
		}
        .image {
            width: 50%;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            transition: ease-in 1s;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            &.left {
                transform: translateX(-100%);
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
