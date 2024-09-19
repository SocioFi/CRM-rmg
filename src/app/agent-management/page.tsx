'use client'

import React, { useState } from 'react'
import { Search, Bell, HelpCircle, Settings, ChevronDown, AlertTriangle, Check, X, Filter, Mail, Users, BarChart, Link, Shield, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts'
import { PieChart, Pie, Cell } from 'recharts'

const agents = [
  { name: 'Lead Nurturing Agent', abbreviation: 'LNA', description: 'Automates lead nurturing process through personalized communication.' },
  { name: 'Lead Scoring Agent', abbreviation: 'LSA', description: 'Calculates and updates lead scores based on predefined criteria.' },
  { name: 'Email Personalization Agent', abbreviation: 'EPA', description: 'Customizes email content for individual recipients.' },
  { name: 'Meeting Scheduling Agent', abbreviation: 'MSA', description: 'Automates the process of scheduling meetings with leads and clients.' },
]

const performanceData = [
  { name: 'Jan', LNA: 4000, LSA: 2400 },
  { name: 'Feb', LNA: 3000, LSA: 1398 },
  { name: 'Mar', LNA: 2000, LSA: 9800 },
  { name: 'Apr', LNA: 2780, LSA: 3908 },
  { name: 'May', LNA: 1890, LSA: 4800 },
  { name: 'Jun', LNA: 2390, LSA: 3800 },
]

const pieData = [
  { name: 'Hot Leads', value: 400 },
  { name: 'Warm Leads', value: 300 },
  { name: 'Cold Leads', value: 300 },
  { name: 'New Leads', value: 200 },
]

const COLORS = ['#FFD700', '#B8860B', '#DAA520', '#F0E68C']

export default function AgentManagementPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredAgents = agents.filter(agent => 
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.abbreviation.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(agent => 
    activeFilter === 'all' || 
    (activeFilter === 'active' && Math.random() > 0.3) || 
    (activeFilter === 'inactive' && Math.random() <= 0.3)
  )

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Agent Management</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <HelpCircle className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="User avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>Admin User</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700">
                <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">Profile</DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">Settings</DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
          <div className="w-full md:w-1/3">
            <Input 
              type="search" 
              placeholder="Search agents..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-gray-600 text-yellow-500 hover:bg-gray-800">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter: {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700">
                <DropdownMenuItem onSelect={() => setActiveFilter('all')} className="text-gray-300 hover:bg-gray-700">All</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setActiveFilter('active')} className="text-gray-300 hover:bg-gray-700">Active</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setActiveFilter('inactive')} className="text-gray-300 hover:bg-gray-700">Inactive</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="border-gray-600 text-yellow-500 hover:bg-gray-800">
              <Settings className="mr-2 h-4 w-4" />
              Bulk Actions
            </Button>
          </div>
        </div>

        {/* Agent grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent, index) => (
            <AgentCard key={index} agent={agent} />
          ))}
        </div>

        {/* Performance Overview */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Performance Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-white">Agent Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
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
                    <Line type="monotone" dataKey="LNA" stroke="#FFD700" strokeWidth={2} />
                    <Line type="monotone" dataKey="LSA" stroke="#DAA520" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-white">Lead Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
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
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {pieData.map((entry, index) => (
                    <div key={`legend-${index}`} className="flex items-center">
                      <div className="w-3 h-3 mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                      <span className="text-sm text-gray-300">{entry.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <p className="text-sm text-gray-400">© 2023 CRM System. All rights reserved.</p>
          <nav className="flex space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Terms of Service</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function AgentCard({ agent }) {
  const [isActive, setIsActive] = useState(Math.random() > 0.3)
  const [showConfig, setShowConfig] = useState(false)

  return (
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-white">
          {agent.name} ({agent.abbreviation})
        </CardTitle>
        <Switch 
          checked={isActive} 
          onCheckedChange={setIsActive}
          className="data-[state=checked]:bg-yellow-500"
        />
      </CardHeader>
      <CardContent>
        <p className="text-xs text-gray-400 mb-2">
          {agent.description}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span>Last active: {Math.floor(Math.random() * 24)} hours ago</span>
          <Badge variant={isActive ? "default" : "secondary"} className="ml-2 bg-yellow-500 text-gray-900">
            {isActive ? 'Active' : 'Inactive'}
          </Badge>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <Dialog open={showConfig} onOpenChange={setShowConfig}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="border-gray-600 text-yellow-500 hover:bg-gray-800">
                Configure
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
              <DialogHeader>
                <DialogTitle className="text-white">{agent.name} Configuration</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Adjust the settings for the {agent.name} ({agent.abbreviation}).
                </DialogDescription>
              </DialogHeader>
              {agent.abbreviation === 'LNA' && <LNAConfiguration />}
              {agent.abbreviation === 'LSA' && <LSAConfiguration />}
              {agent.abbreviation !== 'LNA' && agent.abbreviation !== 'LSA' && <GenericConfiguration agent={agent} />}
            </DialogContent>
          </Dialog>
          <Button variant="ghost" size="sm" className="text-yellow-500 hover:bg-gray-800">
            View Logs
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function LNAConfiguration() {
  const [emailFrequency, setEmailFrequency] = useState(3)
  const [leadScoreThreshold, setLeadScoreThreshold] = useState(50)

  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-gray-800">
        <TabsTrigger value="general" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">General</TabsTrigger>
        <TabsTrigger value="campaigns" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Campaigns</TabsTrigger>
        <TabsTrigger value="segmentation" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Segmentation</TabsTrigger>
        <TabsTrigger value="performance" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Performance</TabsTrigger>
      </TabsList>
      
      <TabsContent value="general">
        <div className="space-y-4 py-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="activation" className="text-gray-300">Activate Lead Nurturing Agent</Label>
            <Switch id="activation" className="data-[state=checked]:bg-yellow-500" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-300">Agent Description</Label>
            <Textarea 
              id="description" 
              defaultValue="Automates lead nurturing process through personalized communication."
              className="bg-gray-800 border-gray-700 text-gray-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="integration" className="text-gray-300">Integration with Email Personalization Agent (EPA)</Label>
            <Select defaultValue="enabled">
              <SelectTrigger id="integration" className="bg-gray-800 border-gray-700 text-gray-300">
                <SelectValue placeholder="Select integration status" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="enabled" className="text-gray-300">Enabled</SelectItem>
                <SelectItem value="disabled" className="text-gray-300">Disabled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="campaigns">
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="emailTemplate" className="text-gray-300">Email Template</Label>
            <Select>
              <SelectTrigger id="emailTemplate" className="bg-gray-800 border-gray-700 text-gray-300">
                <SelectValue placeholder="Select email template" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="welcome" className="text-gray-300">Welcome Series</SelectItem>
                <SelectItem value="product" className="text-gray-300">Product Introduction</SelectItem>
                <SelectItem value="reengagement" className="text-gray-300">Re-engagement</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="emailFrequency" className="text-gray-300">Email Frequency (days)</Label>
            <div className="flex items-center space-x-2">
              <Slider
                id="emailFrequency"
                min={1}
                max={14}
                step={1}
                value={[emailFrequency]}
                onValueChange={(value) => setEmailFrequency(value[0])}
                className="data-[state=checked]:bg-yellow-500"
              />
              <span className="text-gray-300">{emailFrequency} days</span>
            </div>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="segmentation">
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="leadScoreThreshold" className="text-gray-300">Lead Score Threshold</Label>
            <div className="flex items-center space-x-2">
              <Slider
                id="leadScoreThreshold"
                min={0}
                max={100}
                step={1}
                value={[leadScoreThreshold]}
                onValueChange={(value) => setLeadScoreThreshold(value[0])}
                className="data-[state=checked]:bg-yellow-500"
              />
              <span className="text-gray-300">{leadScoreThreshold}</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="industryType" className="text-gray-300">Target Industry</Label>
            <Select>
              <SelectTrigger id="industryType" className="bg-gray-800 border-gray-700 text-gray-300">
                <SelectValue placeholder="Select industry type" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="all" className="text-gray-300">All Industries</SelectItem>
                <SelectItem value="tech" className="text-gray-300">Technology</SelectItem>
                <SelectItem value="finance" className="text-gray-300">Finance</SelectItem>
                <SelectItem value="healthcare" className="text-gray-300">Healthcare</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="performance">
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-300">Open Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-500">24.5%</div>
                <p className="text-xs text-gray-400">+2.5% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-300">Click-through Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-500">3.2%</div>
                <p className="text-xs text-gray-400">-0.5% from last month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

function LSAConfiguration() {
  const [scoringModel, setScoringModel] = useState('default')
  const [updateFrequency, setUpdateFrequency] = useState(24)
  const [weights, setWeights] = useState({
    engagement: 30,
    companySize: 20,
    industryRelevance: 25,
    budget: 25
  })

  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-gray-800">
        <TabsTrigger value="general" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">General</TabsTrigger>
        <TabsTrigger value="scoring" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Scoring</TabsTrigger>
        <TabsTrigger value="thresholds" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Thresholds</TabsTrigger>
        <TabsTrigger value="performance" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Performance</TabsTrigger>
      </TabsList>
      
      <TabsContent value="general">
        <div className="space-y-4 py-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="activation" className="text-gray-300">Activate Lead Scoring Agent</Label>
            <Switch id="activation" className="data-[state=checked]:bg-yellow-500" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="scoringModel" className="text-gray-300">Scoring Model</Label>
            <Select value={scoringModel} onValueChange={setScoringModel}>
              <SelectTrigger id="scoringModel" className="bg-gray-800 border-gray-700 text-gray-300">
                <SelectValue placeholder="Select scoring model" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="default" className="text-gray-300">Default Model</SelectItem>
                <SelectItem value="b2b" className="text-gray-300">B2B Focus</SelectItem>
                <SelectItem value="b2c" className="text-gray-300">B2C Focus</SelectItem>
                <SelectItem value="custom" className="text-gray-300">Custom Algorithm</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="updateFrequency" className="text-gray-300">Score Update Frequency (hours)</Label>
            <div className="flex items-center space-x-2">
              <Slider
                id="updateFrequency"
                min={1}
                max={72}
                step={1}
                value={[updateFrequency]}
                onValueChange={(value) => setUpdateFrequency(value[0])}
                className="data-[state=checked]:bg-yellow-500"
              />
              <span className="text-gray-300">{updateFrequency} hours</span>
            </div>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="scoring">
        <div className="space-y-4 py-4">
          <h3 className="text-lg font-semibold text-gray-300">Scoring Criteria Weights</h3>
          {Object.entries(weights).map(([criterion, weight]) => (
            <div key={criterion} className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor={criterion} className="text-gray-300">
                  {criterion.charAt(0).toUpperCase() + criterion.slice(1)}
                </Label>
                <span className="text-gray-300">{weight}%</span>
              </div>
              <Slider
                id={criterion}
                min={0}
                max={100}
                step={1}
                value={[weight]}
                onValueChange={(value) => setWeights({...weights, [criterion]: value[0]})}
                className="data-[state=checked]:bg-yellow-500"
              />
            </div>
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="thresholds">
        <div className="space-y-4 py-4">
          <h3 className="text-lg font-semibold text-gray-300">Lead Qualification Thresholds</h3>
          {['Hot', 'Warm', 'Cold'].map((level) => (
            <div key={level} className="space-y-2">
              <Label htmlFor={level.toLowerCase()} className="text-gray-300">{level} Lead Threshold</Label>
              <Input 
                id={level.toLowerCase()} 
                type="number" 
                placeholder="Enter score threshold" 
                className="bg-gray-800 border-gray-700 text-gray-300"
              />
            </div>
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="performance">
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-300">Accuracy Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-500">92.5%</div>
                <p className="text-xs text-gray-400">+1.5% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-300">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-500">18.7%</div>
                <p className="text-xs text-gray-400">+2.3% from last month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

function GenericConfiguration({ agent }) {
  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-gray-800">
        <TabsTrigger value="general" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">General</TabsTrigger>
        <TabsTrigger value="settings" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Settings</TabsTrigger>
        <TabsTrigger value="logs" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Logs</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">Agent Name</Label>
            <Input id="name" defaultValue={agent.name} className="bg-gray-800 border-gray-700 text-gray-300" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-300">Description</Label>
            <Textarea id="description" defaultValue={agent.description} className="bg-gray-800 border-gray-700 text-gray-300" />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="active" className="data-[state=checked]:bg-yellow-500" />
            <Label htmlFor="active" className="text-gray-300">Active Status</Label>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="space-y-4 py-4">
          <p className="text-sm text-gray-400">
            Specific settings for {agent.name} go here. These settings vary depending on the agent&apos;s functionality.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="logs">
        <div className="space-y-4 py-4">
          <p className="text-sm text-gray-400">
            Activity logs for {agent.name} would be displayed here, showing recent actions and performance metrics.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}