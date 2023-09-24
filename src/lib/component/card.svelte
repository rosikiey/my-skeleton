<script>
	/**
	 * @type {any}
	 */
	export let classCard = 'card variant-ghost-surface lg:h-64 md:h-72';
</script>

<div class={classCard}>
	<header class="card-header"><slot name="theader" /></header>
	<section class="p-4"><slot name="tcontent" /></section>
	<footer class="card-footer pb-5"><slot name="tfooter" /></footer>
</div>
