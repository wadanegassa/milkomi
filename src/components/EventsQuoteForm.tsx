"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";
import {useTranslations, useLocale} from "next-intl";

type EventQuoteFormValues = {
  name: string;
  phone: string;
  email?: string;
  eventType: string;
  date: string;
  guestCount: string;
  message: string;
};

export default function EventsQuoteForm() {
  const locale = useLocale();
  const t = useTranslations("forms.eventQuote");
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<EventQuoteFormValues>({
    defaultValues: {
      guestCount: "",
      message: "",
    },
  });

  async function onSubmit(values: EventQuoteFormValues) {
    setStatus("submitting");
    try {
      const fd = new FormData();
      fd.append("type", "event_quote");
      fd.append("locale", locale);
      fd.append("name", values.name);
      fd.append("phone", values.phone);
      fd.append("email", values.email ?? "");
      fd.append("eventType", values.eventType);
      fd.append("date", values.date);
      fd.append("guestCount", values.guestCount);
      fd.append("message", values.message);

      const res = await fetch("/api/telegram", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) throw new Error("Telegram request failed");

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
          <span className="text-sm font-semibold text-foreground/90">{t("name")}</span>
          <input
            {...register("name", {required: true})}
            className="w-full rounded-2xl border border-foreground/10 bg-white px-4 py-3.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/70 placeholder:text-foreground/40"
            placeholder="e.g. Abebe Tesfaye"
          />
          {errors.name && <span className="text-xs text-red-300">Required</span>}
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-foreground/90">{t("phone")}</span>
          <input
            {...register("phone", {required: true})}
            className="w-full rounded-2xl border border-foreground/10 bg-white px-4 py-3.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/70 placeholder:text-foreground/40"
            placeholder="+251..."
          />
          {errors.phone && <span className="text-xs text-red-300">Required</span>}
        </label>

        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-semibold text-foreground/90">{t("email")}</span>
          <input
            {...register("email")}
            className="w-full rounded-2xl border border-foreground/10 bg-white px-4 py-3.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/70 placeholder:text-foreground/40"
            placeholder="email@example.com"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-foreground/90">{t("eventType")}</span>
          <input
            {...register("eventType", {required: true})}
            className="w-full rounded-2xl border border-foreground/10 bg-white px-4 py-3.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/70 placeholder:text-foreground/40"
            placeholder="Weddings, Corporate, Private..."
          />
          {errors.eventType && <span className="text-xs text-red-300">Required</span>}
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-foreground/90">{t("date")}</span>
          <input
            type="date"
            {...register("date", {required: true})}
            className="w-full rounded-2xl border border-foreground/10 bg-white px-4 py-3.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/70"
          />
          {errors.date && <span className="text-xs text-red-300">Required</span>}
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-foreground/90">{t("guestCount")}</span>
          <input
            {...register("guestCount", {required: true})}
            className="w-full rounded-2xl border border-foreground/10 bg-white px-4 py-3.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/70 placeholder:text-foreground/40"
            placeholder="e.g. 120"
          />
          {errors.guestCount && <span className="text-xs text-red-300">Required</span>}
        </label>

        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-semibold text-foreground/90">{t("message")}</span>
          <textarea
            {...register("message", {required: true})}
            rows={4}
            className="w-full resize-y rounded-2xl border border-foreground/10 bg-white px-4 py-3.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/70 placeholder:text-foreground/40"
            placeholder="Share setup style, timing, and any preferences..."
          />
          {errors.message && <span className="text-xs text-red-300">Required</span>}
        </label>
      </div>

      <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs text-foreground/70">We’ll forward your details via Telegram.</p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110 disabled:opacity-70 transition"
        >
          {status === "submitting" ? "Sending..." : t("submit")}
        </button>
      </div>

      {status === "sent" && (
        <p className="mt-4 text-sm text-accent">
          Request sent successfully.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-300">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

