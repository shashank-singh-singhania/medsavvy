import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Calendar, Check, Clock, Plus } from "lucide-react"

export default function MedicineTracker() {
  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-teal-800 mb-2">Medicine Tracker</h1>
          <p className="text-gray-600">
            Track your medicine schedule with timely reminders and never miss a dose again.
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-teal-600 hover:bg-teal-700">
              <Plus className="h-4 w-4 mr-2" />
              Add New Medicine
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Medicine</DialogTitle>
              <DialogDescription>Enter the details of your medicine and set up reminders.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="medicine-name">Medicine Name</Label>
                <Input id="medicine-name" placeholder="e.g., Paracetamol" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dosage">Dosage</Label>
                <Input id="dosage" placeholder="e.g., 500mg" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select>
                    <SelectTrigger id="frequency">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="once">Once daily</SelectItem>
                      <SelectItem value="twice">Twice daily</SelectItem>
                      <SelectItem value="thrice">Thrice daily</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="duration">Duration</Label>
                <div className="flex gap-2">
                  <Input id="duration" type="number" placeholder="Number of days" />
                  <Select>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Days" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="days">Days</SelectItem>
                      <SelectItem value="weeks">Weeks</SelectItem>
                      <SelectItem value="months">Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Input id="notes" placeholder="e.g., Take after meals" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
                Save Medicine
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="today" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Morning Medicine */}
            <Card>
              <CardHeader className="bg-amber-50 rounded-t-lg">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-amber-800">Morning</CardTitle>
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <CardDescription className="text-amber-700">8:00 AM</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
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
                          className="text-amber-600"
                        >
                          <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                          <circle cx="17" cy="7" r="5"></circle>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Metformin</h3>
                        <p className="text-sm text-gray-600">500mg - 1 tablet</p>
                        <p className="text-xs text-gray-500 mt-1">Take after breakfast</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="h-8 border-green-600 text-green-600">
                      <Check className="h-4 w-4 mr-1" />
                      Taken
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
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
                          className="text-amber-600"
                        >
                          <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                          <circle cx="17" cy="7" r="5"></circle>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Vitamin D3</h3>
                        <p className="text-sm text-gray-600">60,000 IU - 1 tablet</p>
                        <p className="text-xs text-gray-500 mt-1">Take with milk</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="h-8 border-green-600 text-green-600">
                      <Check className="h-4 w-4 mr-1" />
                      Taken
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Afternoon Medicine */}
            <Card>
              <CardHeader className="bg-orange-50 rounded-t-lg">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-orange-800">Afternoon</CardTitle>
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <CardDescription className="text-orange-700">1:00 PM</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
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
                          className="text-orange-600"
                        >
                          <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                          <circle cx="17" cy="7" r="5"></circle>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Metformin</h3>
                        <p className="text-sm text-gray-600">500mg - 1 tablet</p>
                        <p className="text-xs text-gray-500 mt-1">Take after lunch</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="h-8">
                      <Check className="h-4 w-4 mr-1" />
                      Mark as Taken
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Evening Medicine */}
            <Card>
              <CardHeader className="bg-indigo-50 rounded-t-lg">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-indigo-800">Evening</CardTitle>
                  <Clock className="h-5 w-5 text-indigo-600" />
                </div>
                <CardDescription className="text-indigo-700">7:00 PM</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
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
                          className="text-indigo-600"
                        >
                          <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                          <circle cx="17" cy="7" r="5"></circle>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Atorvastatin</h3>
                        <p className="text-sm text-gray-600">10mg - 1 tablet</p>
                        <p className="text-xs text-gray-500 mt-1">Take after dinner</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="h-8">
                      <Check className="h-4 w-4 mr-1" />
                      Mark as Taken
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Night Medicine */}
            <Card>
              <CardHeader className="bg-purple-50 rounded-t-lg">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-purple-800">Night</CardTitle>
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <CardDescription className="text-purple-700">10:00 PM</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
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
                          className="text-purple-600"
                        >
                          <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                          <circle cx="17" cy="7" r="5"></circle>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Metformin</h3>
                        <p className="text-sm text-gray-600">500mg - 1 tablet</p>
                        <p className="text-xs text-gray-500 mt-1">Take after dinner</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="h-8">
                      <Check className="h-4 w-4 mr-1" />
                      Mark as Taken
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
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
                          className="text-purple-600"
                        >
                          <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                          <circle cx="17" cy="7" r="5"></circle>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Calcium + Vitamin D3</h3>
                        <p className="text-sm text-gray-600">500mg - 1 tablet</p>
                        <p className="text-xs text-gray-500 mt-1">Take with water</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="h-8">
                      <Check className="h-4 w-4 mr-1" />
                      Mark as Taken
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Medications</CardTitle>
              <CardDescription>View your medication schedule for the next 7 days.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Tomorrow */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-5 w-5 text-teal-600" />
                    <h3 className="font-medium text-lg">Tomorrow</h3>
                  </div>

                  <div className="space-y-4 pl-7">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-amber-600" />
                      <span className="text-sm font-medium text-amber-700">8:00 AM</span>
                      <span className="text-sm">Metformin (500mg), Vitamin D3 (60,000 IU)</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-700">1:00 PM</span>
                      <span className="text-sm">Metformin (500mg)</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-indigo-600" />
                      <span className="text-sm font-medium text-indigo-700">7:00 PM</span>
                      <span className="text-sm">Atorvastatin (10mg)</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-700">10:00 PM</span>
                      <span className="text-sm">Metformin (500mg), Calcium + Vitamin D3 (500mg)</span>
                    </div>
                  </div>
                </div>

                {/* Day After Tomorrow */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-5 w-5 text-teal-600" />
                    <h3 className="font-medium text-lg">Day After Tomorrow</h3>
                  </div>

                  <div className="space-y-4 pl-7">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-amber-600" />
                      <span className="text-sm font-medium text-amber-700">8:00 AM</span>
                      <span className="text-sm">Metformin (500mg), Vitamin D3 (60,000 IU)</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-700">1:00 PM</span>
                      <span className="text-sm">Metformin (500mg)</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-indigo-600" />
                      <span className="text-sm font-medium text-indigo-700">7:00 PM</span>
                      <span className="text-sm">Atorvastatin (10mg)</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-700">10:00 PM</span>
                      <span className="text-sm">Metformin (500mg), Calcium + Vitamin D3 (500mg)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-teal-600 text-teal-600">
                View Full Schedule
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Medication History</CardTitle>
              <CardDescription>Track your medication adherence over time.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Yesterday */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-5 w-5 text-teal-600" />
                    <h3 className="font-medium text-lg">Yesterday</h3>
                  </div>

                  <div className="space-y-4 pl-7">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-amber-600" />
                      <span className="text-sm font-medium text-amber-700">8:00 AM</span>
                      <span className="text-sm">Metformin (500mg), Vitamin D3 (60,000 IU)</span>
                      <span className="ml-auto text-xs text-green-600 flex items-center">
                        <Check className="h-3 w-3 mr-1" />
                        Taken
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-700">1:00 PM</span>
                      <span className="text-sm">Metformin (500mg)</span>
                      <span className="ml-auto text-xs text-green-600 flex items-center">
                        <Check className="h-3 w-3 mr-1" />
                        Taken
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-indigo-600" />
                      <span className="text-sm font-medium text-indigo-700">7:00 PM</span>
                      <span className="text-sm">Atorvastatin (10mg)</span>
                      <span className="ml-auto text-xs text-green-600 flex items-center">
                        <Check className="h-3 w-3 mr-1" />
                        Taken
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-700">10:00 PM</span>
                      <span className="text-sm">Metformin (500mg), Calcium + Vitamin D3 (500mg)</span>
                      <span className="ml-auto text-xs text-red-600 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                        Missed
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2 Days Ago */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-5 w-5 text-teal-600" />
                    <h3 className="font-medium text-lg">2 Days Ago</h3>
                  </div>

                  <div className="space-y-4 pl-7">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-amber-600" />
                      <span className="text-sm font-medium text-amber-700">8:00 AM</span>
                      <span className="text-sm">Metformin (500mg), Vitamin D3 (60,000 IU)</span>
                      <span className="ml-auto text-xs text-green-600 flex items-center">
                        <Check className="h-3 w-3 mr-1" />
                        Taken
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-700">1:00 PM</span>
                      <span className="text-sm">Metformin (500mg)</span>
                      <span className="ml-auto text-xs text-green-600 flex items-center">
                        <Check className="h-3 w-3 mr-1" />
                        Taken
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-indigo-600" />
                      <span className="text-sm font-medium text-indigo-700">7:00 PM</span>
                      <span className="text-sm">Atorvastatin (10mg)</span>
                      <span className="ml-auto text-xs text-green-600 flex items-center">
                        <Check className="h-3 w-3 mr-1" />
                        Taken
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-700">10:00 PM</span>
                      <span className="text-sm">Metformin (500mg), Calcium + Vitamin D3 (500mg)</span>
                      <span className="ml-auto text-xs text-green-600 flex items-center">
                        <Check className="h-3 w-3 mr-1" />
                        Taken
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-teal-600 text-teal-600">
                View Complete History
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Reminder Settings */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-teal-800 mb-6">Reminder Settings</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-teal-600" />
                      <span>Push Notifications</span>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-teal-600">
                      <span className="absolute h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
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
                        className="text-teal-600"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>SMS Reminders</span>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                      <span className="absolute h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
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
                        className="text-teal-600"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      <span>Email Notifications</span>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                      <span className="absolute h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-medium mb-4">Reminder Timing</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="reminder-time">Reminder Time</Label>
                      <Select defaultValue="15">
                        <SelectTrigger id="reminder-time">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 minutes before</SelectItem>
                          <SelectItem value="10">10 minutes before</SelectItem>
                          <SelectItem value="15">15 minutes before</SelectItem>
                          <SelectItem value="30">30 minutes before</SelectItem>
                          <SelectItem value="60">1 hour before</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="reminder-repeat">Repeat Reminder</Label>
                      <Select defaultValue="5">
                        <SelectTrigger id="reminder-repeat">
                          <SelectValue placeholder="Select interval" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">No repeat</SelectItem>
                          <SelectItem value="5">Every 5 minutes</SelectItem>
                          <SelectItem value="10">Every 10 minutes</SelectItem>
                          <SelectItem value="15">Every 15 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="caregiver-email">Caregiver Email (Optional)</Label>
                    <Input id="caregiver-email" type="email" placeholder="e.g., family@example.com" />
                    <p className="text-xs text-gray-500 mt-1">We'll notify this person if you miss your medication.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 rounded-b-lg">
            <Button className="bg-teal-600 hover:bg-teal-700 w-full">Save Reminder Settings</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
