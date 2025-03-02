import { ItemList } from "./item-list";

export default function Page() {
  return (
    <main className="max-w-lg mx-auto p-6 bg-gray text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4 flex flex-col items-center">Shopping List</h1>
      <ItemList />
    </main>
  );
}
