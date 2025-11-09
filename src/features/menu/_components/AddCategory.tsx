"use client";
import { MenuCategoryState } from "@/interfaces/interface";
import { Plus } from "lucide-react";
import { useActionState } from "react";
import { addCategory } from "../actions/menuaction";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddCategory() {
  const initialState: MenuCategoryState = { message: null, errors: {} };
  const [state, action, isPending] = useActionState(addCategory, initialState);
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">
        Add Category
      </h2>
      <form action={action} className="flex gap-3">
        <Input
          type="text"
          disabled={isPending}
          placeholder="Category name (e.g., Appetizers, Main Course)"
          className="min-h-9 flex-1 rounded-lg border border-slate-300 px-4 py-2.5 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
          name="category_name"
        />
        <Button
          //   onClick={addCategory}
          type="submit"
          disabled={isPending}
          className="flex min-h-9 items-center gap-2 rounded-lg bg-emerald-600 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-emerald-700"
        >
          <Plus className="h-5 w-5" />
          {isPending ? "Creating..." : "Add"}
        </Button>
      </form>
      {state.errors?.category_name &&
        state.errors.category_name.map((item, index) => (
          <p className="text-sm text-red-500" key={index}>
            {item}
          </p>
        ))}
      {state.message && <p className="text-red-500">{state.message}</p>}
    </div>
  );
}
