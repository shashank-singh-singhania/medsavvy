import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

type TestimonialCardProps = {
  name: string
  location: string
  quote: string
  rating: number
}

export default function TestimonialCard({ name, location, quote, rating }: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm card-hover">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-12 w-12 border-2 border-teal-100 dark:border-teal-800">
            <AvatarFallback className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium">{name}</h4>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-muted-foreground italic">"{quote}"</p>
        </div>

        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
