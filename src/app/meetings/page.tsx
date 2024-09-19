'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts'
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Video,
  Calendar as CalendarIcon,
  UserCircle,
  FileText,
  Shirt,
  TrendingUp,
  Truck,
  Users,
  Share2,
  Link
} from "lucide-react"

export default function MeetingScheduler() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [activeTab, setActiveTab] = useState("schedule")
  const [aiSchedulingEnabled, setAiSchedulingEnabled] = useState(false)
  const [publicSchedulingEnabled, setPublicSchedulingEnabled] = useState(false)

  const suggestedTimes = [
    { time: "10:00 AM", aiRecommended: true, reason: "Optimal for both parties" },
    { time: "2:00 PM", aiRecommended: false, reason: "Buyer preferred afternoon slot" },
    { time: "4:30 PM", aiRecommended: true, reason: "High engagement time slot" },
  ]

  const scheduledMeetings = [
    {
      id: 1,
      title: "Product Line Review",
      time: "9:00 AM",
      status: "upcoming",
      insights: [
        "Buyer interested in sustainable fabrics",
        "Previous order volume: 10,000 units",
        "Potential for 20% increase in order size"
      ],
      preparationTips: [
        "Prepare sustainable fabric samples",
        "Review buyer's previous feedback",
        "Prepare production capacity presentation"
      ]
    },
    {
      id: 2,
      title: "Quality Assurance Discussion",
      time: "11:30 AM",
      status: "ongoing",
      insights: [
        "Buyer's main concern: consistency in sizing",
        "Recent improvements reduced defect rate by 3%",
        "Opportunity to showcase new QC technologies"
      ],
      preparationTips: [
        "Prepare size consistency reports",
        "Bring samples showcasing improved quality",
        "Demo of new QC process if possible"
      ]
    },
    {
      id: 3,
      title: "Delivery Timeline Negotiation",
      time: "2:00 PM",
      status: "upcoming",
      insights: [
        "Buyer's peak season starts in 3 months",
        "Current lead time: 45 days",
        "Potential for rush orders discussion"
      ],
      preparationTips: [
        "Prepare optimized production schedule",
        "List potential expedited shipping options",
        "Review inventory of key materials"
      ]
    },
  ]

  const lineChartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 550 },
    { name: 'Apr', value: 450 },
    { name: 'May', value: 600 },
  ]

  const pieChartData = [
    { name: 'Production', value: 400 },
    { name: 'Quality', value: 300 },
    { name: 'Supply Chain', value: 200 },
    { name: 'Design', value: 100 },
  ]

  const COLORS = ['#FFD700', '#B8860B', '#DAA520', '#F0E68C']

  const renderMeetingCard = (meeting) => (
    <Card key={meeting.id} className="mb-6 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl text-white">{meeting.title}</CardTitle>
            <CardDescription className="text-gray-300">
              <CalendarIcon className="inline mr-2 h-4 w-4 text-gray-300" />
              {meeting.time} - {meeting.status}
            </CardDescription>
          </div>
          <div>
            {meeting.status === "upcoming" && (
              <Button variant="outline" size="sm" className="border-gray-600 text-yellow-500 hover:bg-gray-700">Start</Button>
            )}
            {meeting.status === "ongoing" && (
              <Button variant="destructive" size="sm">End</Button>
            )}
            {meeting.status === "completed" && (
              <Button variant="secondary" size="sm" className="bg-gray-700 text-yellow-500 hover:bg-gray-600">Update Notes</Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="insights">
            <AccordionTrigger className="text-gray-300 hover:text-yellow-500">AI Insights</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              <ul className="list-disc pl-5 space-y-2">
                {meeting.insights.map((insight, index) => (
                  <li key={index}>{insight}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="preparation">
            <AccordionTrigger className="text-gray-300 hover:text-yellow-500">Preparation Tips</AccordionTrigger>
            <AccordionContent className="text-gray-400">
              <ul className="list-disc pl-5 space-y-2">
                {meeting.preparationTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )

  return (
    <div className="container mx-auto p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">AI-Enhanced Meeting Scheduler for RMG Sellers</h1>
        <p className="text-gray-300">Optimize your buyer meetings with AI-driven insights and scheduling</p>
      </header>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-gray-800">
          <TabsTrigger value="schedule" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white text-gray-300">Schedule</TabsTrigger>
          <TabsTrigger value="upcoming" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white text-gray-300">Upcoming & Ongoing</TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white text-gray-300">Analytics</TabsTrigger>
          <TabsTrigger value="ai-scheduling" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white text-gray-300">AI Scheduling</TabsTrigger>
        </TabsList>
        <TabsContent value="schedule">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Select Date and Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border-gray-700"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-white">AI Suggested Times</h3>
                    <div className="space-y-2">
                      {suggestedTimes.map((slot, index) => (
                        <TooltipProvider key={index}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant={slot.aiRecommended ? "default" : "outline"}
                                className={`w-full justify-start ${
                                  slot.aiRecommended ? 'bg-yellow-600 text-white' : 'border-gray-600 text-yellow-500'
                                } hover:bg-gray-700`}
                              >
                                <Clock className="mr-2 h-4 w-4" />
                                {slot.time}
                                {slot.aiRecommended && (
                                  <span className="ml-auto text-xs bg-yellow-700 text-white px-2 py-1 rounded-full">
                                    AI Pick
                                  </span>
                                )}
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-800 border-gray-700 text-gray-300">
                              <p>{slot.reason}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Meeting Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-gray-300">Meeting Title</Label>
                    <Input id="title" placeholder="Enter meeting title" className="bg-gray-800 text-gray-300 border-gray-700 focus:border-yellow-500" />
                  </div>
                  <div>
                    <Label htmlFor="participants" className="text-gray-300">Participants</Label>
                    <Input id="participants" placeholder="Enter email addresses" className="bg-gray-800 text-gray-300 border-gray-700 focus:border-yellow-500" />
                  </div>
                  <div>
                    <Label htmlFor="duration" className="text-gray-300">Duration</Label>
                    <select
                      id="duration"
                      className="w-full p-2 bg-gray-800 text-gray-300 border-gray-700 rounded-md focus:border-yellow-500"
                      defaultValue="60"
                    >
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="90">1.5 hours</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="meetingType" className="text-gray-300">Meeting Type</Label>
                    <select
                      id="meetingType"
                      className="w-full p-2 bg-gray-800 text-gray-300 border-gray-700 rounded-md focus:border-yellow-500"
                      defaultValue="production"
                    >
                      <option value="production">Production Review</option>
                      <option value="quality">Quality Control</option>
                      <option value="supply">Supply Chain</option>
                      <option value="design">Design & Planning</option>
                    </select>
                  </div>
                  <Button className="w-full bg-yellow-600 text-white hover:bg-yellow-700">Schedule Meeting</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="upcoming">
          <div className="space-y-4">
            {scheduledMeetings.map(renderMeetingCard)}
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Meeting Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={lineChartData}>
                    <Line type="monotone" dataKey="value" stroke="#FFD700" />
                    <RechartsTooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid #4B5563',
                        borderRadius: '4px',
                      }}
                      labelStyle={{ color: '#E5E7EB' }}
                      itemStyle={{ color: '#FFD700' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Meeting Types Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <RechartsTooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid #4B5563',
                        borderRadius: '4px',
                      }}
                      labelStyle={{ color: '#E5E7EB' }}
                      itemStyle={{ color: '#FFD700' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="ai-scheduling">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">AI-Driven Meeting Scheduling</CardTitle>
              <CardDescription className="text-gray-300">Optimize your meeting schedule with AI assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Switch
                  id="ai-scheduling"
                  checked={aiSchedulingEnabled}
                  onCheckedChange={setAiSchedulingEnabled}
                />
                <Label htmlFor="ai-scheduling" className="text-gray-300">Enable AI Scheduling</Label>
              </div>
              {aiSchedulingEnabled && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="productionCycle" className="text-gray-300">Production Cycle</Label>
                    <select
                      id="productionCycle"
                      className="w-full p-2 bg-gray-800 text-gray-300 border-gray-700 rounded-md focus:border-yellow-500"
                      defaultValue="weekly"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Bi-weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="teamAvailability" className="text-gray-300">Team Availability Constraints</Label>
                    <textarea
                      id="teamAvailability"
                      className="w-full p-2 bg-gray-800 text-gray-300 border-gray-700 rounded-md focus:border-yellow-500"
                      rows={3}
                      placeholder="E.g., Production team unavailable 2-4 PM daily, QC team prefers morning meetings"
                    ></textarea>
                  </div>
                  <div>
                    <Label className="text-gray-300">Prioritize Meeting Types</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="justify-start border-gray-600 text-yellow-500 hover:bg-gray-700">
                        <Shirt className="mr-2 h-4 w-4" />
                        Production
                      </Button>
                      <Button variant="outline" className="justify-start border-gray-600 text-yellow-500 hover:bg-gray-700">
                        <TrendingUp className="mr-2 h-4 w-4" />
                        Quality Control
                      </Button>
                      <Button variant="outline" className="justify-start border-gray-600 text-yellow-500 hover:bg-gray-700">
                        <Truck className="mr-2 h-4 w-4" />
                        Supply Chain
                      </Button>
                      <Button variant="outline" className="justify-start border-gray-600 text-yellow-500 hover:bg-gray-700">
                        <Users className="mr-2 h-4 w-4" />
                        Team Sync
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full bg-yellow-600 text-white hover:bg-yellow-700">Generate AI-Optimized Schedule</Button>
                </div>
              )}
            </CardContent>
          </Card>
          <Card className="mt-6 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Public Scheduling Link</CardTitle>
              <CardDescription className="text-gray-300">Allow buyers to schedule meetings directly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Switch
                  id="public-scheduling"
                  checked={publicSchedulingEnabled}
                  onCheckedChange={setPublicSchedulingEnabled}
                />
                <Label htmlFor="public-scheduling" className="text-gray-300">Enable Public Scheduling</Label>
              </div>
              {publicSchedulingEnabled && (
                <div className="space-y-4">
                  <Input
                    value="https://scheduler.example.com/your-public-link"
                    readOnly
                    className="bg-gray-800 text-gray-300 border-gray-700"
                  />
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-yellow-600 text-white hover:bg-yellow-700">
                      <Link className="mr-2 h-4 w-4" />
                      Copy Link
                    </Button>
                    <Button className="flex-1 bg-yellow-600 text-white hover:bg-yellow-700">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Card className="mt-6 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button variant="outline" className="flex items-center border-gray-600 text-yellow-500 hover:bg-gray-700">
            <UserCircle className="mr-2 h-4 w-4" />
            Add Participant
          </Button>
          <Button variant="outline" className="flex items-center border-gray-600 text-yellow-500 hover:bg-gray-700">
            <Video className="mr-2 h-4 w-4" />
            Generate Meeting Link
          </Button>
          <Button variant="outline" className="flex items-center border-gray-600 text-yellow-500 hover:bg-gray-700">
            <FileText className="mr-2 h-4 w-4" />
            Create Agenda
          </Button>
          <Button variant="outline" className="flex items-center border-gray-600 text-yellow-500 hover:bg-gray-700">
            <Shirt className="mr-2 h-4 w-4" />
            Production Report
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}