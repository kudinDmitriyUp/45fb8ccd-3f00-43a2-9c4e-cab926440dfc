"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardFourteen from '@/components/sections/feature/FeatureCardFourteen';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Sparkles, Linkedin, Twitter, Instagram } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="smallSizeLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="shadow-colored"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="outline"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="MarketFlow"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="MarketFlow"
          description="Transform your brand's digital presence with data-driven marketing strategies that turn insights into growth. We blend creativity with analytics to deliver measurable results."
          buttons={[
            { text: "Start Your Campaign", href: "#contact" },
            { text: "View Our Work", href: "#testimonials" }
          ]}
          layoutOrder="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766108011914-cqq8udnq.jpg"
          imageAlt="Marketing team collaborating on digital strategy"
          frameStyle="browser"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "We are marketing experts who believe in" },
            { type: "text", content: "strategic storytelling" },
            { type: "text", content: "backed by data and creative excellence" }
          ]}
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Learn Our Process", href: "#services" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardFourteen
          title="Our Marketing Services"
          description="Comprehensive solutions designed to elevate your brand and drive meaningful engagement across all channels."
          tag="Services"
          tagIcon={Sparkles}
          features={[
            {
              id: "1",
              title: "Strategic Marketing",
              description: "Develop comprehensive marketing strategies aligned with your business goals and target audience insights.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766108012991-ym70dgzm.jpg",
              imageAlt: "Strategic marketing planning"
            },
            {
              id: "2",
              title: "Content Creation",
              description: "Craft compelling content that resonates with your audience and establishes your brand authority.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766108013806-ag90gg69.jpg",
              imageAlt: "Content creation process"
            },
            {
              id: "3",
              title: "Analytics & Reporting",
              description: "Track performance with detailed analytics and actionable insights to optimize your campaigns continuously.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766108014749-c8qu1ugl.jpg",
              imageAlt: "Marketing analytics dashboard"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardNine
          testimonials={[
            {
              id: "1",
              quote: "MarketFlow transformed our digital presence. Their strategic approach and creative execution helped us increase leads by 150% in just six months.",
              name: "Sarah Johnson",
              role: "CEO at TechVentures",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766108015554-cpgw7aqm.jpg",
              imageAlt: "Sarah Johnson CEO"
            },
            {
              id: "2",
              quote: "Working with this team has been exceptional. They understood our brand voice and delivered campaigns that actually connected with our audience.",
              name: "Michael Chen",
              role: "Marketing Director at InnovateLab",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766108016849-vla4lcjp.jpg",
              imageAlt: "Michael Chen Director"
            },
            {
              id: "3",
              quote: "Their data-driven approach combined with creative storytelling is exactly what our brand needed. Highly professional and results-oriented.",
              name: "Emily Rodriguez",
              role: "Founder at GrowthCo",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766108017475-ly5znpjh.jpg",
              imageAlt: "Emily Rodriguez Founder"
            },
            {
              id: "4",
              quote: "Fantastic team to work with. They're proactive, responsive, and genuinely invested in our success. Our ROI has never been better.",
              name: "David Kim",
              role: "Business Owner at StartupHub",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766108018483-ghdpc926.jpg",
              imageAlt: "David Kim Owner"
            }
          ]}
          variant="card"
          title="What Our Clients Say"
          description="Trusted by leading brands to deliver marketing excellence"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766108019440-1za3o13c.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766108020436-cf8l0rz9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766108022677-2315mi13.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766108023292-aucarbpj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766108024422-rvmx5rxu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766108025010-vuu3ki39.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766108025868-oq1w3a6o.jpg"
          ]}
          title="Trusted by Industry Leaders"
          description="Partner with brands that drive results and innovation in their markets"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Common Questions"
          description="Everything you need to know about our marketing services and process"
          tag="FAQ"
          faqs={[
            {
              id: "1",
              title: "How do you measure marketing success?",
              content: "We establish clear KPIs at the outset and provide monthly reports tracking ROI, engagement metrics, conversion rates, and brand sentiment. Every campaign is data-driven and optimized continuously."
            },
            {
              id: "2",
              title: "What industries do you specialize in?",
              content: "We've worked across tech, e-commerce, B2B services, healthcare, fitness, and retail. Our methodology adapts to your industry's unique challenges and opportunities."
            },
            {
              id: "3",
              title: "Can I customize my service package?",
              content: "Absolutely. Our pricing is flexible. Contact us to discuss your specific needs and we'll create a tailored package that fits your budget and objectives."
            },
            {
              id: "4",
              title: "What's your typical campaign timeline?",
              content: "Most campaigns show initial traction within 4-6 weeks. Significant results typically appear within 3 months. We focus on sustainable growth rather than quick fixes."
            },
            {
              id: "5",
              title: "Do you handle all social media platforms?",
              content: "Yes, we manage Instagram, Facebook, LinkedIn, TikTok, Twitter, and more. We recommend platform strategy based on where your audience spends time."
            },
            {
              id: "6",
              title: "How often will we communicate?",
              content: "It depends on your plan. Starter plans include monthly check-ins, Professional includes bi-weekly calls, and Enterprise includes weekly strategy sessions."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          mediaPosition="left"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Transform Your Marketing?"
          description="Let's discuss how MarketFlow can help your brand reach new heights. Schedule a consultation or send us your project details."
          tagIcon={Sparkles}
          useInvertedBackground="noInvert"
          inputPlaceholder="your@email.com"
          buttonText="Schedule Call"
          termsText="We'll get back to you within 24 hours. Your information is secure and never shared."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="MarketFlow"
          copyrightText="© 2025 MarketFlow. All rights reserved. Crafting marketing excellence."
          socialLinks={[
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}