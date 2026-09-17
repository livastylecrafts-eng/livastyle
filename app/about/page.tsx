const storeName = process.env.NEXT_PUBLIC_STORE_NAME ?? "Liva Style Crafts";

export default function AboutPage() {
  return (
    <div className="container-page max-w-3xl py-16">
      <h1 className="text-2xl font-bold text-zinc-900">About {storeName}</h1>
      <p className="mt-4 text-zinc-600">
        {storeName} is a Kerala-based DIY craft studio — colouring and
        plaster craft kits, silicone moulds for resin and POP casting, and
        personalised keychains, name plaques, piggy banks and gifts, made
        for hobbyists, kids and anyone who loves making things by hand.
      </p>
      <p className="mt-4 text-zinc-600">
        Need a custom or bulk order? Reach out to us on WhatsApp using the
        chat button in the corner of the screen.
      </p>
    </div>
  );
}
