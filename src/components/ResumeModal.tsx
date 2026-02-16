import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Download, Mail, MapPin, Phone, Linkedin, ExternalLink, Eye, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ResumeModal({ open, onOpenChange }: ResumeModalProps) {
  const resumeUrl = "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2F2SVLjxrQpcUBAYZEWytphs80CE03%2FRONTAYLOR__82578fc5.pdf?alt=media&token=83e54bc2-55f6-479c-8a6a-32a120d193f9";
  const [activeTab, setActiveTab] = useState("structured");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] p-0 overflow-hidden bg-neutral-950 border-white/10 flex flex-col">
        <DialogHeader className="p-4 md:p-6 border-b border-white/10 flex-row items-center justify-between space-y-0 shrink-0">
          <div className="flex items-center gap-4">
            <DialogTitle className="text-xl font-bold text-white">Curriculum Vitae</DialogTitle>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="hidden md:block">
              <TabsList className="bg-white/5 border border-white/10">
                <TabsTrigger value="structured" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-[10px] uppercase tracking-wider font-bold h-7">
                  <Eye className="w-3 h-3 mr-2" />
                  Structured
                </TabsTrigger>
                <TabsTrigger value="document" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-[10px] uppercase tracking-wider font-bold h-7">
                  <FileText className="w-3 h-3 mr-2" />
                  PDF Viewer
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="md:hidden rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-[10px] font-bold uppercase tracking-wider h-8"
              onClick={() => setActiveTab(activeTab === 'structured' ? 'document' : 'structured')}
            >
              {activeTab === 'structured' ? 'View PDF' : 'View Text'}
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-[10px] font-bold uppercase tracking-wider h-8"
              onClick={() => window.open(resumeUrl, '_blank')}
            >
              <Download className="h-3.5 w-3.5 mr-2" />
              Download
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden relative">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            <TabsContent value="structured" className="flex-1 m-0 h-full">
              <ScrollArea className="h-full">
                <div className="p-6 md:p-12 text-neutral-300 space-y-10">
                  {/* Header section */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                      <h1 className="text-4xl font-bold text-white tracking-tight">RON TAYLOR</h1>
                      <p className="text-primary font-medium text-lg">Software Engineer & System Admin</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>Pembroke Pines, FL 33026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>+1 954 939 4934</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>rontaylor_23@hotmail.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Linkedin className="h-4 w-4 text-primary" />
                        <a href="https://linkedin.com/in/ron-taylor-982aa5105/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                          LinkedIn <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <section className="space-y-3">
                    <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">Professional Summary</h2>
                    <p className="leading-relaxed text-base">
                      Multi-skilled Technical Support Engineer & Full-Stack Developer with 10+ years of hands-on experience across IT infrastructure, cloud systems, technical support, and web/API development. Proven ability to troubleshoot and resolve complex issues, deploy and secure enterprise systems, and automate processes to enhance IT operations. Excels in Windows Server environments, RESTful API development, and scripting. Currently pursuing CompTIA Security+ certification to deepen cybersecurity capabilities.
                    </p>
                  </section>

                  {/* Skills */}
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                          {["Java", "C#", "JavaScript", "C", "C++", "PHP", "Bash", "PowerShell", "Node JS", "Pascal"].map(skill => (
                            <Badge key={skill} variant="secondary" className="bg-white/5 border-white/10 text-neutral-300 font-normal px-2 py-0.5 text-[10px]">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Web & Mobile</h3>
                        <div className="flex flex-wrap gap-2">
                          {["HTML5", "CSS3", "SCSS", "ASP.NET", "React Native", "REST API DESIGN"].map(skill => (
                            <Badge key={skill} variant="secondary" className="bg-white/5 border-white/10 text-neutral-300 font-normal px-2 py-0.5 text-[10px]">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Cloud & Infra</h3>
                        <div className="flex flex-wrap gap-2">
                          {["M365", "VMware", "AWS", "Git", "CI/CD"].map(skill => (
                            <Badge key={skill} variant="secondary" className="bg-white/5 border-white/10 text-neutral-300 font-normal px-2 py-0.5 text-[10px]">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Networking & DB</h3>
                        <div className="flex flex-wrap gap-2">
                          {["TCP/IP", "DNS", "LAN/WAN", "VPN", "Firewalls", "MySQL", "SQL Server", "MongoDB"].map(skill => (
                            <Badge key={skill} variant="secondary" className="bg-white/5 border-white/10 text-neutral-300 font-normal px-2 py-0.5 text-[10px]">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Project Tools</h3>
                        <div className="flex flex-wrap gap-2">
                          {["JIRA", "Trello", "Postman", "BITBUCKET"].map(skill => (
                            <Badge key={skill} variant="secondary" className="bg-white/5 border-white/10 text-neutral-300 font-normal px-2 py-0.5 text-[10px]">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Experience */}
                  <section className="space-y-6">
                    <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">Professional Experience</h2>
                    
                    <div className="space-y-8">
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h3 className="text-lg font-bold text-white">Software Developer & System Administrator</h3>
                          <span className="text-primary font-medium">May 2021 – Present</span>
                        </div>
                        <p className="text-neutral-400 font-medium">Uplyft Capital – Miami, Florida</p>
                        <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-neutral-400">
                          <li>Provide Tier 2/3 technical support across IT systems, SaaS apps, and infrastructure, resolving over 95% of tickets within SLA.</li>
                          <li>Administer Windows Server, Microsoft 365, and endpoint devices, ensuring uptime, access control, and system health.</li>
                          <li>Automate system tasks using Bash and scheduled scripts, cutting manual workload by 30%.</li>
                          <li>Lead and coordinate application deployments, patching, and software rollouts with zero downtime.</li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h3 className="text-lg font-bold text-white">Software Developer</h3>
                          <span className="text-primary font-medium">Mar 2018 – Sep 2019</span>
                        </div>
                        <p className="text-neutral-400 font-medium">Portmore Community College – Kingston, Jamaica</p>
                        <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-neutral-400">
                          <li>Managed the complete software development lifecycle (SDLC) for educational tools and internal systems.</li>
                          <li>Developed secure, modular web applications and REST APIs with high availability.</li>
                          <li>Integrated third-party tools to improve system interoperability and streamline admin workflows.</li>
                          <li>Created automated test scripts and performance monitoring tools for ongoing optimization.</li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h3 className="text-lg font-bold text-white">Software Engineer</h3>
                          <span className="text-primary font-medium">Jan 2017 – Jan 2018</span>
                        </div>
                        <p className="text-neutral-400 font-medium">eGov Jamaica Limited – Kingston, Jamaica</p>
                        <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-neutral-400">
                          <li>Supported the development of Jamaica government web apps focused on secure data access, performance, and usability.</li>
                          <li>Participated in security reviews, threat modeling, and vulnerability mitigation.</li>
                          <li>Mentored junior devs and contributed to version control workflows using Git.</li>
                          <li>Led code reviews and peer programming sessions, enforcing clean, maintainable code practices.</li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h3 className="text-lg font-bold text-white">Full Stack Developer</h3>
                          <span className="text-primary font-medium">Jan 2016 – Jan 2017</span>
                        </div>
                        <p className="text-neutral-400 font-medium">Smart Kiddz Pre-School – Kingston, Jamaica</p>
                        <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-neutral-400">
                          <li>Designed and launched the school's first responsive web portal for parent-teacher engagement.</li>
                          <li>Implemented cloud-based storage and automated backup workflows.</li>
                          <li>Migrated website hosting from local servers to a cloud-based provider, reducing downtime.</li>
                          <li>Implemented user authentication, role-based access control, and session management.</li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h3 className="text-lg font-bold text-white">IT Technician / Technical Analyst</h3>
                          <span className="text-primary font-medium">Jan 2015 – Jan 2016</span>
                        </div>
                        <p className="text-neutral-400 font-medium">Bridgeport Primary School – Kingston, Jamaica</p>
                        <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-neutral-400">
                          <li>Maintained network and workstation infrastructure, configured firewalls and antivirus systems.</li>
                          <li>Provided on-site hardware/software support for desktops, printers, and mobile devices.</li>
                          <li>Installed, configured, and maintained network infrastructure, including switches, routers, and cabling.</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Education */}
                  <section className="space-y-4 pb-12">
                    <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">Education & Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <h3 className="font-bold text-white text-base">BSc. Management Information Systems</h3>
                          <p className="text-neutral-400 text-sm">Portmore Community College — 2017 – 2019</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-white text-lg">Certifications</h3>
                        <ul className="text-sm space-y-2 text-neutral-400">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            CompTIA Security+ (In Progress)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            IT Support Certification (2024)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="document" className="flex-1 m-0 h-full">
              <iframe 
                src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full border-0 bg-white"
                title="Ron Taylor Resume PDF"
              />
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
