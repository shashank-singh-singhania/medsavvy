import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Filter, Heart, Search, ShoppingCart, Star } from "lucide-react"

export default function MedicineShop() {
  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      <h1 className="text-3xl font-bold text-teal-800 mb-2">Medicine Shop</h1>
      <p className="text-gray-600 mb-8">Order prescribed medicines online and get them delivered to your doorstep.</p>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input placeholder="Search medicines, healthcare products..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        <Button className="bg-teal-600 hover:bg-teal-700">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Cart (3)
        </Button>
      </div>

      {/* Categories */}
      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-6 h-auto">
          <TabsTrigger value="all" className="py-2">
            All
          </TabsTrigger>
          <TabsTrigger value="prescription" className="py-2">
            Prescription
          </TabsTrigger>
          <TabsTrigger value="otc" className="py-2">
            OTC
          </TabsTrigger>
          <TabsTrigger value="ayurvedic" className="py-2">
            Ayurvedic
          </TabsTrigger>
          <TabsTrigger value="healthcare" className="py-2">
            Healthcare
          </TabsTrigger>
          <TabsTrigger value="devices" className="py-2">
            Devices
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Featured Products */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-teal-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <Card className="overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1624362772755-4d5843e67047?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=200&width=300"
                alt="Multivitamin Tablets"
                className="w-full h-48 object-cover"
              />
              <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80">
                <Heart className="h-4 w-4" />
              </Button>
              <Badge className="absolute top-2 left-2 bg-teal-600">20% OFF</Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-lg mb-1 line-clamp-1">Multivitamin Tablets</h3>
              <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                Complete daily nutrition with essential vitamins and minerals.
              </p>
              <div className="flex items-center mb-2">
                <div className="flex">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-gray-300" />
                </div>
                <span className="text-xs text-gray-500 ml-1">(42)</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-teal-700">₹399</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₹499</span>
                </div>
                <Badge variant="outline" className="border-amber-500 text-amber-600">
                  OTC
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full bg-teal-600 hover:bg-teal-700">Add to Cart</Button>
            </CardFooter>
          </Card>

          {/* Product 2 */}
          <Card className="overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1684157127180-f7ffd7b67db9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=200&width=300"
                alt="Blood Glucose Monitor"
                className="w-full h-48 object-cover"
              />
              <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-lg mb-1 line-clamp-1">Blood Glucose Monitor</h3>
              <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                Easy to use digital blood glucose monitoring system with test strips.
              </p>
              <div className="flex items-center mb-2">
                <div className="flex">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                </div>
                <span className="text-xs text-gray-500 ml-1">(87)</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-teal-700">₹1,299</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₹1,599</span>
                </div>
                <Badge variant="outline" className="border-purple-500 text-purple-600">
                  Device
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full bg-teal-600 hover:bg-teal-700">Add to Cart</Button>
            </CardFooter>
          </Card>

          {/* Product 3 */}
          <Card className="overflow-hidden">
            <div className="relative">
              <img
                src="https://www.assetpharmacy.com/wp-content/uploads/2017/09/Metformin-500mg-Tablets-100-Tablets.jpg?height=200&width=300"
                alt="Metformin 500mg"
                className="w-full h-48 object-cover"
              />
              <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-lg mb-1 line-clamp-1">Metformin 500mg</h3>
              <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                Oral medication to control blood sugar levels for type 2 diabetes.
              </p>
              <div className="flex items-center mb-2">
                <div className="flex">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-gray-300" />
                </div>
                <span className="text-xs text-gray-500 ml-1">(124)</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-teal-700">₹99</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₹120</span>
                </div>
                <Badge variant="outline" className="border-red-500 text-red-600">
                  Rx
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full bg-teal-600 hover:bg-teal-700">Add to Cart</Button>
            </CardFooter>
          </Card>

          {/* Product 4 */}
          <Card className="overflow-hidden">
            <div className="relative">
              <img
                src="https://images.inventorysource.com/images/hg/HG1909134.jpg?height=200&width=300"
                alt="Ashwagandha Capsules"
                className="w-full h-48 object-cover"
              />
              <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80">
                <Heart className="h-4 w-4" />
              </Button>
              <Badge className="absolute top-2 left-2 bg-teal-600">Best Seller</Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-lg mb-1 line-clamp-1">Ashwagandha Capsules</h3>
              <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                Ayurvedic herb to reduce stress and anxiety, improve concentration.
              </p>
              <div className="flex items-center mb-2">
                <div className="flex">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                </div>
                <span className="text-xs text-gray-500 ml-1">(236)</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-teal-700">₹349</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₹499</span>
                </div>
                <Badge variant="outline" className="border-green-500 text-green-600">
                  Ayurvedic
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full bg-teal-600 hover:bg-teal-700">Add to Cart</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Prescription Medicines */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-teal-800 mb-6">Prescription Medicines</h2>
        <Card>
          <CardHeader>
            <CardTitle>Upload Your Prescription</CardTitle>
            <CardDescription>Upload a valid prescription to order prescription medicines.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
              </div>
              <p className="text-gray-600 mb-2">Drag and drop your prescription here</p>
              <p className="text-sm text-gray-500 mb-4">or</p>
              <Button variant="outline" className="border-teal-600 text-teal-600">
                Browse Files
              </Button>
              <p className="text-xs text-gray-500 mt-4">Supported formats: JPG, PNG, PDF (Max size: 5MB)</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-gray-600">Your prescription will be verified by our pharmacists.</p>
            <Button className="bg-teal-600 hover:bg-teal-700">Upload & Order</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Health Categories */}
      <div>
        <h2 className="text-2xl font-semibold text-teal-800 mb-6">Health Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <h3 className="font-medium">Cardiac Care</h3>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M8.56 2.9A7 7 0 0 1 19 9v4a1 1 0 0 0 1 1h1"></path>
                  <path d="M15 22v-4a7 7 0 0 0-7-7H4"></path>
                  <path d="M9 10V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Z"></path>
                  <path d="M22 22v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Z"></path>
                </svg>
              </div>
              <h3 className="font-medium">Diabetes Care</h3>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-600"
                >
                  <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path>
                  <path d="m6 13 2.5-2.5a2.121 2.121 0 0 1 3 0L14 13"></path>
                  <path d="m18 13-2.5-2.5a2.121 2.121 0 0 0-3 0L9 14"></path>
                </svg>
              </div>
              <h3 className="font-medium">Vitamins & Supplements</h3>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path>
                  <path d="m12 12 4 10 1.7-4.3L22 16Z"></path>
                </svg>
              </div>
              <h3 className="font-medium">Ayurvedic</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
