"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import { RegisterModal } from "./register-modal";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}
const routeList: RouteProps[] = [
  {
    href: "#benefits",
    label: "Benefícios",
  },
  {
    href: "#pricing",
    label: "Planos",
  },
  {
    href: "#testimonials",
    label: "Depoimentos",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Monetize seu Conteúdo",
    description: "Venda suas fotos e vídeos exclusivos com segurança.",
  },
  {
    title: "Privacidade Garantida",
    description: "Controle total sobre seu conteúdo e dados pessoais.",
  },
  {
    title: "Suporte 24/7",
    description: "Equipe dedicada para ajudar você a crescer na plataforma.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <Image
          src="/icon-star-logo.svg"
          alt="Star Vibe Logo"
          width={36}
          height={36}
          className="mr-2"
        />
        Star Vibe
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/icon-star-logo.svg"
                      alt="Star Vibe Logo"
                      width={36}
                      height={36}
                      className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg mr-2 border text-white"
                    />
                    Star Vibe
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-4 ml-4">
                {routeList.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-primary transition-colors"
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-row items-center justify-between w-full">
              <RegisterModal
                buttonText="Criar conta"
                triggerClassName="w-full font-bold"
              />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <div className="hidden lg:flex items-center gap-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {featureList.map((feature) => (
                    <div key={feature.title} className="p-4">
                      <h3 className="text-sm font-bold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {routeList.map((route) => (
              <NavigationMenuItem key={route.href}>
                <Link href={route.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    {route.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <RegisterModal
            buttonText="Criar conta"
            triggerClassName="font-bold"
          />
        </div>
      </div>
    </header>
  );
};
