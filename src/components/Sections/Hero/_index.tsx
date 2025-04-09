import ActionBtn from "./ActionBtn";
import Introduction from "./Introduction";

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center relative z-10">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <Introduction />
          <ActionBtn />
        </div>
      </div>
    </section>
  );
}
