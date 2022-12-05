export default function FormButton() {
  return (
    <form method="POST">
      <button
        className="flex items-center rounded bg-slate-100 p-2 text-sky-500"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
