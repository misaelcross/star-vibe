import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="flex flex-col sm:flex-row justify-between w-full gap-8 sm:gap-0">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <Image
                src="/icon-star-logo.svg"
                alt="Star Vibe Logo"
                width={36}
                height={36}
                className="mr-2"
              />
              <h3 className="text-2xl">Star Vibe</h3>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-start">
            <div>
              <Link href="#testimonials" className="opacity-60 hover:opacity-100">
                Depoimentos
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#pricing" className="opacity-60 hover:opacity-100">
                Criar Conta
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2025 Star Vibe. Todos os direitos reservados
          </h3>
        </section>
      </div>
    </footer>
  );
};
