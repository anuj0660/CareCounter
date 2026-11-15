export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:items-center md:py-16">
      <div>
        <h1 className="font-head text-4xl font-extrabold leading-tight sm:text-5xl">
          Medicines you need, packed the same day.
        </h1>
        <p className="mt-4 max-w-md text-lg text-mute">
          Order everyday medicines, vitamins and health devices online. A licensed pharmacist checks every
          prescription item before it leaves the counter.
        </p>
        <div className="mt-6">
          <a href="#shelf" className="inline-block rounded-md bg-pine px-5 py-3 font-semibold text-onpine">Shop the shelf</a>
          
        </div>
      </div>
       <div>
      <img src="/src/img/doctor.png" alt="Doctor"  className="w-[1000px] h-auto" />
    </div>
    </section>
  );
}
