'use client'

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Upload, Mic, Camera, Video, ChevronDown, ChevronUp, Edit, Save, Plus, AlertTriangle, CheckCircle2, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

export default function BuyerProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [newCommunication, setNewCommunication] = useState({ title: '', date: '', summary: '' })
  const [communications, setCommunications] = useState([
    {
      date: "2023-08-15",
      title: "Initial Contact",
      summary: "Introduced our company and our capabilities in delivering high-quality cotton garments.",
    },
    {
      date: "2023-08-28",
      title: "Follow-up Call",
      summary: "Discussed quality control processes and on-time delivery track record.",
    },
  ])
  const [buyerInfo, setBuyerInfo] = useState({
    companyName: "RADIAL INTERNATIONAL LIMITED UNIT 2",
    industry: "Apparel Manufacturing",
    location: "Dhaka, Bangladesh",
    companySize: "Medium-sized enterprise",
    totalExportValue: "$8,948,385",
    totalImportValue: "$1,350,504",
    contactInformation: "N/A",
    sourcingManagerName: "N/A",
    sourcingManagerRole: "N/A",
    sourcingManagerExperience: "N/A",
    communicationPreferences: "N/A"
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBuyerInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically send the updated buyerInfo to your backend
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file upload logic here
  }

  const handleNewCommunicationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewCommunication(prev => ({ ...prev, [name]: value }))
  }

  const handleAddCommunication = () => {
    setCommunications(prev => [...prev, newCommunication])
    setNewCommunication({ title: '', date: '', summary: '' })
  }

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-300">
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 mb-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">{buyerInfo.companyName} - Buyer Profile</h1>
        </div>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-gray-800 p-1 rounded-lg">
          <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Overview</TabsTrigger>
          <TabsTrigger value="communications" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Communications</TabsTrigger>
          <TabsTrigger value="orders" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Orders</TabsTrigger>
          <TabsTrigger value="update" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Update Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="md:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-white text-2xl font-bold">Company Overview</CardTitle>
                <Button 
                  onClick={() => setIsEditing(!isEditing)} 
                  className="bg-yellow-500 text-gray-900 hover:bg-yellow-600"
                  size="sm"
                >
                  {isEditing ? <Save className="mr-2 h-4 w-4" /> : <Edit className="mr-2 h-4 w-4" />}
                  {isEditing ? "Save" : "Edit"}
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(buyerInfo).map(([key, value]) => (
                    <div key={key}>
                      <Label className="text-gray-400">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</Label>
                      {isEditing ? (
                        <Input name={key} value={value} onChange={handleInputChange} className="bg-gray-700 text-white border-gray-600" />
                      ) : (
                        <p className="text-yellow-500">{value}</p>
                      )}
                    </div>
                  ))}
                </div>
                <Collapsible open={showMore} onOpenChange={setShowMore} className="mt-4">
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="mt-4 w-full text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900"
                    >
                      {showMore ? "See Less" : "See More"}
                      {showMore ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-4">
                    <div className="pt-4 border-t border-gray-700">
                      <h3 className="text-lg font-semibold text-yellow-500 mb-2">Behavioral Profile</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-300">Top Export Markets</h4>
                          <ul className="list-disc list-inside text-gray-400">
                            <li>United Kingdom: $725,173</li>
                            <li>Poland: $1,938,576</li>
                            <li>Germany: $2,010,117</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-300">Top Import Markets</h4>
                          <ul className="list-disc list-inside text-gray-400">
                            <li>China: $577,169</li>
                            <li>India: $260,567</li>
                            <li>Netherlands: $60,736</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-500 mb-2">Preferences</h3>
                      <ul className="list-disc list-inside text-gray-400">
                        <li>Focus on cotton-based knitted or crocheted garments</li>
                        <li>Emphasis on T-shirts and baby garments</li>
                        <li>Cost-conscious, given diverse sourcing strategies</li>
                        <li>Interested in sustainable and organic fabric options</li>
                        <li>Values consistent quality and on-time delivery</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Buyer Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[150px] pr-4">
                    <p className="text-gray-300 mb-4">RADIAL INTERNATIONAL LIMITED UNIT 2 is a medium-sized apparel manufacturer specializing in cotton-based knitted garments, particularly T-shirts and baby clothes. With a strong presence in European markets, they have shown potential for growth in sustainable and organic product lines.</p>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Status and Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <Label className="text-gray-400">Buyer Status</Label>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/50">Active</Badge>
                      </div>
                      <Progress value={80} className="h-2 bg-gray-700" indicatorClassName="bg-green-500" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-gray-400">Total Orders</Label>
                        <p className="text-2xl font-bold text-yellow-500">24</p>
                      </div>
                      <div>
                        <Label className="text-gray-400">Order Frequency</Label>
                        <p className="text-2xl font-bold text-yellow-500">Monthly</p>
                      </div>
                      <div>
                        <Label className="text-gray-400">Average Order Value</Label>
                        <p className="text-2xl font-bold text-yellow-500">$372,849</p>
                      </div>
                      <div>
                        <Label className="text-gray-400">YoY Growth</Label>
                        <div className="flex items-center">
                          <p className="text-2xl font-bold text-green-500">+15%</p>
                          <TrendingUp className="ml-2 h-4 w-4 text-green-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white text-xl">Key Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px] pr-4">
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Strong presence in European markets (UK, Poland, Germany)</li>
                    <li>Potential for growth in sustainable and organic product lines</li>
                    <li>May benefit from streamlined supply chain to reduce lead times</li>
                    <li>Opportunity to upsell quality control services</li>
                    <li>Diverse sourcing strategy indicates cost-consciousness</li>
                    <li>Focus on cotton-based knitted garments, especially T-shirts and baby clothes</li>
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white text-xl">Action Points</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px] pr-4">
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Propose eco-friendly fabric options</li>
                    <li>Highlight quality control processes</li>
                    <li>Offer competitive pricing while maintaining quality</li>
                    <li>Suggest a trial order with guaranteed lead time</li>
                    <li>Provide samples of high-quality cotton T-shirts and baby garments</li>
                    <li>Present case studies of successful partnerships with European retailers</li>
                    <li>Discuss options for reducing lead times through supply chain optimization</li>
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-4 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white text-xl">Key Points to Remember</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/50">High-quality cotton garments</Badge>
                <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/50">T-shirts and baby clothes focus</Badge>
                <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/50">Lead time concerns</Badge>
                <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/50">Quality consistency important</Badge>
                <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/50">European market experience</Badge>
                <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/50">Sustainable fabric interest</Badge>
                <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/50">Cost-conscious</Badge>
                <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/50">Trial order opportunity</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communications">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-white text-2xl font-bold">Communications</CardTitle>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-yellow-500 text-gray-900 hover:bg-yellow-600">
                    <Plus className="mr-2 h-4 w-4" /> Add Communication
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white">
                  <DialogHeader>
                    <DialogTitle>Add New Communication</DialogTitle>
                    <DialogDescription>Enter details about the new communication.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="title" className="text-right">
                        Title
                      </Label>
                      <Input id="title" name="title" value={newCommunication.title} onChange={handleNewCommunicationChange} className="col-span-3 bg-gray-700 text-white border-gray-600" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="date" className="text-right">
                        Date
                      </Label>
                      <Input id="date" name="date" type="date" value={newCommunication.date} onChange={handleNewCommunicationChange} className="col-span-3 bg-gray-700 text-white border-gray-600" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="summary" className="text-right">
                        Summary
                      </Label>
                      <Textarea id="summary" name="summary" value={newCommunication.summary} onChange={handleNewCommunicationChange} className="col-span-3 bg-gray-700 text-white border-gray-600" />
                    </div>
                  </div>
                  <Button onClick={handleAddCommunication} className="bg-yellow-500 text-gray-900 hover:bg-yellow-600">Add Communication</Button>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communications.map((comm, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold text-yellow-500">{comm.title}</h3>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/50">Completed</Badge>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{comm.date}</p>
                    <p className="text-white">{comm.summary}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-white text-2xl font-bold">Orders</CardTitle>
              <Button className="bg-yellow-500 text-gray-900 hover:bg-yellow-600">
                <Plus className="mr-2 h-4 w-4" /> New Order
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-yellow-500">Order ID</TableHead>
                    <TableHead className="text-yellow-500">Date</TableHead>
                    <TableHead className="text-yellow-500">Items</TableHead>
                    <TableHead className="text-yellow-500">Quantity</TableHead>
                    <TableHead className="text-yellow-500">Status</TableHead>
                    <TableHead className="text-yellow-500">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-white">ORD-001</TableCell>
                    <TableCell className="text-white">2023-07-15</TableCell>
                    <TableCell className="text-white">Cotton T-Shirts</TableCell>
                    <TableCell className="text-white">10,000</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/50">Delivered</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-yellow-500 hover:text-yellow-600">View Details</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-white">ORD-002</TableCell>
                    <TableCell className="text-white">2023-08-01</TableCell>
                    <TableCell className="text-white">Baby Garments</TableCell>
                    <TableCell className="text-white">5,000</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/50">In Production</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-yellow-500 hover:text-yellow-600">View Details</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="update">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-white text-2xl font-bold">Update Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea placeholder="Enter additional information..." className="bg-gray-700 text-white border-gray-600" />
                <div className="flex flex-wrap gap-2">
                  <Button className="bg-yellow-500 text-gray-900 hover:bg-yellow-600"><Upload className="mr-2 h-4 w-4" />Upload Document</Button>
                  <Button className="bg-yellow-500 text-gray-900 hover:bg-yellow-600"><Mic className="mr-2 h-4 w-4" />Record Audio</Button>
                  <Button className="bg-yellow-500 text-gray-900 hover:bg-yellow-600"><Camera className="mr-2 h-4 w-4" />Take Photo</Button>
                  <Button className="bg-yellow-500 text-gray-900 hover:bg-yellow-600"><Video className="mr-2 h-4 w-4" />Record Video</Button>
                </div>
                <input type="file" onChange={handleFileUpload} className="hidden" id="file-upload" />
                <div className="flex items-center space-x-2 text-sm">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <p className="text-gray-400">Updates will be reviewed before being applied to the profile.</p>
                </div>
                <Button className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-600">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Submit Update
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}