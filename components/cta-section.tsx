"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Clock, CheckCircle } from "lucide-react"
import { useState } from "react"

export function CTASection() {
  const [formData, setFormData] = useState({
    nome: "",
    contato: "",
    veiculo: "",
    placa: "",
  })

  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de fazer uma cotação para proteção veicular.

*Dados para cotação:*
Nome: ${formData.nome || "Não informado"}
Contato: ${formData.contato || "Não informado"}  
Veículo: ${formData.veiculo || "Não informado"}
Placa: ${formData.placa || "Não informado"}

Aguardo retorno!`

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      <div className="absolute inset-0 hero-gradient"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-primary" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Proteja Seu Veículo
            <br />
            <span className="text-primary">Agora Mesmo</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Não espere acontecer o pior. Garante sua tranquilidade hoje e durma em paz sabendo que está protegido.
          </p>

          <div className="bg-card border border-border rounded-lg p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Cotação Gratuita em 2 Minutos</h3>

            <div className="space-y-4">
              <Input
                placeholder="Nome completo"
                className="bg-background border-border"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              />
              <Input
                placeholder="WhatsApp (com DDD)"
                className="bg-background border-border"
                value={formData.contato}
                onChange={(e) => setFormData({ ...formData, contato: e.target.value })}
              />
              <Input
                placeholder="Veículo (marca/modelo/ano)"
                className="bg-background border-border"
                value={formData.veiculo}
                onChange={(e) => setFormData({ ...formData, veiculo: e.target.value })}
              />
              <Input
                placeholder="Placa do veículo"
                className="bg-background border-border"
                value={formData.placa}
                onChange={(e) => setFormData({ ...formData, placa: e.target.value })}
              />

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                onClick={handleWhatsAppClick}
              >
                Solicitar Cotação via WhatsApp
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Resposta em 5 min</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-card/50 border border-border rounded-lg p-6">
              <div className="text-2xl font-bold text-primary mb-2">Passo 1</div>
              <div className="text-card-foreground font-semibold mb-2">Preencha o formulário</div>
              <div className="text-sm text-muted-foreground">Informações básicas sobre você e seu veículo</div>
            </div>

            <div className="bg-card/50 border border-border rounded-lg p-6">
              <div className="text-2xl font-bold text-primary mb-2">Passo 2</div>
              <div className="text-card-foreground font-semibold mb-2">Receba sua cotação</div>
              <div className="text-sm text-muted-foreground">Nossa equipe entra em contato em até 5 minutos</div>
            </div>

            <div className="bg-card/50 border border-border rounded-lg p-6">
              <div className="text-2xl font-bold text-primary mb-2">Passo 3</div>
              <div className="text-card-foreground font-semibold mb-2">Ative sua proteção</div>
              <div className="text-sm text-muted-foreground">Proteção ativa imediatamente após contratação</div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-accent/20 border border-accent/40 rounded-lg">
            <p className="text-lg font-semibold text-foreground mb-2">
              🔥 Oferta Especial: Mensalidade a partir de R$ 79,99/mês
            </p>
            <p className="text-muted-foreground">Válida apenas para os próximos 100 clientes. Não perca!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
