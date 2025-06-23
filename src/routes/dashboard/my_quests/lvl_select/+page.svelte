<script>
	// @ts-nocheck
	function removeOverlay() {
		const overlay = document.querySelector(".overlay");
		if (overlay) overlay.remove();
	}
	import "$lib/css/app.css";
	export let data;
	export let form;
	import IceQuest_Logo from "$lib/images/IceQuest logo.png";
</script>

<form class="overlay">
	<Nav/>
	<script>
		localStorage.setItem("question", 0);
	</script>
	<br><br><br><br><br><br><br><br><br>
	<img src={IceQuest_Logo} alt="IceQuest Logo" class="logo" />
	<input type="hidden" name="email" value={data.email} />
	<button type="submit" class="btn" on:click={removeOverlay}
		>Play</button
	>
</form>
<div class="container">
	<br /><br />
	<ul class="levels">
		<li
			style="background-color: #428bca;"
			onclick="location.replace('/levels/1.html')"
		>
			1
		</li>
		{#if form?.time_1}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/2.html')"
			>
				2
			</li>
		{:else}
			<li style="background-color: gray;">2</li>
		{/if}
		{#if form?.time_2}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/3.html')"
			>
				3
			</li>
		{:else}
			<li style="background-color: gray;">3</li>
		{/if}
		{#if form?.time_3}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/4.html')"
			>
				4
			</li>
		{:else}
			<li style="background-color: gray;">4</li>
		{/if}
		{#if form?.time_4}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/5.html')"
			>
				5
			</li>
		{:else}
			<li style="background-color: gray;">5</li>
		{/if}
		{#if form?.time_5}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/6.html')"
			>
				6
			</li>
		{:else}
			<li style="background-color: gray;">6</li>
		{/if}
		{#if form?.time_6}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/7.html')"
			>
				7
			</li>
		{:else}
			<li style="background-color: gray;">7</li>
		{/if}
		{#if form?.time_7}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/8.html')"
			>
				8
			</li>
		{:else}
			<li style="background-color: gray;">8</li>
		{/if}
		{#if form?.time_8}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/9.html')"
			>
				9
			</li>
		{:else}
			<li style="background-color: gray;">9</li>
		{/if}
		{#if form?.time_9}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/10.html')"
			>
				10
			</li>
		{:else}
			<li style="background-color: gray;">10</li>
		{/if}
		{#if form?.time_10}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/11.html')"
			>
				11
			</li>
		{:else}
			<li style="background-color: gray;">11</li>
		{/if}
		{#if form?.time_11}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/12.html')"
			>
				12
			</li>
		{:else}
			<li style="background-color: gray;">12</li>
		{/if}
		{#if form?.time_12}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/13.html')"
			>
				13
			</li>
		{:else}
			<li style="background-color: gray;">13</li>
		{/if}
		{#if form?.time_13}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/14.html')"
			>
				14
			</li>
		{:else}
			<li style="background-color: gray;">14</li>
		{/if}
		{#if form?.time_14}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/15.html')"
			>
				15
			</li>
		{:else}
			<li style="background-color: gray;">15</li>
		{/if}
		{#if form?.time_15}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/16.html')"
			>
				16
			</li>
		{:else}
			<li style="background-color: gray;">16</li>
		{/if}
		{#if form?.time_16}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/17.html')"
			>
				17
			</li>
		{:else}
			<li style="background-color: gray;">17</li>
		{/if}
		{#if form?.time_17}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/18.html')"
			>
				18
			</li>
		{:else}
			<li style="background-color: gray;">18</li>
		{/if}
		{#if form?.time_18}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/19.html')"
			>
				19
			</li>
		{:else}
			<li style="background-color: gray;">19</li>
		{/if}
		{#if form?.time_19}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/20.html')"
			>
				20
			</li>
		{:else}
			<li style="background-color: gray;">20</li>
		{/if}

		{#if form?.time_20}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/21.html')"
			>
				21
			</li>
		{:else}
			<li style="background-color: gray;">21</li>
		{/if}

		{#if form?.time_21}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/22.html')"
			>
				22
			</li>
		{:else}
			<li style="background-color: gray;">22</li>
		{/if}

		{#if form?.time_22}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/23.html')"
			>
				23
			</li>
		{:else}
			<li style="background-color: gray;">23</li>
		{/if}

		{#if form?.time_23}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/24.html')"
			>
				24
			</li>
		{:else}
			<li style="background-color: gray;">24</li>
		{/if}

		{#if form?.time_24}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/25.html')"
			>
				25
			</li>
		{:else}
			<li style="background-color: gray;">25</li>
		{/if}

		{#if form?.time_25}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/26.html')"
			>
				26
			</li>
		{:else}
			<li style="background-color: gray;">26</li>
		{/if}

		{#if form?.time_26}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/27.html')"
			>
				27
			</li>
		{:else}
			<li style="background-color: gray;">27</li>
		{/if}

		{#if form?.time_27}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/28.html')"
			>
				28
			</li>
		{:else}
			<li style="background-color: gray;">28</li>
		{/if}

		{#if form?.time_28}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/29.html')"
			>
				29
			</li>
		{:else}
			<li style="background-color: gray;">29</li>
		{/if}

		{#if form?.time_29}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/30.html')"
			>
				30
			</li>
		{:else}
			<li style="background-color: gray;">30</li>
		{/if}

		{#if form?.time_30}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/31.html')"
			>
				31
			</li>
		{:else}
			<li style="background-color: gray;">31</li>
		{/if}

		{#if form?.time_31}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/32.html')"
			>
				32
			</li>
		{:else}
			<li style="background-color: gray;">32</li>
		{/if}

		{#if form?.time_32}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/33.html')"
			>
				33
			</li>
		{:else}
			<li style="background-color: gray;">33</li>
		{/if}

		{#if form?.time_33}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/34.html')"
			>
				34
			</li>
		{:else}
			<li style="background-color: gray;">34</li>
		{/if}

		{#if form?.time_34}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/35.html')"
			>
				35
			</li>
		{:else}
			<li style="background-color: gray;">35</li>
		{/if}

		{#if form?.time_35}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/36.html')"
			>
				36
			</li>
		{:else}
			<li style="background-color: gray;">36</li>
		{/if}

		{#if form?.time_36}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/37.html')"
			>
				37
			</li>
		{:else}
			<li style="background-color: gray;">37</li>
		{/if}

		{#if form?.time_37}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/38.html')"
			>
				38
			</li>
		{:else}
			<li style="background-color: gray;">38</li>
		{/if}

		{#if form?.time_38}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/39.html')"
			>
				39
			</li>
		{:else}
			<li style="background-color: gray;">39</li>
		{/if}

		{#if form?.time_39}
			<li
				style="background-color: #428bca;"
				onclick="location.replace('/levels/40.html')"
			>
				40
			</li>
		{:else}
			<li style="background-color: gray;">40</li>
		{/if}
	</ul>
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

	.btn {
		display: block;
		margin-right: auto;
		margin-left: auto;
	}
	* {
		box-sizing: border-box;
	}

	img {
		width: 100%;
		margin-bottom: 5px;
		border-radius: 5px;
		box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
	}

	html {
		font-size: 100%;
	}

	html,
	body {
		height: 100vh;
	}

	body {
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "Lobster", Georgia, serif;
		color: #545454;
	}

	.container {
		padding: 0 20px;
	}

	h1 {
		text-align: center;
		font-size: 2.4rem;
		margin: 0 0 0.8em;
	}

	.overlay {
		transform: translateX(-16px);
		overflow-y: hidden;
		z-index: 9999;
		background-color: #131317;
		display: block;
		margin-right: auto;
		margin-left: auto;
		width: 100%;
		height: 200%;
		position: fixed; /* Ensure the overlay is on top */
		overflow: hidden;
	}

	@media screen and (min-width: 400px) {
		h1 {
			font-size: 3rem;
		}
	}

	.levels {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
		margin: 0 -15px;
		align-items: center;
		justify-content: center;
		font-size: 1.8rem;
	}

	.levels li {
		margin: 0 15px 30px;
		padding: 5px;
		width: 20%;
		height: 20%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border: 1px solid #f6f6f6;
		border-radius: 5px;
		box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
		background-color: gray;
		/*background-color: #428bca;*/
		color: white;
		position: relative;
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}

	.levels li:hover {
		color: #fff;
		background-color: #99ce2a;
		transform: scale(1.04);
	}
</style>
