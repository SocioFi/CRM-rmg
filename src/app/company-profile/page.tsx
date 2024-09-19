'use client'

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Pencil, Trash2, Share2, Linkedin, Facebook, Twitter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bar, BarChart, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Placeholder functions for CRUD operations and sharing
const updateCompanyInfo = (info: any) => console.log("Updating company info:", info)
const addProduct = (product: any) => console.log("Adding product:", product)
const addTeamMember = (member: any) => console.log("Adding team member:", member)
const uploadDocument = (document: any) => console.log("Uploading document:", document)
const shareProfile = (platform: string) => console.log(`Sharing profile on ${platform}`)

export default function IndigoAnjumProfile() {
  const [companyInfo, setCompanyInfo] = useState({
    name: "INDIGO ANJUM LIMITED",
    logo: "/placeholder.svg?height=100&width=100",
    mission: "Delivering high-quality garments to European markets with a focus on sustainability and innovation.",
    history: "Established as a leading garment manufacturer and exporter in Bangladesh, specializing in cotton products for European markets.",
    contact: "info@indigoanjum.com",
    location: "Dhaka, Bangladesh",
    specialization: "Garment manufacturing and export",
    totalExportValue: "$203,753",
    totalImportValue: "$291",
  })

  const [products, setProducts] = useState([
    { id: 1, name: "Men's Cotton Trousers", description: "High-quality cotton trousers for men (HS Code: 62034200)", image: "/placeholder.svg?height=100&width=100" },
    { id: 2, name: "Cotton T-shirts", description: "Knitted or crocheted cotton t-shirts (HS Code: 61091000)", image: "/placeholder.svg?height=100&width=100" },
    { id: 3, name: "Synthetic Fiber Products", description: "Products using acrylic or modacrylic fibers (HS Code: 55033000)", image: "/placeholder.svg?height=100&width=100" },
  ])

  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "Rahim Khan", role: "CEO", contact: "rahim@indigoanjum.com", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "Fatima Ahmed", role: "Head of Production", contact: "fatima@indigoanjum.com", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 3, name: "Kamal Hossain", role: "Export Manager", contact: "kamal@indigoanjum.com", avatar: "/placeholder.svg?height=40&width=40" },
  ])

  const [documents, setDocuments] = useState([
    { id: 1, name: "Export License", status: "valid", expiryDate: "2024-12-31" },
    { id: 2, name: "ISO 9001:2015 Certification", status: "valid", expiryDate: "2023-09-30" },
    { id: 3, name: "BSCI Compliance", status: "pending renewal", expiryDate: "2023-07-15" },
    { id: 4, name: "GOTS Certification", status: "valid", expiryDate: "2024-03-31" },
  ])

  const exportData = [
    { country: "Spain", value: 150717 },
    { country: "Denmark", value: 29209 },
    { country: "Germany", value: 18954 },
    { country: "Others", value: 4873 },
  ]

  const yearlyData = [
    { year: 2019, export: 180000, import: 250 },
    { year: 2020, export: 190000, import: 270 },
    { year: 2021, export: 203753, import: 291 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto p-4">
        <Card className="mb-8 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-gray-900 to-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={companyInfo.logo} alt={companyInfo.name} />
                  <AvatarFallback>{companyInfo.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl text-white">{companyInfo.name}</CardTitle>
                  <CardDescription className="text-gray-400">{companyInfo.mission}</CardDescription>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-gray-600 text-yellow-500 hover:bg-gray-800">
                    <Share2 className="mr-2 h-4 w-4" /> Share Profile
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Share on</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => shareProfile("LinkedIn")}>
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => shareProfile("Facebook")}>
                    <Facebook className="mr-2 h-4 w-4" /> Facebook
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => shareProfile("Twitter")}>
                    <Twitter className="mr-2 h-4 w-4" /> Twitter
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="company-history" className="text-gray-300">Company History</Label>
                <Textarea id="company-history" value={companyInfo.history} onChange={(e) => setCompanyInfo({ ...companyInfo, history: e.target.value })} className="bg-gray-800 text-gray-300 border-gray-700" />
              </div>
              <div className="space-y-2">
                <div>
                  <Label htmlFor="company-contact" className="text-gray-300">Contact Information</Label>
                  <Input id="company-contact" value={companyInfo.contact} onChange={(e) => setCompanyInfo({ ...companyInfo, contact: e.target.value })} className="bg-gray-800 text-gray-300 border-gray-700" />
                </div>
                <div>
                  <Label htmlFor="company-location" className="text-gray-300">Location</Label>
                  <Input id="company-location" value={companyInfo.location} onChange={(e) => setCompanyInfo({ ...companyInfo, location: e.target.value })} className="bg-gray-800 text-gray-300 border-gray-700" />
                </div>
                <div>
                  <Label htmlFor="company-specialization" className="text-gray-300">Specialization</Label>
                  <Input id="company-specialization" value={companyInfo.specialization} onChange={(e) => setCompanyInfo({ ...companyInfo, specialization: e.target.value })} className="bg-gray-800 text-gray-300 border-gray-700" />
                </div>
                <div>
                  <Label htmlFor="total-export" className="text-gray-300">Total Export Value (2021)</Label>
                  <Input id="total-export" value={companyInfo.totalExportValue} onChange={(e) => setCompanyInfo({ ...companyInfo, totalExportValue: e.target.value })} className="bg-gray-800 text-gray-300 border-gray-700" />
                </div>
                <div>
                  <Label htmlFor="total-import" className="text-gray-300">Total Import Value (2021)</Label>
                  <Input id="total-import" value={companyInfo.totalImportValue} onChange={(e) => setCompanyInfo({ ...companyInfo, totalImportValue: e.target.value })} className="bg-gray-800 text-gray-300 border-gray-700" />
                </div>
              </div>
            </div>
            <Button className="mt-4 border-gray-600 text-yellow-500 hover:bg-gray-800" onClick={() => updateCompanyInfo(companyInfo)}>Update Company Info</Button>
          </CardContent>
        </Card>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="products" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Products & Services</TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Team Members</TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Documents & Certifications</TabsTrigger>
            <TabsTrigger value="financials" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-yellow-700 data-[state=active]:text-white">Financials & Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="products">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Garment Products Catalog</CardTitle>
                <CardDescription className="text-gray-400">Manage your garment offerings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => (
                    <Card key={product.id} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between text-white">
                          {product.name}
                          <div>
                            <Button variant="ghost" size="icon" className="text-yellow-500"><Pencil className="h-4 w-4" /></Button>
                            <Button variant="ghost" size="icon" className="text-yellow-500"><Trash2 className="h-4 w-4" /></Button>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img src={product.image} alt={product.name} className="mb-2 rounded-md" />
                        <p className="text-gray-400">{product.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button className="mt-4 border-gray-600 text-yellow-500 hover:bg-gray-800" onClick={() => addProduct({ name: "New Garment Product", description: "Description of the new garment product...", image: "/placeholder.svg?height=100&width=100" })}>
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Product
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="team">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Team Members</CardTitle>
                <CardDescription className="text-gray-400">Manage your garment company team and their permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="flex items-center justify-between border-b border-gray-700 pb-2">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-white">{member.name}</p>
                          <p className="text-sm text-gray-400">{member.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" className="border-gray-600 text-yellow-500 hover:bg-gray-800">Edit Permissions</Button>
                        <Button variant="ghost" size="icon" className="text-yellow-500"><Trash2 className="h-4 w-4" /></Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="mt-4 border-gray-600 text-yellow-500 hover: bg-gray-800" onClick={() => addTeamMember({ name: "New Team Member", role: "Role in Garment Production", contact: "email@indigoanjum.com", avatar: "/placeholder.svg?height=40&width=40" })}>
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Team Member
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="documents">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Documents & Certifications</CardTitle>
                <CardDescription className="text-gray-400">Manage your garment company's important documents and certifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between border-b border-gray-700 pb-2">
                      <div>
                        <p className="font-semibold text-white">{doc.name}</p>
                        <p className="text-sm text-gray-400">Expires: {doc.expiryDate}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={doc.status === 'valid' ? 'default' : 'destructive'}>{doc.status}</Badge>
                        <Button variant="ghost" size="icon" className="text-yellow-500"><Pencil className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" className="text-yellow-500"><Trash2 className="h-4 w-4" /></Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="mt-4 border-gray-600 text-yellow-500 hover:bg-gray-800" onClick={() => uploadDocument({ name: "New Certification", status: "pending", expiryDate: "YYYY-MM-DD" })}>
                  <PlusCircle className="mr-2 h-4 w-4" /> Upload Document
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="financials">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Financials & Analytics</CardTitle>
                <CardDescription className="text-gray-400">Export markets and yearly performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Top Export Markets (2021)</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={exportData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {exportData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={['#FFD700', '#B8860B', '#DAA520', '#F0E68C'][index % 4]} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            background: '#1F2937',
                            border: '1px solid #4B5563',
                            borderRadius: '0.375rem',
                            color: '#E5E7EB',
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Yearly Performance</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={yearlyData}>
                        <XAxis dataKey="year" stroke="#E5E7EB" />
                        <YAxis stroke="#E5E7EB" />
                        <Tooltip
                          contentStyle={{
                            background: '#1F2937',
                            border: '1px solid #4B5563',
                            borderRadius: '0.375rem',
                            color: '#E5E7EB',
                          }}
                        />
                        <Line type="monotone" dataKey="export" stroke="#FFD700" strokeWidth={2} />
                        <Line type="monotone" dataKey="import" stroke="#DAA520" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}