'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Search, Play, Pause, FastForward, Rewind, PlusCircle, Send, Upload, ChevronDown, Globe, Clock, AlertCircle, CheckCircle, XCircle } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

export default function ConversationAnalysisPage() {
  const sentimentData = [
    { name: 'Positive', value: 60 },
    { name: 'Neutral', value: 25 },
    { name: 'Negative', value: 15 },
  ]

  const COLORS = ['#10B981', '#F59E0B', '#EF4444']

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-blue-100 p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Conversation Analysis</h1>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => document.getElementById('file-upload').click()} className="border-gray-600 text-yellow-500 hover:bg-gray-800">
            <PlusCircle className="mr-2 h-4 w-4" /> New Conversation
          </Button>
          <input
            id="file-upload"
            type="file"
            accept="audio/*"
            className="hidden"
            onChange={(e) => {
              // Handle file upload logic here
              console.log('File uploaded:', e.target.files[0])
            }}
          />
          <Select>
            <SelectTrigger className="w-[200px] bg-gray-800 border-gray-700 text-blue-100">
              <SelectValue placeholder="Select conversation" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="john-doe">John Doe - Product Inquiry</SelectItem>
              <SelectItem value="jane-smith">Jane Smith - Pricing Discussion</SelectItem>
              <SelectItem value="bob-johnson">Bob Johnson - Feature Request</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-6">
        <Card className="col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Clock className="mr-2 h-5 w-5 text-yellow-500" />
              Conversation Summary
            </CardTitle>
            <CardDescription className="text-blue-200">Key insights and overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">Product Pricing Inquiry</h3>
                  <p className="text-sm text-blue-200">Duration: 15 minutes</p>
                </div>
                <Badge className="bg-yellow-600 text-white">In Progress</Badge>
              </div>
              <p className="text-blue-100">
                The customer expressed interest in our software but showed concerns about pricing. 
                They represent a small team of 10 people, primarily interested in project management 
                and collaboration features. A tailored solution was offered, including a special package 
                that might better fit their budget.
              </p>
              <div>
                <h4 className="text-md font-semibold text-white mb-2">Key Points:</h4>
                <ul className="list-disc list-inside space-y-1 text-blue-100">
                  <li>Customer's main concern: Pricing</li>
                  <li>Team size: 10 people</li>
                  <li>Interest in project management and collaboration features</li>
                  <li>Offered a special package tailored to their needs</li>
                  <li>Discussed quick setup time (24-48 hours)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-yellow-500" />
              Sentiment Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #4B5563',
                      borderRadius: '4px',
                    }}
                    itemStyle={{ color: '#E5E7EB' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              {sentimentData.map((entry, index) => (
                <div key={entry.name} className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                  <span className="text-sm text-blue-100">{entry.name}: {entry.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Globe className="mr-2 h-5 w-5 text-yellow-500" />
              Transcript Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full rounded-md border border-gray-700 p-4">
              {transcriptData.map((entry, index) => (
                <div key={index} className="mb-4 pb-4 border-b border-gray-700 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src={entry.avatar} alt={entry.speaker} />
                        <AvatarFallback>{entry.speaker[0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-semibold text-white">{entry.speaker}</span>
                    </div>
                    <span className="text-sm text-blue-200">{entry.timestamp}</span>
                  </div>
                  <p className="text-blue-100 mb-2">{entry.text}</p>
                  {entry.translation && (
                    <div className="text-sm text-blue-200 italic">
                      <Globe className="inline-block mr-1 h-3 w-3" />
                      Translation: {entry.translation}
                    </div>
                  )}
                  {entry.annotation && (
                    <Badge variant="secondary" className="mt-1 bg-gray-700 text-yellow-400">{entry.annotation}</Badge>
                  )}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-yellow-500" />
              Action Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span className="text-blue-100">Send follow-up email with pricing details</span>
                <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700 text-white">Assign</Button>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-blue-100">Schedule product demo</span>
                <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700 text-white">Assign</Button>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-blue-100">Prepare custom quote</span>
                <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700 text-white">Assign</Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8 bg-gray-700" />

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Communication Status</h2>
        <div className="grid grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-white">Engagement Level</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-100">High</span>
                <span className="text-yellow-500">85%</span>
              </div>
              <Progress value={85} className="h-2 bg-gray-700" indicatorClassName="bg-yellow-500" />
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-white">Clarity of Communication</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-100">Medium</span>
                <span className="text-yellow-500">70%</span>
              </div>
              <Progress value={70} className="h-2 bg-gray-700" indicatorClassName="bg-yellow-500" />
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-white">Follow-up Required</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-full">
                <XCircle className="h-12 w-12 text-red-500" />
                <span className="text-xl font-semibold text-white ml-2">Yes</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

const transcriptData = [
  {
    speaker: "Sales Rep",
    timestamp: "00:00",
    text: "Hello! Thank you for your interest in our product. How can I assist you today?",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    speaker: "Customer",
    timestamp: "00:15",
    text: "Bonjour, je m'intéresse à votre logiciel, mais je suis préoccupé par le prix. Il semble un peu élevé pour notre budget.",
    translation: "Hello, I'm interested in your software, but I'm concerned about the price. It seems a bit high for our budget.",
    avatar: "/placeholder.svg?height=40&width=40",
    annotation: "Buyer expressed concern about pricing",
  },
  {
    speaker: "Sales Rep",
    timestamp: "00:30",
    text: "I understand your concern. We offer flexible pricing options and discounts for longer commitments. Could you tell me more about your specific needs?",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    speaker: "Customer",
    timestamp: "00:45",
    text: "Eh bien, nous sommes une petite équipe de 10 personnes, et nous sommes principalement intéressés par les fonctionnalités de gestion de projet et de collaboration.",
    translation: "Well, we're a small team of 10, and we're mainly interested in the project management and collaboration features.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    speaker: "Sales Rep",
    timestamp: "01:00",
    text: "Great! For teams of your size, we actually have a special package that might fit your budget better. It includes all the project management and collaboration tools you need. Would you like me to send you more information about this option?",
    avatar: "/placeholder.svg?height=40&width=40",
    annotation: "Offered tailored solution",
  },
]