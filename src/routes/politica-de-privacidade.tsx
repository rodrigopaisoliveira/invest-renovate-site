import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { COMPANY, EMAIL, PHONE_NUMBER } from "@/lib/contact";

const SITE_URL = "https://innovatequest.pt/politica-de-privacidade";
const LAST_UPDATE = "12 de novembro de 2026";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Innovate Quest" },
      {
        name: "description",
        content:
          "Política de Privacidade da Innovate Quest Lda: que dados pessoais recolhemos, para que os usamos e quais são os seus direitos.",
      },
      { property: "og:title", content: "Política de Privacidade — Innovate Quest" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: PrivacyPolicy,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center px-4 py-5 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: {LAST_UPDATE}</p>

        <p className="mt-8 leading-relaxed text-muted-foreground">
          A {COMPANY.name} respeita a sua privacidade e trata os seus dados pessoais de acordo com o
          Regulamento Geral sobre a Proteção de Dados (RGPD – Regulamento (UE) 2016/679) e a
          restante legislação aplicável. Esta página explica que dados recolhemos através do site
          innovatequest.pt, para que fins e quais são os seus direitos.
        </p>

        <Section title="1. Responsável pelo tratamento">
          <ul className="list-disc space-y-1 pl-5">
            <li>Designação social: {COMPANY.name}</li>
            <li>NIF: {COMPANY.nif}</li>
            <li>Morada: {COMPANY.address}</li>
            <li>
              Email:{" "}
              <a className="text-primary underline" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </li>
            <li>
              Telefone:{" "}
              <a className="text-primary underline" href={`tel:${PHONE_NUMBER.tel}`}>
                {PHONE_NUMBER.display}
              </a>
            </li>
          </ul>
        </Section>

        <Section title="2. Que dados recolhemos">
          <p>Só tratamos os dados que nos fornece diretamente, através de:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Formulário de pedido de orçamento:</strong> nome, telefone ou email, tipo de
              projeto e breve descrição do trabalho pretendido.
            </li>
            <li>
              <strong>Contacto por WhatsApp, telefone ou email:</strong> o seu número ou endereço de
              email e o conteúdo das mensagens que nos enviar.
            </li>
          </ul>
          <p>
            O formulário do site não guarda os dados numa base de dados: ao submetê-lo, abre uma
            conversa de WhatsApp ou uma mensagem de email dirigida à {COMPANY.name}, que só é
            enviada se decidir enviá-la.
          </p>
        </Section>

        <Section title="3. Para que usamos os seus dados e fundamento legal">
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Responder aos seus pedidos de contacto e preparar orçamentos, com base em diligências
              pré-contratuais a seu pedido (art.º 6.º, n.º 1, al. b) do RGPD).
            </li>
            <li>
              Execução e acompanhamento de trabalhos contratados e cumprimento de obrigações legais
              e fiscais (art.º 6.º, n.º 1, al. b) e c) do RGPD).
            </li>
          </ul>
          <p>Não vendemos os seus dados nem os usamos para decisões automatizadas.</p>
        </Section>

        <Section title="4. Com quem partilhamos os dados">
          <p>
            Os dados não são partilhados com terceiros, exceto prestadores de serviços necessários
            ao funcionamento da comunicação e do site (por exemplo, WhatsApp/Meta, o seu fornecedor
            de email e a plataforma de alojamento do site) ou quando a lei o exigir. Alguns destes
            prestadores podem tratar dados fora do Espaço Económico Europeu, ao abrigo das garantias
            legais aplicáveis.
          </p>
        </Section>

        <Section title="5. Durante quanto tempo guardamos os dados">
          <p>
            Guardamos os dados apenas pelo tempo necessário para a finalidade para que foram
            recolhidos. Pedidos de orçamento que não resultem em contrato são conservados por um
            período razoável para acompanhamento e, depois, eliminados. Os dados ligados a trabalhos
            contratados são conservados durante os prazos legais de contabilidade e garantia.
          </p>
        </Section>

        <Section title="6. Cookies e tecnologias de acompanhamento">
          <p>
            Este site não utiliza cookies de publicidade nem ferramentas de acompanhamento ou
            análise (como o Meta Pixel ou o Google Analytics). Podem existir cookies ou
            armazenamento técnico estritamente necessários ao funcionamento do site, que não exigem
            consentimento.
          </p>
          <p>
            Se no futuro passarmos a usar cookies de medição ou publicidade, esta política será
            atualizada e pediremos o seu consentimento prévio.
          </p>
          <p>
            O site contém ligações para serviços de terceiros (WhatsApp e Instagram), que têm as
            suas próprias políticas de privacidade e cookies.
          </p>
        </Section>

        <Section title="7. Os seus direitos">
          <p>Nos termos do RGPD, tem direito a:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>aceder aos seus dados pessoais e obter uma cópia;</li>
            <li>retificar dados inexatos ou incompletos;</li>
            <li>solicitar o apagamento dos dados;</li>
            <li>limitar ou opor-se ao tratamento;</li>
            <li>solicitar a portabilidade dos dados;</li>
            <li>retirar o consentimento, quando o tratamento se baseie nele.</li>
          </ul>
          <p>
            Para exercer estes direitos, contacte-nos por email para {EMAIL}. Tem ainda direito de
            apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD) em{" "}
            <a
              className="text-primary underline"
              href="https://www.cnpd.pt"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cnpd.pt
            </a>
            .
          </p>
        </Section>

        <Section title="8. Alterações a esta política">
          <p>
            Podemos atualizar esta política sempre que necessário. A data da última atualização está
            indicada no topo da página.
          </p>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 py-6 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
