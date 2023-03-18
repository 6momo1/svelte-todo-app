import { c as create_ssr_component, a as subscribe, v as validate_component, b as each, d as add_attribute, e as escape } from './index2-11153cb5.js';
import { w as writable } from './index-faab5b7a.js';

const todos = writable([]);
const TodoForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let todo = "";
  return `<form class="form my-6"><div class="flex flex-col text-sm mb-2"><label for="todo" class="font-bold mb-2 text-gray-800 ">Todo
        </label>
        <input type="text" name="todo" placeholder="What do you plan on doing next?" class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "${add_attribute("value", todo, 0)}></div>
    <button type="submit" class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Submit
    </button></form>`;
});
const Todo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { todo } = $$props;
  if ($$props.todo === void 0 && $$bindings.todo && todo !== void 0)
    $$bindings.todo(todo);
  return `<li class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4"><input name="completed" type="checkbox" ${todo.completed ? "checked" : ""} class="mr-2 form-checkbox h-5 w-5">
    <span${add_attribute("class", `flex-1 text-gray-800  ${todo.completed ? "line-through" : ""}`, 0)}>${escape(todo.text)}</span>
    <button type="button" class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete
    </button>
    <button type="button" class="duration-200 transition-all box-border bg-blue-400 bg-opacity-20 text-primary-400 hover:bg-opacity-30 buttonSize--large">Delete
    </button></li>`;
});
const css = {
  code: "html{background-color:#f3f4f6}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $todos, $$unsubscribe_todos;
  $$unsubscribe_todos = subscribe(todos, (value) => $todos = value);
  $$result.css.add(css);
  $$unsubscribe_todos();
  return `<main><div class="m-10"><h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">My Todos
        </h1>
        ${validate_component(TodoForm, "TodoForm").$$render($$result, {}, {}, {})}
        ${each($todos, (todo) => {
    return `${validate_component(Todo, "Todo").$$render($$result, { todo, index: todo.id }, {}, {})}`;
  })}</div>
</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-430c935e.js.map
