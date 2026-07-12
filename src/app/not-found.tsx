import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-sm text-violet-400 mb-3">404</span>
      <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
        Page not found
      </h1>
      <p className="text-text-secondary max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
    </section>
  );
}
