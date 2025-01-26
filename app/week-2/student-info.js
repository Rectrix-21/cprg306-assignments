import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h1>Student Info</h1>
      <div>
        <p>Student Name: Abhijith Krishnan</p>
      </div>
      <div>
        <p>
          Github Link:{" "}
          <Link href="https://github.com/Rectrix-21">Rectrix-21</Link>
        </p>
      </div>
    </div>
  );
}
