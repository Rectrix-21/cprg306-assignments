import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center p-6">
      <div>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <p>
          Link to week 2: <Link href="week-2">Week 2 </Link>
        </p>
        <p>
          Link to week 3: <Link href="week-3">Week 3 </Link>
        </p>
        <p>
          Link to week 4: <Link href="week-4">Week 4 </Link>
        </p>
        <p>
          Link to week 5: <Link href="week-5">Week 5 </Link>
        </p>
        <p>
          Link to week 6: <Link href="week-6">Week 6 </Link>
        </p>
        <p>
          Link to week 7: <Link href="week-7">Week 7 </Link>
        </p>
        <p>
          Link to week 8: <Link href="week-8">Week 8 </Link>
        </p>
        <p>
          Link to week 9: <Link href="week-9">Week 9 </Link>
        </p>
      </div>
    </main>
  );
}
