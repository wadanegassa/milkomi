"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";

type BookingValues = {
  name: string;
  phone: string;
  email?: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  guests: string;
  message: string;
};

export default function BookingForm({defaultRoom = ""}: {defaultRoom?: string}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  const {register, handleSubmit, formState: {errors}} = useForm<BookingValues>({
    defaultValues: {roomType: defaultRoom, guests: "2", message: ""},
  });

  async function onSubmit(values: BookingValues) {
    setStatus("submitting");
    try {
      const fd = new FormData();
      fd.append("type", "booking");
      fd.append("locale", "en");
      Object.entries(values).forEach(([k, v]) => fd.append(k, v ?? ""));
      const res = await fetch("/api/telegram", {method: "POST", body: fd});
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[30px] border border-white/15 bg-surface/20 p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-foreground/90">Name</span>
          <input
            {...register("name", {required: true})}
            className="w-full rounded-2xl border border-foreground/10 bg-surface px-4 py-3.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/70 placeholder:text-foreground/40"
          />
          {errors.name && <span className="text-xs text-red-300">Required</span>}
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-foreground/90">Phone</span>
          <input
            {...register("phone", {required: true})}
            className="w-full rounded-2xl border border-foreground/10 bg-surface px-4 py-3.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/70 placeholder:text-foreground/40"
          />
          {errors.phone && <span className="text-xs text-red-300">Required</span>}
        </label>

        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-semibold text-foreground/90">Email (optional)</span>
          <input
            {...register("email")}
            className="w-full rounded-2xl border border-foreground/10 bg-surface px-4 py-3.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/70 placeholder:text-foreground/40"
            placeholder="email@example.com"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-foreground/90">Check-in date</span>
          <input
            type="date"
            {...register("checkIn", {required: true})}
            className="w-full rounded-2xl border border-foreground/10 bg-surface px-4 py-3.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/70"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-foreground/90">Check-out date</span>
          <input
            type="date"
            {...register("checkOut", {required: true})}
            className="w-full rounded-2xl border border-foreground/10 bg-surface px-4 py-3.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/70"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-foreground/90">Room type</span>
          <input
            {...register("roomType", {required: true})}
            className="w-full rounded-2xl border border-foreground/10 bg-surface px-4 py-3.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/70 placeholder:text-foreground/40"
            placeholder="e.g. Standard Room"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-foreground/90">Number of guests</span>
          <input
            {...register("guests", {required: true})}
            className="w-full rounded-2xl border border-foreground/10 bg-surface px-4 py-3.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/70 placeholder:text-foreground/40"
            placeholder="2"
          />
        </label>

        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-semibold text-foreground/90">Message</span>
          <textarea
            rows={5}
            {...register("message", {required: true})}
            className="w-full resize-y rounded-2xl border border-foreground/10 bg-surface px-4 py-3.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/70 placeholder:text-foreground/40"
            placeholder="Share any special requests..."
          />
        </label>
      </div>

      <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs text-foreground/70">Sent to our team via Telegram.</p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground disabled:opacity-70 hover:brightness-110 transition"
        >
          {status === "submitting" ? "Sending..." : "Submit booking request"}
        </button>
      </div>

      {status === "sent" && (
        <p className="mt-4 text-sm text-accent">Request sent successfully.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-300">Failed to send, please retry.</p>
      )}
    </form>
  );
}
