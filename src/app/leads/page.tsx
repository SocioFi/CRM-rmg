'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Bell, Phone, Mail, Calendar, MessageCircle, BarChart2, UserPlus, Filter, Cpu, User, ThumbsUp, ThumbsDown, AlertCircle, CheckCircle2, Clock, Target } from 'lucide-react'
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip } from 'recharts'

export default function DarkThemeLeadManagementPage() {
  const [selectedLead, setSelectedLead] = useState(null)

  const leads = [
    { 
      id: 1, 
      name: 'John Doe', 
      company: 'Acme Corp', 
      status: 'Nurturing', 
      score: 75, 
      agent: 'AI Agent 1', 
      stage: 3,
      approachStrategy: [
        { step: 1, action: 'Send personalized email about summer collection', status: 'completed' },
        { step: 2, action: 'Follow up with phone call to discuss specific needs', status: 'pending' },
        { step: 3, action: 'Offer virtual showroom tour of new designs', status: 'pending' },
        { step: 4, action: 'Present tailored proposal based on preferences', status: 'pending' }
      ]
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      company: 'Tech Inc', 
      status: 'Qualified', 
      score: 90, 
      agent: 'Sarah (Human)', 
      stage: 4,
      approachStrategy: [
        { step: 1, action: 'Schedule in-person meeting to showcase premium line', status: 'completed' },
        { step: 2, action: 'Provide samples of eco-friendly fabrics', status: 'completed' },
        { step: 3, action: 'Discuss bulk order discounts', status: 'pending' },
        { step: 4, action: 'Finalize order details and timeline', status: 'pending' }
      ]
    },
    { 
      id: 3, 
      name: 'Bob Johnson', 
      company: 'Global Ltd', 
      status: 'New', 
      score: 30, 
      agent: 'AI Agent 2', 
      stage: 1,
      approachStrategy: [
        { step: 1, action: 'Send welcome email with company overview', status: 'pending' },
        { step: 2, action: 'Share digital catalog of bestselling items', status: 'pending' },
        { step: 3, action: 'Invite to upcoming virtual fashion show', status: 'pending' },
        { step: 4, action: 'Offer introductory discount on first order', status: 'pending' }
      ]
    },
  ]

  const handleLeadSelect = (lead) => {
    setSelectedLead(lead)
  }

  const lineChartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 700 },
  ]

  const pieChartData = [
    { name: 'New', value: 400 },
    { name: 'Nurturing', value: 300 },
    { name: 'Qualified', value: 300 },
    { name: 'Won', value: 200 },
  ]

  const COLORS = ['#FFD700', '#B8860B', '#DAA520', '#F0E68C']

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 shadow-md">
        <h1 className="text-2xl font-bold text-white">Lead Management</h1>
      </header>
      
      <main className="container mx-auto p-4">
        {/* Search and Filter */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex-1 mr-4">
            <Input type="text" placeholder="Search leads..." className="bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500" />
          </div>
          <Button variant="outline" className="border-gray-600 text-yellow-500 hover:bg-gray-800">
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>
        
        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-white">Total Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-500">1,234</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-white">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-500">23.5%</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-white">Average Deal Size</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-500">$45,678</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-white">Active Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-500">12</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-white">Lead Acquisition Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineChartData}>
                  <XAxis dataKey="name" stroke="#E5E7EB" />
                  <YAxis stroke="#E5E7EB" />
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #4B5563',
                      borderRadius: '4px',
                      color: '#E5E7EB',
                    }}
                  />
                  <Line type="monotone" dataKey="value" stroke="#FFD700" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-white">Lead Status Distribution</CardTitle>
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
                      color: '#E5E7EB',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Lead List */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-white">Lead List</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-gray-300">Name</TableHead>
                      <TableHead className="text-gray-300">Company</TableHead>
                      <TableHead className="text-gray-300">Status</TableHead>
                      <TableHead className="text-gray-300">Score</TableHead>
                      <TableHead className="text-gray-300">Agent</TableHead>
                      <TableHead className="text-gray-300">Stage</TableHead>
                      <TableHead className="text-gray-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leads.map((lead) => (
                      <TableRow key={lead.id} onClick={() => handleLeadSelect(lead)} className="cursor-pointer hover:bg-gray-800">
                        <TableCell className="font-medium text-gray-300">
                          <div className="flex items-center">
                            <Avatar className="mr-2">
                              <AvatarFallback>{lead.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div>{lead.name}</div>
                              <div className="text-sm text-gray-400">{lead.name.toLowerCase().replace(' ', '.')}@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-300">{lead.company}</TableCell>
                        <TableCell><Badge variant="outline" className="bg-gray-700 text-yellow-400">{lead.status}</Badge></TableCell>
                        <TableCell className="text-yellow-500">{lead.score}</TableCell>
                        <TableCell className="text-gray-300">
                          <div className="flex items-center">
                            {lead.agent.includes('AI') ? <Cpu className="mr-1 h-4 w-4 text-yellow-500" /> : <User className="mr-1 h-4 w-4 text-yellow-500" />}
                            {lead.agent}
                          </div>
                        </TableCell>
                        <TableCell>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Progress value={(lead.stage / 5) * 100} className="w-[60px]" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Stage {lead.stage} of 5</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="icon" variant="ghost" className="text-yellow-500 hover:text-yellow-400 hover:bg-gray-800">
                              <Phone className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="ghost" className="text-yellow-500 hover:text-yellow-400 hover:bg-gray-800">
                              <Mail className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="ghost" className="text-yellow-500 hover:text-yellow-400 hover:bg-gray-800">
                              <Calendar className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          
          {/* Lead Details and Actions */}
          <div>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-white">Lead Details</CardTitle>
                <CardDescription className="text-gray-400">
                  {selectedLead ? `${selectedLead.name} - ${selectedLead.company}` : 'Select a lead'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedLead ? (
                  <Tabs defaultValue="overview">
                    <TabsList className="bg-gray-800">
                      <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Overview</TabsTrigger>
                      <TabsTrigger value="strategy" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Approach Strategy</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-300">Status</h4>
                          <Badge variant="outline" className="mt-1 bg-gray-700 text-yellow-400">{selectedLead.status}</Badge>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-300">Lead Score</h4>
                          <div className="text-2xl text-yellow-500">{selectedLead.score}/100</div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-300">Stage</h4>
                          <div className="flex items-center mt-1">
                            <Progress value={(selectedLead.stage / 5) * 100} className="w-[100px] mr-2" />
                            <span className="text-gray-400">Stage {selectedLead.stage} of 5</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-300">Assigned Agent</h4>
                          <div className="flex items-center mt-1 text-gray-400">
                            {selectedLead.agent.includes('AI') ? <Cpu className="mr-2 h-4 w-4 text-yellow-500" /> : <User className="mr-2 h-4 w-4 text-yellow-500" />}
                            {selectedLead.agent}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="strategy">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-300">AI-Generated Approach Strategy</h4>
                        {selectedLead.approachStrategy.map((step, index) => (
                          <div key={index} className="flex items-start">
                            {step.status === 'completed' ? (
                              <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 mt-1" />
                            ) : (
                              <Clock className="mr-2 h-4 w-4 text-yellow-500 mt-1" />
                            )}
                            <div>
                              <div className="font-medium text-gray-300">Step {step.step}: {step.action}</div>
                              <div className="text-sm text-gray-400">Status: {step.status}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                ) : (
                  <div className="text-center text-gray-400">Select a lead to view details</div>
                )}
              </CardContent>
              <CardFooter>
                <div className="flex justify-between w-full">
                  <Button variant="outline" className="border-gray-600 text-yellow-500 hover:bg-gray-800">
                    <MessageCircle className="mr-2 h-4 w-4" /> Add Note
                  </Button>
                  <Button className="bg-yellow-600 text-white hover:bg-yellow-700">
                    <Target className="mr-2 h-4 w-4" /> Update Strategy
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}