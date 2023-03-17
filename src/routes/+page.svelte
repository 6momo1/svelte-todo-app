<script>
// @ts-nocheck

    import { each } from "svelte/internal";
    import TodoForm from "../components/TodoForm.svelte";
    import Todo from "../components/Todo.svelte";
    import { todos } from "../stores/todoStores";
</script>

<main>
    <div class="m-10">
        <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">
            My Todos
        </h1>
        <TodoForm />
        {#each $todos as todo}
            <Todo todo={todo} index={todo.id} />
        {/each}
    </div>
</main>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>
