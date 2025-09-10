'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  CheckCircle,
  Clock,
  Shield,
  Star,
  Phone,
  Mail,
} from 'lucide-react';

/* ----------  MAIN PAGE  ---------- */
export default function TrademarksPage() {
  const [formData, setFormData] = useState({
    brandName: '',
    contactNo: '',
    email: '',
    description: '',
  });

  const processSteps = [
    'Trademark search and clearance',
    'Application preparation and filing',
    'Examination by trademark office',
    'Publication in trademark journal',
    'Opposition period (if any)',
    'Registration certificate issuance',
    'Renewal maintenance support',
  ];

  /* ––– helper: open WhatsApp with dynamic text ––– */
  const openWhatsApp = (text: string) =>
    window.open(
      `https://wa.me/919884056282?text=${encodeURIComponent(text)}`,
      '_blank'
    );

  /* ––– form submit handler ––– */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I want to register my trademark "${formData.brandName}".\nContact: ${formData.contactNo}\nEmail: ${formData.email}${
      formData.description ? `\nDescription: ${formData.description}` : ''
    }`;
    openWhatsApp(msg);
  };

  /* ––– pre-built static WhatsApp text ––– */
  const quickMsg =
    'Hi, I would like to register my trademark. Please guide me with the process.';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* --------------- HERO --------------- */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trademark Registration
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Protect your brand name and logo legally
          </p>

          <div className="flex justify-center items-center space-x-8 text-lg">
            <div className="flex items-center">
              <Clock className="w-6 h-6 mr-2" />
              <span>12-18 Months</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-6 h-6 mr-2" />
              <span>10 Years Validity</span>
            </div>
            <div className="flex items-center">
              <Star className="w-6 h-6 mr-2" />
              <span>100% Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* --------------- BODY --------------- */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT – pricing / highlights */}
          <div>
            <Card className="mb-8">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-primary">
                  Special Launch Offer!
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="text-center mb-6">
                  <div className="flex justify-center items-center space-x-4 mb-4">
                    <span className="text-5xl font-bold text-primary">
                      ₹6,999
                    </span>
                    <div>
                      <span className="text-2xl text-gray-500 line-through">
                        ₹15,999
                      </span>
                      <div className="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">
                        56% OFF
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    All-inclusive package • Government fees included
                  </p>

                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-6">
                    <h3 className="font-semibold text-amber-800 mb-2">
                      🎉 Limited Time Offer
                    </h3>
                    <p className="text-amber-700">
                      Valid till 31st December 2025
                    </p>
                    <p className="text-sm text-amber-600 mt-1">
                      Register now and save ₹9,000!
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-primary">
                        12-18
                      </div>
                      <div className="text-xs text-gray-600">Months Process</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">
                        10
                      </div>
                      <div className="text-xs text-gray-600">Years Validity</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-600">
                        45
                      </div>
                      <div className="text-xs text-gray-600">
                        Classes Available
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-center">
                    Package Includes:
                  </h4>
                  {[
                    'Comprehensive trademark search',
                    'Professional application drafting',
                    'Government filing & fees',
                    'Status tracking & updates',
                    'Opposition handling (if required)',
                    'Certificate delivery',
                    'Free consultation calls',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* ––––  WhatsApp CTA  –––– */}
                <div className="mt-8">
                  <Button
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                    onClick={() => openWhatsApp(quickMsg)}
                  >
                    Connect on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT – lead form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Get Free Trademark Consultation
                </CardTitle>
                <p className="text-center text-gray-600">
                  Fill this form and we&apos;ll call you within 30 minutes
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="brandName" className="text-sm font-medium">
                      Brand Name / Logo Name *
                    </Label>
                    <Input
                      id="brandName"
                      type="text"
                      placeholder="Enter your brand name"
                      value={formData.brandName}
                      onChange={(e) =>
                        setFormData({ ...formData, brandName: e.target.value })
                      }
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactNo" className="text-sm font-medium">
                      Contact Number *
                    </Label>
                    <Input
                      id="contactNo"
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.contactNo}
                      onChange={(e) =>
                        setFormData({ ...formData, contactNo: e.target.value })
                      }
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-sm font-medium">
                      Business Description (Optional)
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Brief description of your business/product"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      rows={3}
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    Get Free Consultation
                  </Button>
                </form>

                {/* ––––  direct contacts  –––– */}
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-4 text-center">
                    Or Contact Us Directly
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="tel:+919884056282"
                      className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-primary mr-3" />
                      <span>+91-9884056282</span>
                    </a>
                    <a
                      href="mailto:info.codesandtags@gmail.com"
                      className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary mr-3" />
                      <span>info.codesandtags@gmail.com</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ––––  Process Timeline  –––– */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              7-Step Trademark Registration Process
            </CardTitle>
            <p className="text-center text-gray-600">
              Professional end-to-end service with complete transparency
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-7 gap-4">
              {processSteps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {idx + 1}
                  </div>
                  <h4 className="font-medium text-sm mb-2">Step {idx + 1}</h4>
                  <p className="text-xs text-gray-600 leading-tight">{step}</p>
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block w-full h-0.5 bg-gray-200 mt-4"></div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}