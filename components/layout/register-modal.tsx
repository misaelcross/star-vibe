"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

interface RegisterModalProps {
  triggerClassName?: string;
  buttonText: string;
}

export const RegisterModal = ({ triggerClassName, buttonText }: RegisterModalProps) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error('Failed to send email');
        }

        setIsSubmitted(true);
        setTimeout(() => {
          setOpen(false);
          setIsSubmitted(false);
          setEmail('');
        }, 2000);
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className={triggerClassName}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Faça parte da Star Vibe</DialogTitle>
          <DialogDescription>
            Digite seu e-mail abaixo e te enviaremos um e-mail com um cupom de 50% OFF para você.
          </DialogDescription>
        </DialogHeader>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-2">
            <Input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={handleEmailChange}
              className="col-span-3"
            />
            <Button type="submit" disabled={!isValid}>
              Continuar
            </Button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 py-4">
            <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Enviamos um link de confirmação para seu e-mail.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};