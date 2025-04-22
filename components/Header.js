import Link from 'next/link';

export default function Header({ name, globalData }) {
  // globalData is used in the JSX below
  return (
    <header className="pt-20 pb-12">
      <img
        src="/images/profile-circle.png"
        alt="Logo"
        className="block w-[100px] h-[100px] mx-auto mb-4 rounded-full"
      />
      <h1 className="text-5xl text-center dark:text-white">
        <Link href="/">{name}</Link>
      </h1>
    </header>
  );
}
