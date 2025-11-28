"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserState } from "@/interfaces/interface";
import { ReactNode, useActionState } from "react";
import { addUser } from "../actions/userActions";
import { Save } from "lucide-react";

export default function AddUser({ children }: { children: ReactNode }) {
  const initialState: UserState = { message: null, errors: {} };
  const [state, action, isPending] = useActionState(addUser, initialState);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Add An Employee</DialogTitle>
            <DialogDescription>
              use this to add employees to your work.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" disabled={isPending} />
              {state.errors?.email &&
                state.errors.email.map((text, index) => (
                  <p className="text-sm text-red-600" key={index}>
                    {text}
                  </p>
                ))}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                disabled={isPending}
              />
              {state.errors?.password &&
                state.errors.password.map((text, index) => (
                  <p className="text-sm text-red-600" key={index}>
                    {text}
                  </p>
                ))}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" disabled={isPending}>
                Cancel
              </Button>
            </DialogClose>
            <Button
              className="bg-emerald-500 hover:bg-emerald-600"
              type="submit"
              disabled={isPending}
            >
              <Save />
              {isPending ? "Saving" : "Save changes"}
            </Button>
          </DialogFooter>
          {state.message && <p>{state.message}</p>}
        </form>
      </DialogContent>
    </Dialog>
  );
}
