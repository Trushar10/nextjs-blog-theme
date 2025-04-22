import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <img
        src="public/images/profile-circle.png"
        alt="Logo"
        className="block w-[50px] h-[50px] mx-auto mb-4 rounded-full"
      />
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">{name}</Link>
      </p>
    </header>
  );
}
