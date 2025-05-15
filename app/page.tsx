import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Calendar,
  Clock,
  MessageSquare,
  Pill,
  ShoppingBag,
  Activity,
  Heart,
  Thermometer,
  Droplets,
  Brain,
  Shield,
  CheckCircle,
  Users,
  Star,
} from "lucide-react"
import LanguageSelector from "@/components/language-selector"
import VoiceSearch from "@/components/voice-search"
import HealthMetricsCard from "@/components/health-metrics-card"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950/30 dark:to-blue-950/30 -z-10" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <LanguageSelector />
                <VoiceSearch />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="gradient-text">MedSavvy AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-teal-700 dark:text-teal-300 font-medium">
                Empowering Rural India with Smart Healthcare Access
              </p>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto md:mx-0">
                AI-powered healthcare solutions designed for rural communities, providing early diagnosis, smart
                triaging, and remote healthcare access in your language.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-md"
                >
                  Check Symptoms Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400"
                >
                  Connect with Doctor
                </Button>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-background bg-teal-100 dark:bg-teal-800"
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">5,000+</span> rural patients helped
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative z-10 animate-float">
                <img
                  src="/doc.webp"
                  alt="Rural healthcare illustration"
                  className="rounded-2xl "
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 md:top-4 md:left-0 animate-float-reverse">
                <Badge className="bg-green-500 text-white px-3 py-1.5 text-sm rounded-full shadow-lg">
                  <CheckCircle className="h-4 w-4 mr-1" /> AI Powered
                </Badge>
              </div>

              <div className="absolute top-1/2 -right-4 md:right-0 animate-float-slow">
                <Badge className="bg-blue-500 text-white px-3 py-1.5 text-sm rounded-full shadow-lg">
                  <Shield className="h-4 w-4 mr-1" /> Secure Records
                </Badge>
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 animate-float">
                <Badge className="bg-purple-500 text-white px-3 py-1.5 text-sm rounded-full shadow-lg">
                  <Users className="h-4 w-4 mr-1" /> 6 Languages
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Metrics Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 px-3 py-1 text-sm">
              Health Dashboard
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Health at a Glance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Track your vital health metrics and get personalized insights to improve your wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HealthMetricsCard
              title="Heart Rate"
              value="72"
              unit="bpm"
              status="normal"
              icon={<Heart className="h-5 w-5" />}
              color="rose"
            />

            <HealthMetricsCard
              title="Blood Pressure"
              value="120/80"
              unit="mmHg"
              status="normal"
              icon={<Activity className="h-5 w-5" />}
              color="blue"
            />

            <HealthMetricsCard
              title="Blood Glucose"
              value="98"
              unit="mg/dL"
              status="normal"
              icon={<Droplets className="h-5 w-5" />}
              color="amber"
            />

            <HealthMetricsCard
              title="Body Temperature"
              value="98.6"
              unit="°F"
              status="normal"
              icon={<Thermometer className="h-5 w-5" />}
              color="red"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-teal-50/50 dark:to-teal-950/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 px-3 py-1 text-sm">
              AI-Enhanced Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Healthcare Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered features are designed to make healthcare accessible, affordable, and effective for rural
              communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-none shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm card-hover">
              <CardContent className="p-6">
                <div className="h-14 w-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <MessageSquare className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300 mb-3">AI Symptom Checker</h3>
                <p className="text-muted-foreground mb-4">
                  Describe your symptoms in your local language and get possible conditions with urgency level
                  recommendations.
                </p>
                <Link
                  href="/symptom-checker"
                  className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                >
                  Check Symptoms
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-none shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm card-hover">
              <CardContent className="p-6">
                <div className="h-14 w-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Calendar className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Doctor Connect</h3>
                <p className="text-muted-foreground mb-4">
                  Book video consultations with qualified doctors based on your symptoms and location.
                </p>
                <Link
                  href="/doctor-connect"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Find Doctors
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-none shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm card-hover">
              <CardContent className="p-6">
                <div className="h-14 w-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-3">Medicine Tracker</h3>
                <p className="text-muted-foreground mb-4">
                  Track your medicine schedule with timely reminders and never miss a dose again.
                </p>
                <Link
                  href="/medicine-tracker"
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  Track Medicines
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-none shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm card-hover">
              <CardContent className="p-6">
                <div className="h-14 w-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <ShoppingBag className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-3">Medicine Shop</h3>
                <p className="text-muted-foreground mb-4">
                  Order prescribed medicines online and get them delivered to your doorstep.
                </p>
                <Link
                  href="/medicine-shop"
                  className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                >
                  Shop Medicines
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="border-none shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm card-hover">
              <CardContent className="p-6">
                <div className="h-14 w-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Brain className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3">Health Knowledge</h3>
                <p className="text-muted-foreground mb-4">
                  Access reliable health information and educational content even when offline.
                </p>
                <Link
                  href="/health-knowledge"
                  className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="border-none shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm card-hover">
              <CardContent className="p-6">
                <div className="h-14 w-14 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Pill className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-rose-800 dark:text-rose-300 mb-3">Secure Records</h3>
                <p className="text-muted-foreground mb-4">
                  Your medical records are securely stored using blockchain technology for privacy and accessibility.
                </p>
                <Link
                  href="/medical-records"
                  className="inline-flex items-center text-rose-600 dark:text-rose-400 font-medium hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
                >
                  View Records
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-teal-50/50 to-background dark:from-teal-950/20 dark:to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 px-3 py-1 text-sm">
              Simple Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How MedSavvy AI Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform is designed to be simple and intuitive, even for users with limited tech experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center relative">
              <div className="h-20 w-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                1
              </div>
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-teal-200 dark:border-teal-800"></div>
              <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300 mb-3">Describe Your Symptoms</h3>
              <p className="text-muted-foreground">
                Use voice or text in your local language to tell us how you're feeling.
              </p>
            </div>

            <div className="text-center relative">
              <div className="h-20 w-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                2
              </div>
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-teal-200 dark:border-teal-800"></div>
              <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300 mb-3">Get AI Assessment</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your symptoms and provides possible conditions with urgency level.
              </p>
            </div>

            <div className="text-center">
              <div className="h-20 w-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300 mb-3">Connect or Self-Care</h3>
              <p className="text-muted-foreground">
                Book a doctor consultation or follow self-care recommendations based on urgency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 px-3 py-1 text-sm">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from people across rural India who have benefited from MedSavvy AI's healthcare solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Rajesh Kumar"
              location="Bihar"
              quote="MedSavvy AI helped me identify my symptoms and connect with a doctor when I couldn't travel to the city. It saved me time and money."
              rating={5}
            />

            <TestimonialCard
              name="Lakshmi Devi"
              location="Andhra Pradesh"
              quote="The medicine tracker reminds me to take my diabetes medication on time. My health has improved significantly since I started using this app."
              rating={5}
            />

            <TestimonialCard
              name="Amit Sharma"
              location="Uttar Pradesh"
              quote="I was able to consult with a specialist doctor through video call. The doctor prescribed medicines which I ordered through the app."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-teal-700 dark:from-teal-800 dark:to-teal-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Health Journey Today</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Join thousands of rural communities already benefiting from MedSavvy AI's healthcare solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-100 shadow-lg">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-teal-700">
              Learn More
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-teal-600 bg-teal-100" />
                ))}
              </div>
              <div className="ml-2 text-sm">
                <span className="font-medium">5,000+</span> users
              </div>
            </div>

            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <div className="ml-2 text-sm">
                <span className="font-medium">4.9/5</span> rating
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
