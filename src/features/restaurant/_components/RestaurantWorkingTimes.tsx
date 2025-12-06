"use client";
import { SocialState } from "@/interfaces/interface";
import { Facebook, Instagram, Linkedin, Network, Save } from "lucide-react";
import { useActionState } from "react";
import { EditRestaurantSocial } from "../action/restaurant";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

export default function RestaurantWorkingTimes({
  facebook,
  instagram,
  linkedIn,
}: {
  facebook: string;
  instagram: string;
  linkedIn: string;
}) {
  const initialState: SocialState = { message: null, errors: {} };

  const [state, action, isPending] = useActionState<SocialState, FormData>(
    EditRestaurantSocial,
    initialState,
  );
  const t = useTranslations("RestaurantSettings");
  return (
    <form className="mt-2 rounded-2xl bg-white p-8" action={action}>
      <div className="pt-6">
        <h3 className="mb-10 flex items-center gap-2 text-lg font-semibold text-slate-900">
          <Network className="h-5 w-5 text-emerald-600" />
          {t("SocialMediaLinks")}
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
              <Facebook className="h-4 w-4 text-blue-600" />
              {t("FacebookProfile")}
            </label>
            <Input
              defaultValue={facebook}
              type="url"
              disabled={isPending}
              name="facebook"
              placeholder="https://facebook.com/yourpage"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
            />
            {state.errors?.facebook &&
              state.errors.facebook.map((text, index) => (
                <p key={index} className="text-red-500">
                  {text}
                </p>
              ))}
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
              <Instagram className="h-4 w-4 text-pink-600" />
              {t("InstagramProfile")}
            </label>
            <Input
              defaultValue={instagram}
              type="url"
              disabled={isPending}
              name="instagram"
              placeholder="https://instagram.com/yourpage"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
            />
            {state.errors?.instagram &&
              state.errors.instagram.map((text, index) => (
                <p key={index} className="text-red-500">
                  {text}
                </p>
              ))}
          </div>

          <div>
            <label className="mb-2 block flex items-center gap-2 text-sm font-medium text-slate-700">
              <Linkedin className="h-4 w-4 text-blue-700" />
              {t("LinkedInProfile")}
            </label>
            <Input
              defaultValue={linkedIn}
              type="url"
              disabled={isPending}
              name="linkedIn"
              placeholder="https://linkedin.com/company/yourpage"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
            />
            {state.errors?.linkedIn &&
              state.errors.linkedIn.map((text, index) => (
                <p key={index} className="text-red-500">
                  {text}
                </p>
              ))}
          </div>
          {state.message && <p className="text-red-500">{state.message}</p>}
        </div>
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={isPending}
            className="flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Save className="h-5 w-5" />
            {isPending ? t("Saving") : t("SaveChanges")}
          </button>
        </div>
      </div>
    </form>
  );
}
