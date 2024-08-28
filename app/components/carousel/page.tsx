"use client";
import usePrismJs from "@/lib/hooks/usePrismJs";
import { Carousel } from "hello-design-system";

const code = `
  // Default usage
  <Carousel
    imageUrls={["image.example.com.1", "image.example.com.2", ...]}
    showArrows={true}
    autoplay={true}
    autoplayInterval={3000}
   />

  // Types
  interface CarouselProps {
    className?: string;
    imageUrls: string[];
    showArrows?: boolean;
    autoplay?: boolean;
    autoplayInterval?: number;
  }

`;

export default function CarouselPage() {
  usePrismJs();

  return (
    <section className="flex flex-col gap-4 justify-center align-middle">
      <h1 className="font-semibold text-lg md:text-xl">Carousel</h1>
      <pre className="bg-slate-100 pb-4 px-2 text-sm text-wrap rounded-md mb-8 text-gray-700">
        <code className="language-js">{code}</code>
      </pre>
      <div className="flex flex-col gap-0">
        <Carousel
          imageUrls={[
            "https://images.unsplash.com/photo-1503455637927-730bce8583c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1668681919287-7367677cdc4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1623150502742-6a849aa94be4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1623141629340-4686d65d60bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ]}
          showArrows={true}
          autoplay={true}
          autoplayInterval={3000}
        />
      </div>
    </section>
  );
}
