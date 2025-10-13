import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

const stories = [
  { id: 1, title: "New Releases", img: "/stories/story.png" },
  { id: 2, title: "Bedtime", img: "/stories/story.png" },
  { id: 3, title: "Animals", img: "/stories/story.png" },
  { id: 4, title: "Learning", img: "/stories/story.png" },
  { id: 5, title: "Adventure", img: "/stories/story.png" },
  { id: 6, title: "Fairy Tales", img: "/stories/story.png" },
  { id: 7, title: "Numbers", img: "/stories/story.png" },
  { id: 8, title: "Alphabet", img: "/stories/story.png" },
  { id: 9, title: "Nature", img: "/stories/story.png" },
];

export default function Stories() {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e) => {
      // if horizontal intent, let it be; otherwise translate vertical wheel to horizontal scroll
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (e.shiftKey) return;
      el.scrollLeft += e.deltaY;
      e.preventDefault();
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto pb-3">
          <div
            ref={ref}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
          >
            {stories.map((s, i) => (
              <Link key={i} href="/books" className="snap-start">
                <div className="w-28 sm:w-32 md:w-36 flex flex-col items-center cursor-pointer">
                  <div className="h-2" />
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full ring-4 overflow-hidden mx-auto tt-story-ring transition-transform duration-200 ease-out hover:scale-105 active:scale-100">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-2 text-sm text-center text-gray-700 dark:text-gray-200 font-semibold">
                    {s.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
