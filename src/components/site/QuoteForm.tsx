"use client";

import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Send } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { EMAIL, whatsappUrl } from "@/lib/contact";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().trim().min(2, "Indique o seu nome").max(80),
  contact: z.string().trim().min(6, "Contacto inválido").max(60),
  type: z.string().min(1, "Escolha um tipo de projeto"),
  description: z.string().trim().min(10, "Descreva brevemente (mín. 10 caracteres)").max(1000),
});

const types = [
  "Remodelação total (particular)",
  "Cozinha ou casa de banho",
  "Pinturas / pequenos arranjos",
  "Imóvel para investimento",
  "Outro",
];

function buildMessage(v: z.infer<typeof schema>) {
  return `*Novo pedido de orçamento — InnovateQuest*

*Nome:* ${v.name}
*Contacto:* ${v.contact}
*Tipo de projeto:* ${v.type}

*Descrição:*
${v.description}`;
}

export function QuoteForm() {
  const [form, setForm] = useState({ name: "", contact: "", type: "", description: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (channel: "whatsapp" | "email") => {
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const e: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (e[i.path[0] as string] = i.message));
      setErrors(e);
      toast.error("Verifique os campos do formulário");
      return;
    }
    setErrors({});
    const message = buildMessage(parsed.data);

    if (channel === "whatsapp") {
      window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
      toast.success("A abrir WhatsApp…");
    } else {
      const subject = "Pedido de orçamento — InnovateQuest";
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    }
  };

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <section id="orcamento" className="relative overflow-hidden bg-primary-dark py-24 text-white sm:py-32">
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Orçamento</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Peça o seu orçamento em 1 minuto
          </h2>
          <p className="mt-4 text-base text-white/75 sm:text-lg">
            Preencha o formulário — enviamos diretamente para o nosso WhatsApp para resposta rápida.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit("whatsapp");
          }}
          className="mt-12 grid gap-5 rounded-3xl bg-white/5 p-6 backdrop-blur-md ring-1 ring-white/10 sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nome" error={errors.name}>
              <input
                type="text"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="O seu nome"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                maxLength={80}
              />
            </Field>
            <Field label="Telefone ou email" error={errors.contact}>
              <input
                type="text"
                value={form.contact}
                onChange={(e) => set("contact", e.target.value)}
                placeholder="Como podemos contactá-lo"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                maxLength={60}
              />
            </Field>
          </div>

          <Field label="Tipo de projeto" error={errors.type}>
            <Select value={form.type} onValueChange={(v) => set("type", v)}>
              <SelectTrigger className="h-auto w-full rounded-xl border-white/15 bg-white/5 px-4 py-3 text-white focus:border-primary focus:ring-primary/40 data-[placeholder]:text-white/40 [&>span]:text-white">
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-white/15 bg-primary-dark text-white shadow-xl">
                {types.map((t) => (
                  <SelectItem
                    key={t}
                    value={t}
                    className="rounded-lg text-white/90 focus:bg-white/10 focus:text-white"
                  >
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field label="Breve descrição" error={errors.description}>
            <textarea
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              placeholder="Conte-nos o que precisa, área aproximada, prazos ideais…"
              rows={5}
              className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              maxLength={1000}
            />
          </Field>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 font-semibold text-whatsapp-foreground shadow-soft transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Enviar via WhatsApp
            </button>
            <button
              type="button"
              onClick={() => submit("email")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Mail className="h-5 w-5" />
              Enviar por Email
            </button>
          </div>

          <p className="mt-1 flex items-center justify-center gap-2 text-xs text-white/50">
            <Send className="h-3 w-3" /> Respondemos em menos de 24 horas úteis.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-left">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/70">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-300">{error}</span>}
    </label>
  );
}
