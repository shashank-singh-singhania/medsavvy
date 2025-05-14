import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { AlertTriangle, CheckCircle, Mic, Send } from "lucide-react"
import LanguageSelector from "@/components/language-selector"
import { Badge } from "@/components/ui/badge"

export default function SymptomChecker() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="mb-8 text-center">
        <Badge className="mb-4 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 px-3 py-1 text-sm">
          AI Powered
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-teal-800 dark:text-teal-300 mb-4">AI Symptom Checker</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Describe your symptoms in your preferred language and our AI will analyze them to provide possible conditions
          and recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/40 dark:to-green-900/20 border-green-200 dark:border-green-800 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-green-700 dark:text-green-300 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Self-Care
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-700 dark:text-green-300">
              Minor conditions that can be managed at home with rest and over-the-counter medications.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/40 dark:to-amber-900/20 border-amber-200 dark:border-amber-800 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-amber-700 dark:text-amber-300 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              OPD Visit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-amber-700 dark:text-amber-300">
              Conditions that require a doctor's consultation but are not immediately life-threatening.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/40 dark:to-red-900/20 border-red-200 dark:border-red-800 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-red-700 dark:text-red-300 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Emergency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-red-700 dark:text-red-300">
              Serious conditions that require immediate medical attention. Seek emergency care right away.
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="text" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="text">Text Input</TabsTrigger>
          <TabsTrigger value="voice">Voice Input</TabsTrigger>
        </TabsList>

        <TabsContent value="text" className="space-y-6">
          <Card className="border shadow-md">
            <CardHeader>
              <CardTitle>Describe Your Symptoms</CardTitle>
              <CardDescription>Please provide details about what you're experiencing.</CardDescription>
              <div className="flex items-center gap-2 mt-2">
                <LanguageSelector />
              </div>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Example: I've had a headache for 3 days, along with fever and body aches. The pain is mostly on the right side of my head."
                className="min-h-[150px]"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Clear</Button>
              <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700">
                Analyze Symptoms
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-dashed border-2 border-muted bg-muted/20">
            <CardHeader>
              <CardTitle>AI Analysis Results</CardTitle>
              <CardDescription>Your symptom analysis will appear here.</CardDescription>
            </CardHeader>
            <CardContent className="text-center py-12">
              <p className="text-muted-foreground">
                Describe your symptoms above and click "Analyze Symptoms" to get AI-powered health insights.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="voice" className="space-y-6">
          <Card className="border shadow-md">
            <CardHeader>
              <CardTitle>Speak Your Symptoms</CardTitle>
              <CardDescription>Press the microphone button and describe your symptoms clearly.</CardDescription>
              <div className="flex items-center gap-2 mt-2">
                <LanguageSelector />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Button
                size="lg"
                className="rounded-full h-24 w-24 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-lg"
              >
                <Mic className="h-10 w-10" />
              </Button>
              <p className="mt-4 text-foreground">Tap to start speaking</p>
              <p className="text-sm text-muted-foreground mt-2">Your speech will be converted to text for analysis</p>
            </CardContent>
          </Card>

          <Card className="border-dashed border-2 border-muted bg-muted/20">
            <CardHeader>
              <CardTitle>AI Analysis Results</CardTitle>
              <CardDescription>Your symptom analysis will appear here.</CardDescription>
            </CardHeader>
            <CardContent className="text-center py-12">
              <p className="text-muted-foreground">
                Speak your symptoms and our AI will analyze them to provide health insights.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
