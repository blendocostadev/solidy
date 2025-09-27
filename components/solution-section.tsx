import { Shield, CheckCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SolutionSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6 text-balance">
              A Solidy Benefícios é Sua Solução Completa
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enquanto outros te deixam na mão, nós garantimos sua tranquilidade total.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-card-foreground mb-6">Com a Solidy, se acontecer o pior...</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2">Você recebe 100% da Tabela FIPE</h4>
                    <p className="text-muted-foreground">
                      Não importa se seu carro foi roubado, furtado ou teve perda total. Você recebe o valor integral
                      para quitar o financiamento e ainda sobra dinheiro.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2">Veículo reserva na hora</h4>
                    <p className="text-muted-foreground">
                      Não fica sem transporte nem um dia. Enquanto resolve tudo, você tem um veículo para usar
                      normalmente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2">Assistência 24h em todo Brasil</h4>
                    <p className="text-muted-foreground">
                      Pane, pneu furado, bateria descarregada? Não importa onde você esteja, nossa equipe chega até
                      você.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
              <div className="text-center mb-6">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-card-foreground mb-2">Ativação Imediata</h4>
                <p className="text-muted-foreground">
                  Sua proteção começa a valer assim que você contrata. Sem carência, sem burocracia.
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary">R$ 89</div>
                  <div className="text-sm text-muted-foreground">por mês*</div>
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Quero Me Proteger Agora
                </Button>

                <p className="text-xs text-muted-foreground">*Valor pode variar conforme o veículo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
