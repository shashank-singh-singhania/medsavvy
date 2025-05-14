import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, Search, ThumbsUp, Video } from "lucide-react"

export default function HealthKnowledge() {
  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      <h1 className="text-3xl font-bold text-teal-800 mb-2">Health Knowledge</h1>
      <p className="text-gray-600 mb-8">
        Access reliable health information and educational content even when offline.
      </p>

      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input placeholder="Search health topics, diseases, treatments..." className="pl-10 py-6" />
      </div>

      {/* Content Types */}
      <Tabs defaultValue="articles" className="w-full mb-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto">
          <TabsTrigger value="articles" className="py-2">
            <BookOpen className="h-4 w-4 mr-2" />
            Articles
          </TabsTrigger>
          <TabsTrigger value="videos" className="py-2">
            <Video className="h-4 w-4 mr-2" />
            Videos
          </TabsTrigger>
          <TabsTrigger value="infographics" className="py-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
            Infographics
          </TabsTrigger>
          <TabsTrigger value="offline" className="py-2">
            <Download className="h-4 w-4 mr-2" />
            Offline Content
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="articles" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Article 1 */}
            <Card>
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="/placeholder.svg?height=200&width=200" 
                    alt="Diabetes Management" 
                    className="h-full w-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <Badge className="mb-2 bg-teal-600">Diabetes</Badge>
                  <h3 className="text-xl font-semibold mb-2">Understanding Type 2 Diabetes</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Learn about the causes, symptoms, and management strategies for Type 2 Diabetes, including diet, exercise, and medication.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>243 found helpful</span>
                    </div>
                    <Button variant="outline" size="sm" className="border-teal-600 text-teal-600">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Article 2 */}
            <Card>
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="/placeholder.svg?height=200&width=200" 
                    alt="Heart Health" 
                    className="h-full w-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <Badge className="mb-2 bg-red-600">Heart Health</Badge>
                  <h3 className="text-xl font-semibold mb-2">Preventing Heart Disease</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Discover practical steps to maintain heart health, recognize warning signs, and reduce your risk of cardiovascular disease.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>187 found helpful</span>
                    </div>
                    <Button variant="outline" size="sm" className="border-teal-600 text-teal-600">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Article 3 */}
            <Card>
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="/placeholder.svg?height=200&width=200" 
                    alt="Mental Health" 
                    className="h-full w-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <Badge className="mb-2 bg-purple-600">Mental Health</Badge>
                  <h3 className="text-xl font-semibold mb-2">Managing Stress and Anxiety</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Effective techniques for managing stress and anxiety in daily life, including breathing exercises and mindfulness practices.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>312 found helpful</span>
                    </div>
                    <Button variant="outline" size="sm" className="border-teal-600 text-teal-600">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Article 4 */}
            <Card>
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="/placeholder.svg?height=200&width=200" 
                    alt="Nutrition" 
                    className="h-full w-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <Badge className="mb-2 bg-green-600">Nutrition</Badge>
                  <h3 className="text-xl font-semibold mb-2">Balanced Diet for Rural Communities</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    How to maintain a balanced diet using locally available foods, with special focus on nutritional needs for different age groups.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>176 found helpful</span>
                    </div>
                    <Button variant="outline" size="sm" className="border-teal-600 text-teal-600">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="border-teal-600 text-teal-600">
              Load More Articles
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="videos" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video 1 */}
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src="/placeholder.svg?height=200&width=300" 
                  alt="First Aid Basics" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
                <Badge className="absolute bottom-2 right-2 bg-red-600">5:24</Badge>
              </div>
              <CardContent className="p-4">
                <Badge className="mb-2 bg-orange-600">First Aid</Badge>
                <h3 className="font-medium text-lg mb-1">First Aid Basics Everyone Should Know</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  Learn essential first aid techniques for common emergencies in rural settings.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>423 views</span>
                  </div>
                  <Button variant="outline" size="sm" className="h-8 border-teal-600 text-teal-600">
                    <Download className="h-3 w-3 mr-1" />
                    Save Offline
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Video 2 */}
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src="/placeholder.svg?height=200&width=300" 
                  alt="Pregnancy Care" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
                <Badge className="absolute bottom-2 right-2 bg-red-600">8:12</Badge>
              </div>
              <CardContent className="p-4">
                <Badge className="mb-2 bg-pink-600">Maternal Health</Badge>
                <h3 className="font-medium text-lg mb-1">Pregnancy Care: What to Expect</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  Important information about prenatal care, nutrition, and warning signs during pregnancy.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>287 views</span>
                  </div>
                  <Button variant="outline" size="sm" className="h-8 border-teal-600 text-teal-600">
                    <Download className="h-3 w-3 mr-1" />
                    Save Offline
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Video 3 */}
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src="/placeholder.svg?height=200&width=300" 
                  alt="Diabetes Management" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
                <Badge className="absolute bottom-2 right-2 bg-red-600">6:45</Badge>
              </div>
              <CardContent className="p-4">
                <Badge className="mb-2 bg-teal-600">Diabetes</Badge>
                <h3 className="font-medium text-lg mb-1">Living Well with Diabetes</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  Practical tips for managing diabetes in daily life, including diet, exercise, and medication.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>356 views</span>
                  </div>
                  <Button variant="outline" size="sm" className="h-8 border-teal-600 text-teal-600">
                    <Download className="h-3 w-3 mr-1" />
                    Save Offline
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="border-teal-600 text-teal-600">
              Load More Videos
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="infographics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Infographic 1 */}
            <Card className="overflow-hidden">
              <img 
                src="/placeholder.svg?height=400&width=300" 
                alt="COVID-19 Prevention" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <Badge className="mb-2 bg-blue-600">COVID-19</Badge>
                <h3 className="font-medium text-lg mb-1">COVID-19 Prevention Measures</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Visual guide to preventing COVID-19 spread in rural communities.
                </p>
                <div className="flex justify-end">
                  <Button variant="outline" size="sm" className="h-8 border-teal-600 text-teal-600">
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Infographic 2 */}
            <Card className="overflow-hidden">
              <img 
                src="/placeholder.svg?height=400&width=300" 
                alt="Nutrition Guide" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <Badge className="mb-2 bg-green-600">Nutrition</Badge>
                <h3 className="font-medium text-lg mb-1">Balanced Diet Food Plate</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Visual guide to creating balanced meals with locally available foods.
                </p>
                <div className="flex justify-end">
                  <Button variant="outline" size="sm" className="h-8 border-teal-600 text-teal-600">
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Infographic 3 */}
            <Card className="overflow-hidden">
              <img 
                src="/placeholder.svg?height=400&width=300" 
                alt="Hypertension Management" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <Badge className="mb-2 bg-red-600">Hypertension</Badge>
                <h3 className="font-medium text-lg mb-1">Managing High Blood Pressure</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Visual guide to understanding and managing hypertension.
                </p>
                <div className="flex justify-end">
                  <Button variant="outline" size="sm" className="h-8 border-teal-600 text-teal-600">
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="border-teal-600 text-teal-600">
              Load More Infographics
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="offline" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Offline Content Library</CardTitle>
              <CardDescription>
                Download health content to access even without internet connection.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Diabetes Care Package</h4>
                      <p className="text-sm text-gray-600">5 articles, 2 videos, 3 infographics</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-teal-600 text-teal-600">
                    <Download className="h-4 w-4 mr-1" />
                    Download (12MB)
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Heart Health Essentials</h4>
                      <p className="text-sm text-gray-600">4 articles, 3 videos, 2 infographics</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-teal-600 text-teal-600">
                    <Download className="h-4 w-4 mr-1" />
                    Download (15MB)
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Maternal & Child Health</h4>
                      <p className="text-sm text-gray-600">6 articles, 4 videos, 3 infographics</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-teal-600 text-teal-600">
                    <Download className="h-4 w-4 mr-1" />
                    Download (20MB)
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
                        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
                        <circle cx="20" cy="10" r="2"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">First Aid & Emergency Care</h4>
                      <p className="text-sm text-gray-600">3 articles, 5 videos, 4 infographics</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-teal-600 text-teal-600">
                    <Download className="h-4 w-4 mr-1" />
                    Download (18MB)
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-600">
                Downloaded content will be available in the app even when you're offline.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Health Bot */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-teal-800 mb-6">Health Knowledge Bot</h2>
        <Card>
          <CardHeader>
            <CardTitle>Ask Health Questions</CardTitle>
            <CardDescription>
              Our AI-powered health bot can answer your health-related questions even when offline.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-gray-800">What are the symptoms of dehydration?</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"></div>
              </div>
              <div className="flex gap-2 mt-4">
                <Input placeholder="Type your health question..." className="flex-1" />
                <Button variant="default" className="bg-teal-600 text-white">Ask</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
