import { Shield, Phone, Mail, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-primary mr-2" />
                <span className="text-xl font-bold text-card-foreground">SOLIDY</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Proteção completa para seu veículo com a tranquilidade que você merece.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Proteção</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Roubo e Furto</li>
                <li>Colisão</li>
                <li>Incêndio</li>
                <li>Perda Total</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Assistência 24h</li>
                <li>Guincho</li>
                <li>Carro Reserva</li>
                <li>Amigo Médico</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Contato</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>91 98440-9973</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>blendocostagestor@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Belém, PA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  <a
                    href="https://www.instagram.com/blendoconsultor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    @blendoconsultor
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2025 Solidy Benefícios. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
