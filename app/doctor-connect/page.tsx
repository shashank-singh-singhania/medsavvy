import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, MapPin, Search, Star, Video } from "lucide-react"

export default function DoctorConnect() {
  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      <h1 className="text-3xl font-bold text-teal-800 mb-6">Doctor Connect</h1>
      <p className="text-gray-600 mb-8">
        Find and connect with qualified healthcare professionals for video consultations based on your symptoms and
        location.
      </p>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="Search doctors or specialties" className="pl-10" />
          </div>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Physician</SelectItem>
              <SelectItem value="pediatrics">Pediatrics</SelectItem>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="dermatology">Dermatology</SelectItem>
              <SelectItem value="gynecology">Gynecology</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="bengali">Bengali</SelectItem>
              <SelectItem value="telugu">Telugu</SelectItem>
              <SelectItem value="tamil">Tamil</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-teal-600 hover:bg-teal-700">Find Doctors</Button>
        </div>
      </div>

      {/* Available Doctors */}
      <h2 className="text-2xl font-semibold text-teal-800 mb-4">Available Doctors</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Doctor 1 */}
        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="h-20 w-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Dr. Sharma"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-teal-800">Dr. Priya Sharma</h3>
                <p className="text-gray-600">General Physician</p>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-gray-300" />
                  <span className="ml-1 text-sm text-gray-600">(126 reviews)</span>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Delhi</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>Hindi, English</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Next Available</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4 text-teal-600" />
                    <span className="font-medium">Today</span>
                    <Clock className="h-4 w-4 text-teal-600 ml-2" />
                    <span className="font-medium">4:30 PM</span>
                  </div>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <Video className="h-4 w-4 mr-2" />
                  Book Consult
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Doctor 2 */}
        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="h-20 w-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                <img src="/placeholder.svg?height=80&width=80" alt="Dr. Patel" className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-teal-800">Dr. Rajesh Patel</h3>
                <p className="text-gray-600">Pediatrician</p>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 text-sm text-gray-600">(98 reviews)</span>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Mumbai</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>Hindi, English, Gujarati</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Next Available</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4 text-teal-600" />
                    <span className="font-medium">Tomorrow</span>
                    <Clock className="h-4 w-4 text-teal-600 ml-2" />
                    <span className="font-medium">10:00 AM</span>
                  </div>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <Video className="h-4 w-4 mr-2" />
                  Book Consult
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Doctor 3 */}
        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="h-20 w-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                <img src="/placeholder.svg?height=80&width=80" alt="Dr. Reddy" className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-teal-800">Dr. Lakshmi Reddy</h3>
                <p className="text-gray-600">Gynecologist</p>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-gray-300" />
                  <span className="ml-1 text-sm text-gray-600">(74 reviews)</span>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Hyderabad</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>Telugu, English</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Next Available</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4 text-teal-600" />
                    <span className="font-medium">Today</span>
                    <Clock className="h-4 w-4 text-teal-600 ml-2" />
                    <span className="font-medium">6:15 PM</span>
                  </div>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <Video className="h-4 w-4 mr-2" />
                  Book Consult
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Doctor 4 */}
        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="h-20 w-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                <img src="/placeholder.svg?height=80&width=80" alt="Dr. Kumar" className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-teal-800">Dr. Anil Kumar</h3>
                <p className="text-gray-600">Dermatologist</p>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-gray-300" />
                  <Star className="h-4 w-4 text-gray-300" />
                  <span className="ml-1 text-sm text-gray-600">(52 reviews)</span>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Bangalore</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>Kannada, English</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Next Available</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4 text-teal-600" />
                    <span className="font-medium">Tomorrow</span>
                    <Clock className="h-4 w-4 text-teal-600 ml-2" />
                    <span className="font-medium">2:30 PM</span>
                  </div>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <Video className="h-4 w-4 mr-2" />
                  Book Consult
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button variant="outline" className="border-teal-600 text-teal-600">
          Load More Doctors
        </Button>
      </div>
    </div>
  )
}
