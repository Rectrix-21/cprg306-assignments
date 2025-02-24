import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 flex flex-col items-center">New Item</h1>
      <NewItem />
    </main>
  );
}