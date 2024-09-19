import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'
import { AlertCircle, ArrowUpRight, BarChart3, ChevronDown, LineChart, PieChart as PieChartIcon, Settings } from 'lucide-react'

// Simulated data
const salesData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
]

const conversionData = [
  { name: 'Email', value: 400 },
  { name: 'Social', value: 300 },
  { name: 'Direct', value: 300 },
  { name: 'Other', value: 200 },
]

const COLORS = ['#FFD700', '#B8860B', '#DAA520', '#F0E68C']

// Simulated agentic workflow for report generation
const generateReport = () => {
  console.log("Generating report...")
  // In a real application, this would trigger a backend process
}

// Simulated RAG process for retrieving relevant data
const fetchRelevantData = () => {
  console.log("Fetching relevant data using RAG...")
  // In a real application, this would query a knowledge base or database
}

export default function Component() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 text-white">Analytics</h2>
          <nav>
            <Button variant="ghost" className="w-full justify-start mb-2 text-gray-300 hover:text-yellow-500 hover:bg-gray-800" onClick={() => setActiveTab('dashboard')}>
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start mb-2 text-gray-300 hover:text-yellow-500 hover:bg-gray-800" onClick={() => setActiveTab('predictions')}>
              Predictions
            </Button>
            <Button variant="ghost" className="w-full justify-start mb-2 text-gray-300 hover:text-yellow-500 hover:bg-gray-800" onClick={() => setActiveTab('insights')}>
              Insights
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-yellow-500 hover:bg-gray-800" onClick={() => setActiveTab('exploration')}>
              Data Exploration
            </Button>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Reports & Analytics</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={generateReport} className="border-gray-600 text-yellow-500 hover:bg-gray-800">Generate Report</Button>
            <Button variant="outline" onClick={fetchRelevantData} className="border-gray-600 text-yellow-500 hover:bg-gray-800">Fetch Data</Button>
            <Button variant="ghost" size="icon" className="text-yellow-500 hover:bg-gray-800">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-gray-800 border-gray-700">
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Dashboard</TabsTrigger>
              <TabsTrigger value="predictions" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Predictions</TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Insights</TabsTrigger>
              <TabsTrigger value="exploration" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Data Exploration</TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Sales Overview Widget */}
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-300">Sales Overview</CardTitle>
                    <LineChart className="h-4 w-4 text-yellow-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-500">$45,231.89</div>
                    <p className="text-xs text-gray-400">+20.1% from last month</p>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={salesData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                          <XAxis dataKey="name" stroke="#E5E7EB" />
                          <YAxis stroke="#E5E7EB" />
                          <Tooltip contentStyle={{ background: '#1F2937', border: '#4B5563', color: '#E5E7EB' }} />
                          <Area type="monotone" dataKey="value" stroke="#FFD700" fill="#DAA520" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Conversion Rates Widget */}
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-300">Conversion Rates</CardTitle>
                    <PieChartIcon className="h-4 w-4 text-yellow-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-500">12.5%</div>
                    <p className="text-xs text-gray-400">+2.3% from last week</p>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={conversionData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {conversionData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip contentStyle={{ background: '#1F2937', border: '#4B5563', color: '#E5E7EB' }} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Customer Satisfaction Widget */}
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-300">Customer Satisfaction</CardTitle>
                    <BarChart3 className="h-4 w-4 text-yellow-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-500">4.6 / 5</div>
                    <p className="text-xs text-gray-400">Based on 1,234 reviews</p>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={[
                          { rating: '1 Star', count: 50 },
                          { rating: '2 Stars', count: 100 },
                          { rating: '3 Stars', count: 200 },
                          { rating: '4 Stars', count: 400 },
                          { rating: '5 Stars', count: 484 },
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                          <XAxis dataKey="rating" stroke="#E5E7EB" />
                          <YAxis stroke="#E5E7EB" />
                          <Tooltip contentStyle={{ background: '#1F2937', border: '#4B5563', color: '#E5E7EB' }} />
                          <Bar dataKey="count" fill="#FFD700" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="predictions">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Predictive Analytics</CardTitle>
                  <CardDescription className="text-gray-400">Trend predictions and anomaly detection</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <ArrowUpRight className="text-green-500" />
                      <div>
                        <p className="font-medium text-gray-300">Projected 15% increase in sales next quarter</p>
                        <p className="text-sm text-gray-400">Based on historical data and market trends</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <AlertCircle className="text-yellow-500" />
                      <div>
                        <p className="font-medium text-gray-300">Anomaly detected: Unusual spike in website traffic</p>
                        <p className="text-sm text-gray-400">Investigate potential causes or opportunities</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Actionable Insights</CardTitle>
                  <CardDescription className="text-gray-400">Recommendations and goal tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-300">Recommendation</h3>
                      <p className="text-sm text-gray-400">Increasing follow-up emails may boost conversion by 7%</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-300">Goal: Increase Customer Retention</h3>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">70% complete - On track to meet Q3 target</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="exploration">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Interactive Data Exploration</CardTitle>
                  <CardDescription className="text-gray-400">Drill down into data and compare metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="border-gray-600 text-yellow-500 hover:bg-gray-800">
                      Select Metric <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-medium text-gray-300 mb-2">Current Period</h3>
                        <div className="h-[200px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={salesData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                              <XAxis dataKey="name" stroke="#E5E7EB" />
                              <YAxis stroke="#E5E7EB" />
                              <Tooltip contentStyle={{ background: '#1F2937', border: '#4B5563', color: '#E5E7EB' }} />
                              <Bar dataKey="value" fill="#FFD700" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-300 mb-2">Previous Period</h3>
                        <div className="h-[200px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={salesData.map(item => ({ ...item, value: item.value * 0.9 }))}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                              <XAxis dataKey="name" stroke="#E5E7EB" />
                              <YAxis stroke="#E5E7EB" />
                              <Tooltip contentStyle={{ background: '#1F2937', border: '#4B5563', color: '#E5E7EB' }} />
                              <Bar dataKey="value" fill="#DAA520" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}