import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      location: "São Paulo, SP",
      text: "Meu carro foi roubado na porta de casa. Em 48h a Solidy já tinha resolvido tudo e eu recebi 100% da tabela FIPE. Não fiquei nem um dia sem carro!",
      rating: 5,
    },
    {
      name: "Maria Santos",
      location: "Rio de Janeiro, RJ",
      text: "Batida forte na marginal. Perda total. Enquanto outras seguradoras enrolam, a Solidy pagou rapidinho. Recomendo de olhos fechados!",
      rating: 5,
    },
    {
      name: "João Oliveira",
      location: "Belo Horizonte, MG",
      text: "Assistência 24h salvou minha vida. Pane no meio da estrada, 2h da manhã. Em 30 minutos o guincho estava lá. Serviço impecável!",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6 text-balance">
              Mais de 50.000 Clientes Protegidos
            </h2>
            <p className="text-xl text-muted-foreground">Veja o que nossos clientes falam sobre a Solidy</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-6 relative">
                <Quote className="w-8 h-8 text-primary mb-4" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">Clientes Protegidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Tempo Médio</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Cobertura FIPE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
