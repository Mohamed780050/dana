import { Save } from "lucide-react";

export default function RestaurantForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Restaurant Name
          </label>
          <input
            type="text"
            // value={formData.name}
            // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="My Amazing Restaurant"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Restaurant Phone
          </label>
          <input
            type="tel"
            // value={formData.phone}
            // onChange={(e) =>
            //   setFormData({ ...formData, phone: e.target.value })
            // }
            placeholder="+1 (555) 123-4567"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Restaurant Description
        </label>
        <textarea
          //   value={formData.description}
          //   onChange={(e) =>
          //     setFormData({ ...formData, description: e.target.value })
          //   }
          placeholder="Tell customers about your restaurant..."
          rows={4}
          className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Restaurant Address
        </label>
        <input
          type="text"
          //   value={formData.address}
          //   onChange={(e) =>
          //     setFormData({ ...formData, address: e.target.value })
          //   }
          placeholder="123 Main Street, City, State 12345"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Currency
          </label>
          <select
            // value={formData.currency}
            // onChange={(e) =>
            //   setFormData({ ...formData, currency: e.target.value })
            // }
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="AUD">AUD - Australian Dollar</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            WhatsApp Phone
          </label>
          <input
            type="tel"
            // value={formData.whatsapp_phone}
            // onChange={(e) =>
            //   setFormData({ ...formData, whatsapp_phone: e.target.value })
            // }
            placeholder="+1 (555) 123-4567"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          //   onClick={saveRestaurantInfo}
          //   disabled={saving}
          className="flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Save className="h-5 w-5" />
          {/* {saving ? "Saving..." : "Save Changes"} */}
          Save Changes
        </button>
      </div>
    </form>
  );
}
