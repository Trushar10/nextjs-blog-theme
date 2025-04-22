import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <img
        src="/images/profile-circle.png"
        alt="Logo"
        className="block w-[100px] h-[100px] mx-auto mb-4 rounded-full"
      />
      <h1 className="text-5xl text-center dark:text-white">
        <Link href="/">{name}</Link>
      </>
      <h2 className="mb-12 text-2xl text-center lg:text-5xl">
          {globalData.blogTitle}
        </h2>
    </header>
  );
}
