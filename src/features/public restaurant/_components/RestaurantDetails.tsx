import { MapPin, MessageCircle, Phone, Utensils } from "lucide-react";

export default function RestaurantDetails({
  name,
  description,
  address,
  phone,
  wa_phone,
}: {
  name: string;
  description: string;
  address: string;
  phone: string;
  wa_phone: string;
}) {
  return (
    <div className="bg-linear-to-br from-emerald-600 via-emerald-500 to-teal-500 px-4 py-24 text-white shadow-xl">
      <div className="mx-auto max-w-5xl space-y-8 text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex h-32 w-32 transform items-center justify-center rounded-3xl bg-white shadow-2xl transition-transform hover:scale-105">
            <Utensils className="h-16 w-16 text-emerald-600" />
          </div>
        </div>

        <h1 className="text-5xl font-bold tracking-tight drop-shadow-lg md:text-6xl">
          {name}
        </h1>

        {description && (
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-emerald-50">
            {description}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
          {address && (
            <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">{address}</span>
            </div>
          )}

          {phone && (
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">{phone}</span>
            </a>
          )}

          {wa_phone && (
            <a
              href={`https://wa.me/${wa_phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">WhatsApp</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
