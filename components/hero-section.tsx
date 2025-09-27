import { Button } from "@/components/ui/button"
import { Shield, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="absolute inset-0 hero-gradient"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-primary mr-3" />
            <h1 className="text-2xl font-bold text-foreground">SOLIDY BENEFÍCIOS</h1>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Seu veículo protegido.
            <br />
            <span className="text-primary">Sua tranquilidade garantida.</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            Proteção completa para seu veículo com cobertura de 100% da tabela FIPE, assistência 24h e muito mais. Não
            deixe um sinistro destruir seus planos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              Quero Minha Proteção Agora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              Assistir Vídeo
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Tabela FIPE</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">Assistência</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">200k</div>
              <div className="text-sm text-muted-foreground">Proteção Terceiros</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Nacional</div>
              <div className="text-sm text-muted-foreground">Cobertura</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
