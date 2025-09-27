import { Shield, Car, Users, Phone, Wrench, Heart, MapPin, Truck } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "100% Tabela FIPE",
      description: "Cobertura total em caso de roubo, furto ou perda total do veículo",
    },
    {
      icon: Car,
      title: "Proteção Colisão",
      description: "Cobertura completa para colisões e incêndio proveniente de colisão",
    },
    {
      icon: Truck,
      title: "Veículo Reserva",
      description: "Veículo reserva para você não ficar sem transporte",
    },
    {
      icon: Users,
      title: "Proteção Terceiros",
      description: "Até R$ 200.000 em danos materiais e corporais a terceiros",
    },
    {
      icon: Heart,
      title: "Amigo Médico",
      description: "Consultas virtuais 24h com médicos especializados",
    },
    {
      icon: Phone,
      title: "Assistência 24h",
      description: "Suporte completo em todo território nacional, qualquer hora",
    },
    {
      icon: Wrench,
      title: "Guincho Ilimitado",
      description: "Socorro sem limite de quilometragem para casos de colisão",
    },
    {
      icon: MapPin,
      title: "Cobertura Nacional",
      description: "Proteção válida em todos os estados do Brasil",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Proteção Completa Para Sua Tranquilidade
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Todos os benefícios que você precisa em um só lugar. Compare e veja por que somos a melhor escolha.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-card-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-card-foreground text-center mb-8">Solidy vs. Seguro Tradicional</h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-card-foreground">Benefício</th>
                    <th className="text-center py-4 px-4 text-primary font-bold">Solidy</th>
                    <th className="text-center py-4 px-4 text-muted-foreground">Seguro Tradicional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 text-card-foreground">Cobertura 100% FIPE</td>
                    <td className="text-center py-4 px-4 text-primary">✓</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">✗</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 text-card-foreground">Proteção contra desastres naturais</td>
                    <td className="text-center py-4 px-4 text-primary">✓</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">✗</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 text-card-foreground">Ativação imediata</td>
                    <td className="text-center py-4 px-4 text-primary">✓</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">✗</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 text-card-foreground">Amigo Médico</td>
                    <td className="text-center py-4 px-4 text-primary">✓</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">✗</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-card-foreground">Preço justo</td>
                    <td className="text-center py-4 px-4 text-primary">✓</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">✗</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
