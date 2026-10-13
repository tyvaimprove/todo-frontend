import { useState, type SubmitEventHandler } from 'react'

type Todo = {
  id: string
  text: string
  done: boolean
}

const initialTodos: Todo[] = [
  { id: '1', text: 'Learn React Router', done: true },
  { id: '2', text: 'Build a todo list', done: false },
  { id: '3', text: 'Style it with Tailwind', done: false },
  { id: '4', text: 'Deploy to production', done: false },
]

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [input, setInput] = useState('')

  const remaining = todos.filter(t => !t.done).length

  const addTodo: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    setTodos(prev => [
      { id: crypto.randomUUID(), text, done: false },
      ...prev,
    ])
    setInput('')
  }

  const toggleTodo = (id: string) =>
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    )

  const removeTodo = (id: string) =>
    setTodos(prev => prev.filter(t => t.id !== id))

  return (
    <div className="mx-auto w-full max-w-md">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          My Todos
        </h1>
        <p className="mt-1 text-sm text-white/50">
          {remaining} remaining
        </p>
      </header>

      {/* Add form */}
      <form onSubmit={addTodo} className="mb-4 flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a task…"
          className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30
                     focus:outline-none focus:ring-2 focus:ring-white/20"
        />
        <button
          type="submit"
          className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-neutral-900
                     transition-colors hover:bg-white/90"
        >
          Add
        </button>
      </form>

      {/* List */}
      <ul className="space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5
                       transition-colors hover:bg-white/10"
          >
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
              className="size-4 cursor-pointer accent-white"
            />

            <span
              className={
                'flex-1 text-sm transition-colors ' +
                (todo.done
                  ? 'text-white/30 line-through'
                  : 'text-white/90')
              }
            >
              {todo.text}
            </span>

            <button
              onClick={() => removeTodo(todo.id)}
              aria-label="Delete todo"
              className="rounded-md px-2 py-1 text-white/30 opacity-0 transition
                         group-hover:opacity-100 hover:bg-white/10 hover:text-white/70
                         focus-visible:opacity-100 focus-visible:outline-none"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="mt-6 text-center text-sm text-white/40">
          No todos yet — add one above.
        </p>
      )}
    </div>
  )
}