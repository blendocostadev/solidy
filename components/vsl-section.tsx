"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

export function VSLSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
            Descubra Como Proteger Seu Veículo em Apenas 3 Minutos
          </h2>

          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-8">
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <Button
                size="lg"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 rounded-full bg-primary hover:bg-primary/90"
              >
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
              </Button>
            </div>

            {/* Placeholder para VSL */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm opacity-75">Clique para assistir o vídeo</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            Neste vídeo você vai descobrir por que milhares de brasileiros já escolheram a Solidy para proteger seus
            veículos e como você pode ter a mesma tranquilidade.
          </p>

          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Quero Minha Cotação Gratuita
          </Button>
        </div>
      </div>
    </section>
  )
}
