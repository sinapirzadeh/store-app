import Link from "next/link";

export default function FooterDescription() {
  return (
    <footer className="text-sm py-4 border-t border-gray-200 dark:border-gray-750 flex justify-between max-sm:flex-col max-sm:gap-3 items-center">
      <p className="text-gray-500">
        تمامی حقوق برای سایت{" "}
        <Link
          href="/"
          className="text-red-500 font-bold hover:text-blue-500 hover:underline transition-colors duration-200"
        >
          بیس پروژه
        </Link>{" "}
        محفوظ است.
      </p>
      <p className="text-gray-500 ">
        <span>برنامه‌نویس و طراح سایت </span>
        <Link
          href="https://sinapirzadeh.ir/"
          className="text-gray-500 hover:text-blue-500 hover:underline transition-colors duration-200"
          aria-label="وب‌سایت سینا پیرزاده"
        >
          سینا پیرزاده
        </Link>
      </p>
    </footer>
  );
}
