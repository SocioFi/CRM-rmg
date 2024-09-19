'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  AlertCircle,
  BarChart3,
  Bell,
  DollarSign,
  LineChart,
  PieChart,
  ShoppingCart,
  Users,
  Leaf,
  Scale,
  TrendingUp,
  Package,
  CheckCircle2,
  Bot,
  ArrowUpRight,
  ArrowDownRight,
  Settings,
  HelpCircle,
  Mail,
  Calendar,
  UserPlus,
} from 'lucide-react'
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from 'recharts'

// Mock data
const salesData = [
  { name: 'Jan', sales: 4000, revenue: 5000 },
  { name: 'Feb', sales: 3000, revenue: 4000 },
  { name: 'Mar', sales: 5000, revenue: 6000 },
  { name: 'Apr', sales: 4500, revenue: 5500 },
  { name: 'May', sales: 6000, revenue: 7000 },
  { name: 'Jun', sales: 5500, revenue: 6500 },
]

const productData = [
  { name: 'Shirts', value: 400 },
  { name: 'Jeans', value: 300 },
  { name: 'Dresses', value: 300 },
  { name: 'Accessories', value: 200 },
]

const COLORS = ['#FFD700', '#B8860B', '#DAA520', '#F0E68C']

const activeAgents = [
  { name: 'Lead Nurturing Agent', abbreviation: 'LNA', status: 'active', leadsNurtured: 150, conversionRate: 15 },
  { name: 'Email Personalization Agent', abbreviation: 'EPA', status: 'active', emailsPersonalized: 500, openRate: 35, clickThroughRate: 12 },
  { name: 'Security Monitoring Agent', abbreviation: 'SeMA', status: 'active' },
]

const agentActivities = [
  { agent: 'LNA', action: 'Nurtured lead: ABC Corp', timestamp: '2023-06-15 15:30' },
  { agent: 'EPA', action: 'Personalized 50 emails for campaign: Summer Sale', timestamp: '2023-06-15 14:45' },
  { agent: 'SeMA', action: 'Detected and blocked suspicious login attempt', timestamp: '2023-06-15 13:20' },
]

const agentInsights = [
  { message: 'Lead ABC has a high engagement score; consider reaching out for a meeting.', lead: 'ABC Corp' },
  { message: 'Sentiment analysis shows positive feedback from Buyer XYZ.', lead: 'XYZ Industries' },
]

const costsSummary = {
  totalCosts: 1234.56,
  breakdown: [
    { agent: 'LNA', cost: 500.00 },
    { agent: 'EPA', cost: 450.00 },
    { agent: 'SeMA', cost: 284.56 },
  ],
  suggestions: [
    'Deactivate the Content Recommendation Agent during low activity periods to save costs.',
  ],
}

const overallMetrics = [
  { title: 'Total Leads', value: 1234, change: '+12.3%', icon: Users },
  { title: 'Qualified Leads', value: 567, change: '+5.6%', icon: CheckCircle2 },
  { title: 'Meetings Scheduled', value: 89, change: '+8.9%', icon: Calendar },
  { title: 'Conversion Rate', value: '7.2%', change: '+0.8%', icon: TrendingUp },
]

const analyticsData = {
  customerSegments: [
    { name: 'Loyal Customers', value: 30 },
    { name: 'Regular Shoppers', value: 45 },
    { name: 'Occasional Buyers', value: 20 },
    { name: 'One-time Purchasers', value: 5 },
  ],
  marketingCampaigns: [
    { name: 'Summer Sale', roi: 250, conversionRate: 3.5 },
    { name: 'Back to School', roi: 180, conversionRate: 2.8 },
    { name: 'Holiday Special', roi: 320, conversionRate: 4.2 },
    { name: 'New Collection Launch', roi: 210, conversionRate: 3.1 },
  ],
  revenueByChannel: [
    { channel: 'Online Store', revenue: 750000 },
    { channel: 'Retail Outlets', revenue: 500000 },
    { channel: 'Wholesale', revenue: 300000 },
    { channel: 'Marketplaces', revenue: 200000 },
  ],
}

const reportsData = [
  { icon: BarChart3, title: 'Monthly Sales Performance', description: 'Detailed breakdown of sales figures and trends' },
  { icon: Users, title: 'Customer Segmentation Analysis', description: 'Insights into customer groups and behaviors' },
  { icon: PieChart, title: 'Product Line Profitability', description: 'Analysis of profit margins across product categories' },
  { icon: TrendingUp, title: 'Market Trend Forecast', description: 'Predictions for upcoming market shifts and opportunities' },
  { icon: Package, title: 'Inventory Turnover Analysis', description: 'Evaluation of stock movement and suggestions for optimization' },
  { icon: DollarSign, title: 'Financial Performance Review', description: 'Comprehensive overview of financial health and KPIs' },
  { icon: Leaf, title: 'Sustainability Impact Report', description: 'Assessment of eco-friendly initiatives and their effects' },
  { icon: Bell, title: 'Customer Feedback Summary', description: 'Aggregated insights from customer reviews and surveys' },
]

export default function Dashboard() {
  const [showCostBreakdown, setShowCostBreakdown] = useState(false)
  const [selectedReport, setSelectedReport] = useState(null)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <header className="sticky top-0 z-40 w-full border-b border-gray-700 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex items-center space-x-4">
            <ShoppingCart className="h-6 w-6 text-yellow-500" />
            <h1 className="text-xl font-bold text-white">GarmentCRM Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="border-gray-600 text-yellow-500 hover:bg-gray-800">
                    <Bell className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="border-gray-600 text-yellow-500 hover:bg-gray-800">
                    <Settings className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="border-gray-600 text-yellow-500 hover:bg-gray-800">
                    <HelpCircle className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Help & Support</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </header>
      <main className="flex-1 py-6 px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700">
            {["overview", "analytics", "reports", "agentic-systems"].map((tab) => (
              <TabsTrigger 
                key={tab} 
                value={tab}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white"
              >
                {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {overallMetrics.map((metric, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-300">{metric.title}</CardTitle>
                    <metric.icon className="h-4 w-4 text-yellow-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <p className="text-xs text-gray-400 flex items-center">
                      {metric.change.startsWith('+') ? (
                        <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                      )}
                      {metric.change}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white">Sales Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsLineChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <RechartsTooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#4B5563', color: '#E5E7EB' }} />
                      <Line type="monotone" dataKey="sales" stroke="#FFD700" strokeWidth={2} dot={{ fill: '#FFD700' }} />
                      <Line type="monotone" dataKey="revenue" stroke="#DAA520" strokeWidth={2} dot={{ fill: '#DAA520' }} />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white">Agentic Systems Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Total Active Agents:</span>
                      <span className="font-bold text-yellow-500">{activeAgents.length}</span>
                    </div>
                    {activeAgents.map((agent, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${agent.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                          <span className="text-gray-300">{agent.name} ({agent.abbreviation})</span>
                        </div>
                        {agent.leadsNurtured && (
                          <span className="text-gray-400">Leads: {agent.leadsNurtured} | Conv: {agent.conversionRate}%</span>
                        )}
                        {agent.emailsPersonalized && (
                          <span className="text-gray-400">Emails: {agent.emailsPersonalized} | Open: {agent.openRate}%</span>
                        )}
                      </div>
                    ))}
                    <Button className="w-full mt-4">View All Agents</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white">Agent Activity Feed</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    {agentActivities.map((activity, index) => (
                      <div key={index} className="mb-2 pb-2 border-b border-gray-700 last:border-b-0">
                        <div className="flex justify-between">
                          <span className="text-yellow-500">{activity.agent}</span>
                          <span className="text-gray-400 text-sm">{activity.timestamp}</span>
                        </div>
                        <p className="text-gray-300">{activity.action}</p>
                      </div>
                    ))}
                  </ScrollArea>
                  <Button className="w-full mt-4">Load More</Button>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white">Agentic Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    {agentInsights.map((insight, index) => (
                      <div key={index} className="mb-4 pb-4 border-b border-gray-700 last:border-b-0">
                        <p className="text-gray-300 mb-2">{insight.message}</p>
                        <div className="flex space-x-2">
                          <Button size="sm">Schedule Meeting</Button>
                          <Button size="sm" variant="outline">View Lead Details</Button>
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Costs and Charges Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Total Agent Usage Costs:</span>
                    <span className="font-bold text-yellow-500">${costsSummary.totalCosts.toFixed(2)}</span>
                  </div>
                  <Button className="w-full" onClick={() => setShowCostBreakdown(true)}>View Cost Breakdown</Button>
                  <div>
                    <h4 className="text-gray-300 mb-2">Cost Optimization Suggestions:</h4>
                    <ul className="list-disc list-inside text-gray-400">
                      {costsSummary.suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full">Implement Suggestions</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white">Customer Segments</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie
                        data={analyticsData.customerSegments}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {analyticsData.customerSegments.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <RechartsTooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#4B5563', color: '#E5E7EB' }} />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white">Marketing Campaign Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-4">
                      {analyticsData.marketingCampaigns.map((campaign, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <p className="font-medium text-gray-300">{campaign.name}</p>
                            <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500/50">
                              ROI: {campaign.roi}%
                            </Badge>
                          </div>
                          <Progress value={campaign.conversionRate * 10} className="h-2" />
                          <p className="text-sm text-gray-400">Conversion Rate: {campaign.conversionRate}%</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Revenue by Channel</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={analyticsData.revenueByChannel}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                    <XAxis dataKey="channel" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <RechartsTooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#4B5563', color: '#E5E7EB' }} />
                    <Bar dataKey="revenue" fill="#FFD700" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="space-y-4">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Generated Reports</CardTitle>
                <CardDescription className="text-gray-400">AI-generated reports based on your data</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-4">
                    {reportsData.map((report, index) => (
                      <div key={index} className="flex items-start space-x-4 cursor-pointer" onClick={() => setSelectedReport(report)}>
                        <div className="bg-gray-700 p-2 rounded-full">
                          <report.icon className="h-5 w-5 text-yellow-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-300">{report.title}</h3>
                          <p className="text-sm text-gray-400">{report.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="agentic-systems" className="space-y-4">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Agentic Workflows</CardTitle>
                <CardDescription className="text-gray-400">Current status of AI-powered workflows</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeAgents.map((agent, index) => (
                    <Card key={index} className="bg-gray-800 border-gray-700">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <Bot className="h-5 w-5 text-yellow-500" />
                            <CardTitle className="text-sm font-semibold text-gray-300">{agent.name}</CardTitle>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={agent.status === 'active' ? 'border-green-400 text-green-400' : 'border-gray-400 text-gray-400'}
                          >
                            {agent.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {agent.leadsNurtured && (
                          <p className="text-sm text-gray-400">Leads Nurtured: {agent.leadsNurtured} | Conversion Rate: {agent.conversionRate}%</p>
                        )}
                        {agent.emailsPersonalized && (
                          <p className="text-sm text-gray-400">Emails Personalized: {agent.emailsPersonalized} | Open Rate: {agent.openRate}%</p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Quick Actions Panel */}
        <Card className="mt-4 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Button className="flex-1">
                <UserPlus className="mr-2 h-4 w-4" />
                Add New Lead
              </Button>
              <Button className="flex-1">
                <Mail className="mr-2 h-4 w-4" />
                Compose Email
              </Button>
              <Button className="flex-1">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Meeting
              </Button>
              <Button className="flex-1">
                <Bot className="mr-2 h-4 w-4" />
                Manage Agents
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Cost Breakdown Dialog */}
      <Dialog open={showCostBreakdown} onOpenChange={setShowCostBreakdown}>
        <DialogContent className="bg-gray-800 text-white">
          <DialogHeader>
            <DialogTitle>Cost Breakdown</DialogTitle>
            <DialogDescription>Detailed breakdown of agent usage costs</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {costsSummary.breakdown.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{item.agent}</span>
                <span>${item.cost.toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-gray-600 pt-2 flex justify-between items-center font-bold">
              <span>Total</span>
              <span>${costsSummary.totalCosts.toFixed(2)}</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Report Details Dialog */}
      <Dialog open={!!selectedReport} onOpenChange={() => setSelectedReport(null)}>
        <DialogContent className="bg-gray-800 text-white">
          <DialogHeader>
            <DialogTitle>{selectedReport?.title}</DialogTitle>
            <DialogDescription>{selectedReport?.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-300">This is a placeholder for the detailed report content. In a real application, this would contain the full report data, charts, and analysis.</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}