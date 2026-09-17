import { notFound } from "next/navigation";

const storeName = process.env.NEXT_PUBLIC_STORE_NAME ?? "Liva Style Crafts";

const policies: Record<string, { title: string; body: string }> = {
  "privacy-policy": {
    title: "Privacy Policy",
    body: `${storeName} collects only the information needed to process your order — name, address, phone, email — and never sells it to third parties. Payment details are handled entirely by Razorpay and are never stored on our servers.`,
  },
  "refund-policy": {
    title: "Refund Policy",
    body: `We accept returns within 30 days for items in their original, unused condition and packaging — contact us with your order details to start a return. Custom and personalised items (e.g. name plaques, custom keychains) cannot be returned unless they arrive damaged or defective. If an item arrives damaged, missing, or incorrect, contact us within 48 hours of delivery — an unboxing video is required to process any damage or missing-item claim. Approved refunds are issued to your original payment method.`,
  },
  "terms-of-service": {
    title: "Terms of Service",
    body: `By placing an order with ${storeName} you agree to provide accurate shipping information and to pay the listed price at checkout. Product images are representative; minor variations in colour, shade or finish may occur, especially for handmade and personalised items.`,
  },
  "shipping-policy": {
    title: "Shipping Policy",
    body: `Orders are processed within 1-3 business days after payment confirmation (custom orders may take a little longer) and typically arrive within 4-7 business days across India. Shipping is free on orders above ₹499; below that, charges are calculated at checkout. We currently accept prepaid orders only — cash on delivery (COD) is not available. Once shipped, you'll receive a tracking ID via email or WhatsApp.`,
  },
  "contact-us": {
    title: "Contact Us",
    body: `Questions about an order, or a bulk/custom request? Message us on WhatsApp using the chat button on this site, or email ${process.env.ADMIN_NOTIFICATION_EMAIL ?? "us"} and we'll get back to you within one business day.`,
  },
};

export default function PolicyPage({ params }: { params: { slug: string } }) {
  const policy = policies[params.slug];
  if (!policy) notFound();

  return (
    <div className="container-page max-w-2xl py-16">
      <h1 className="text-2xl font-bold text-zinc-900">{policy.title}</h1>
      <p className="mt-4 whitespace-pre-line text-zinc-600">{policy.body}</p>
    </div>
  );
}
