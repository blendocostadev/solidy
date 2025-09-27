import { AlertTriangle, Car, CreditCard, Clock, Zap } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Imagine Esta Situação...
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              É uma segunda-feira qualquer. Você sai para trabalhar e quando volta...
            </p>
          </div>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Seu veículo não está mais lá.</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Roubado. Sumiu. E agora? Você ainda deve 36 parcelas do financiamento, precisa trabalhar amanhã, tem
                  compromissos, filhos para levar na escola...
                </p>
              </div>
            </div>
          </div>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <Zap className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Ou então... Uma colisão devastadora.</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Chuva forte, pista escorregadia, você perde o controle. Bate em outro carro e ainda atinge um poste.
                  Seu carro: perda total. O outro veículo: R$ 80 mil de prejuízo. Poste da prefeitura: mais R$ 15 mil.
                  Total dos danos: R$ 150 mil. E agora, quem vai pagar essa conta?
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Car className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-3">Sem Transporte</h4>
              <p className="text-muted-foreground">
                Como ir trabalhar? Como levar os filhos na escola? Uber e táxi todos os dias sai mais caro que a
                prestação do carro.
              </p>
            </div>

            <div className="text-center p-6">
              <CreditCard className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-3">Dívidas Acumulando</h4>
              <p className="text-muted-foreground">
                O financiamento continua. O seguro não cobre 100%. Você vai pagar um carro que nem existe mais.
              </p>
            </div>

            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-3">Tempo Perdido</h4>
              <p className="text-muted-foreground">
                Boletim de ocorrência, burocracia com seguro, procurar veiculo novo... Meses de dor de cabeça.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-semibold text-foreground mb-4">
              Mas e se eu te dissesse que existe uma forma de evitar tudo isso?
            </p>
            <p className="text-lg text-primary">Continue lendo e descubra como a Solidy pode te proteger...</p>
          </div>
        </div>
      </div>
    </section>
  )
}
