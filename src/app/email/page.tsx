'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Send, Clock, Bot, Bell, CheckCircle2, Calendar, Paperclip, Tag, Sparkles, BarChart2, PieChart } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

export default function EnhancedEmailComposer() {
  const [emailContent, setEmailContent] = useState('')
  const [agentInstructions, setAgentInstructions] = useState('')
  const [sentimentScore, setSentimentScore] = useState(75)
  const [openRate, setOpenRate] = useState(65)
  const [responseRate, setResponseRate] = useState(40)
  const [scheduleTime, setScheduleTime] = useState('')
  const [emailStatus, setEmailStatus] = useState('draft')
  const [complianceWarning, setComplianceWarning] = useState(false)
  const [agentControl, setAgentControl] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [agentActions, setAgentActions] = useState([])
  const [receivedEmails, setReceivedEmails] = useState([
    { id: 1, name: "John Doe", content: "I'm interested in your product. Can we schedule a demo?", sentiment: 85, action: "Schedule Meeting" },
    { id: 2, name: "Jane Smith", content: "Your pricing is too high. I'm considering other options.", sentiment: 30, action: "Nurture" },
  ])
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Agent has drafted a new email. Please review and approve." },
    { id: 2, message: "Scheduled email sent successfully." },
  ])
  const [emailPurpose, setEmailPurpose] = useState('follow-up')
  const [buyerProfile, setBuyerProfile] = useState('john-doe')
  const [agentInfo, setAgentInfo] = useState({
    name: "AI Assistant 001",
    successRate: 92,
    emailsComposed: 1287,
    specialization: "Follow-up and Nurturing Campaigns"
  })

  const buyers = [
    { id: 'john-doe', name: 'John Doe' },
    { id: 'jane-smith', name: 'Jane Smith' },
    { id: 'alice-johnson', name: 'Alice Johnson' },
    { id: 'bob-williams', name: 'Bob Williams' },
  ]

  useEffect(() => {
    const words = emailContent.split(' ').length
    const newSentiment = Math.min(100, Math.max(0, 50 + (words * 2)))
    setSentimentScore(newSentiment)
  }, [emailContent])

  const toggleAgentControl = () => {
    setAgentControl(!agentControl)
    if (!agentControl) {
      setNotifications([...notifications, { id: notifications.length + 1, message: "Agent has taken control of the email composer." }])
    }
  }

  const handleSendInstructions = () => {
    setTimeout(() => {
      const generatedEmail = `Dear ${buyers.find(b => b.id === buyerProfile)?.name},

Based on your instructions, I've crafted this email for the ${emailPurpose} purpose.

[AI-generated content based on agent instructions and buyer profile]

Best regards,
Your AI Assistant`

      setEmailContent(generatedEmail)
      setShowPreview(true)
      setSentimentScore(Math.floor(Math.random() * 30) + 70)
    }, 1000)
  }

  const handleAcceptPreview = () => {
    setShowPreview(false)
    const actions = [
      "Analyzed buyer profile and email purpose",
      "Generated personalized email content",
      "Checked for compliance and sentiment",
      "Scheduled email for optimal send time",
      "Added to follow-up task list"
    ]
    setAgentActions(actions)
    setNotifications([...notifications, { id: notifications.length + 1, message: "Email approved and actions recorded." }])
    const randomHours = Math.floor(Math.random() * 24)
    const randomMinutes = Math.floor(Math.random() * 60)
    const scheduleDate = new Date(Date.now() + (randomHours * 60 + randomMinutes) * 60 * 1000)
    setScheduleTime(scheduleDate.toLocaleString())
    setEmailStatus('scheduled')
  }

  const handleGenerateWithAI = () => {
    setTimeout(() => {
      const generatedContent = `Dear ${buyers.find(b => b.id === buyerProfile)?.name},

I hope this email finds you well. I wanted to follow up on our recent conversation about our products.

[AI-generated content based on buyer profile and email purpose]

Looking forward to hearing from you soon.

Best regards,
Your Sales Team`

      setEmailContent(generatedContent)
      setSentimentScore(Math.floor(Math.random() * 30) + 70)
    }, 1000)
  }

  const handleSchedule = () => {
    const randomHours = Math.floor(Math.random() * 24)
    const randomMinutes = Math.floor(Math.random() * 60)
    const scheduleDate = new Date(Date.now() + (randomHours * 60 + randomMinutes) * 60 * 1000)
    setScheduleTime(scheduleDate.toLocaleString())
    setEmailStatus('scheduled')
  }

  const handleSendEmail = () => {
    setEmailStatus('sent')
    setNotifications([...notifications, { id: notifications.length + 1, message: "Email sent successfully." }])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-white">Enhanced Email Composer</h1>
      </header>
      <main className="container mx-auto p-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex justify-between items-center text-white">
                  {agentControl ? "AI Agent Mode" : "Compose Email"}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center space-x-2">
                          <Switch checked={agentControl} onCheckedChange={toggleAgentControl} />
                          <Label htmlFor="agent-mode" className="text-gray-300">Agent Mode</Label>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-800 border-gray-700 text-gray-300">
                        <p>Toggle to let AI agent take control</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <Label htmlFor="buyer-profile" className="text-gray-300">Buyer Profile</Label>
                      <Select value={buyerProfile} onValueChange={setBuyerProfile}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300">
                          <SelectValue placeholder="Select buyer" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {buyers.map((buyer) => (
                            <SelectItem key={buyer.id} value={buyer.id} className="text-gray-300">{buyer.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="email-purpose" className="text-gray-300">Email Purpose</Label>
                      <Select value={emailPurpose} onValueChange={setEmailPurpose}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-300">
                          <SelectValue placeholder="Select email purpose" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="follow-up" className="text-gray-300">Follow-up</SelectItem>
                          <SelectItem value="product-update" className="text-gray-300">Product Update</SelectItem>
                          <SelectItem value="meeting-request" className="text-gray-300">Meeting Request</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  {agentControl ? (
                    <>
                      <div>
                        <Label htmlFor="agent-instructions" className="text-gray-300">Instructions for Agent</Label>
                        <Textarea 
                          id="agent-instructions" 
                          placeholder="Provide instructions for the AI agent..." 
                          rows={10}
                          value={agentInstructions}
                          onChange={(e) => setAgentInstructions(e.target.value)}
                          className="bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500 focus:border-yellow-500"
                        />
                      </div>
                      <Button onClick={handleSendInstructions} className="bg-gray-800 text-yellow-500 hover:bg-gray-700 border border-gray-600">
                        <Send className="mr-2 h-4 w-4" /> Send Instructions to Agent
                      </Button>
                    </>
                  ) : (
                    <>
                      <div>
                        <Label htmlFor="content" className="text-gray-300">Content</Label>
                        <Textarea 
                          id="content" 
                          placeholder="Compose your email here..." 
                          rows={10}
                          value={emailContent}
                          onChange={(e) => setEmailContent(e.target.value)}
                          className="bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500 focus:border-yellow-500"
                        />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button onClick={handleGenerateWithAI} className="bg-gray-800 text-yellow-500 hover:bg-gray-700 border border-gray-600">
                          <Sparkles className="mr-2 h-4 w-4" /> Generate with AI
                        </Button>
                        <Button variant="outline" onClick={handleSchedule} className="border-gray-600 text-yellow-500 hover:bg-gray-700">
                          <Calendar className="mr-2 h-4 w-4" /> Schedule
                        </Button>
                        <Button onClick={handleSendEmail} className="bg-gray-800 text-yellow-500 hover:bg-gray-700 border border-gray-600">
                          <Send className="mr-2 h-4 w-4" /> Send Email
                        </Button>
                        <Button variant="outline" className="border-gray-600 text-yellow-500 hover:bg-gray-700">
                          <Paperclip className="mr-2 h-4 w-4" /> Add Attachment
                        </Button>
                        <Button variant="outline" className="border-gray-600 text-yellow-500 hover:bg-gray-700">
                          <Tag className="mr-2 h-4 w-4" /> Add Tags
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-white">Received Emails</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {receivedEmails.map((email) => (
                    <div key={email.id} className="border border-gray-700 p-4 rounded-md">
                      <h3 className="font-semibold mb-2 text-yellow-500">{email.name}</h3>
                      <p className="mb-2 text-gray-300">{email.content}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant={email.sentiment > 50 ? "success" : "destructive"} className="bg-gray-700 text-yellow-500">
                          Sentiment: {email.sentiment}%
                        </Badge>
                        <Badge variant="outline" className="border-gray-600 text-yellow-500">{email.action}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-white">Key Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-gray-400">Open Rate</p>
                    <p className="text-2xl font-bold text-yellow-500">{openRate}%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400">Response Rate</p>
                    <p className="text-2xl font-bold text-yellow-500">{responseRate}%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400">Sentiment Score</p>
                    <p className="text-2xl font-bold text-yellow-500">{sentimentScore}%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400">Emails Sent</p>
                    <p className="text-2xl font-bold text-yellow-500">1,234</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {agentControl && (
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Agent Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><span className="text-gray-400">Name:</span> <span className="text-yellow-500">{agentInfo.name}</span></p>
                    <p><span className="text-gray-400">Success Rate:</span> <span className="text-yellow-500">{agentInfo.successRate}%</span></p>
                    <p><span className="text-gray-400">Emails Composed:</span> <span className="text-yellow-500">{agentInfo.emailsComposed}</span></p>
                    <p><span className="text-gray-400">Specialization:</span> <span className="text-yellow-500">{agentInfo.specialization}</span></p>
                  </div>
                </CardContent>
              </Card>
            )}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-white">Email Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><span className="text-gray-400">Status:</span> <span className="text-yellow-500">{emailStatus.charAt(0).toUpperCase() + emailStatus.slice(1)}</span></p>
                  {scheduleTime && (
                    <p><span className="text-gray-400">Scheduled Time:</span> <span className="text-yellow-500">{scheduleTime}</span></p>
                  )}
                </div>
              </CardContent>
            </Card>
            {complianceWarning && (
              <Card className="bg-gradient-to-br from-yellow-900 to-yellow-800 border-yellow-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-yellow-300 flex items-center">
                    <AlertCircle className="mr-2 h-4 w-4" /> Compliance Warning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-yellow-200">
                    This email may contain sensitive information. Please review before sending.
                  </p>
                </CardContent>
              </Card>
            )}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-white">Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-center space-x-2">
                      <Bell className="h-4 w-4 text-yellow-500" />
                      <p className="text-sm text-gray-300">{notification.message}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="overview" className="text-gray-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="performance" className="text-gray-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Performance</TabsTrigger>
            <TabsTrigger value="analytics" className="text-gray-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-white">Campaign Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Here you can see an overview of your email campaigns and their performance.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="performance">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-white">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <BarChart2 className="h-48 w-48 text-yellow-500" />
                </div>
                <p className="text-gray-300 mt-4">This chart shows the performance metrics of your recent email campaigns.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-white">Analytics Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <PieChart className="h-48 w-48 text-yellow-500" />
                </div>
                <p className="text-gray-300 mt-4">This pie chart provides a breakdown of various analytics data for your email campaigns.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="bg-gray-800 text-gray-300 border border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white">Preview Agent-Generated Email</DialogTitle>
            <DialogDescription className="text-gray-400">
              Review the email content generated by the AI agent.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Textarea value={emailContent} readOnly rows={10} className="bg-gray-700 border-gray-600 text-gray-300" />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPreview(false)} className="border-gray-600 text-yellow-500 hover:bg-gray-700">Reject</Button>
            <Button onClick={handleAcceptPreview} className="bg-gray-800 text-yellow-500 hover:bg-gray-700 border border-gray-600">Accept and Send</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}