"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Bed, Crown, Handshake, Linkedin, MessageSquare, Star, Trophy, Users } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Luxe Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Welcome to Grand Luxe Hotel"
          description="Experience unparalleled luxury and comfort in the heart of the city. Where elegance meets exceptional service."
          tag="5-Star Luxury"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.example.com"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby interior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Luxury Redefined"
          description={[
            "For over three decades, Grand Luxe Hotel has been the epitome of sophisticated hospitality, offering an unmatched experience in the heart of the city.",
            "Our commitment to excellence is reflected in every detail, from our meticulously appointed rooms to our world-class amenities and personalized service."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Discover our exceptional facilities designed to exceed your expectations"
          tag="Premium Services"
          tagIcon={Crown}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind at our award-winning spa featuring premium treatments and wellness programs",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury hotel spa"
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by our world-renowned chefs using the finest ingredients",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fine dining restaurant"
            },
            {
              title: "Infinity Pool & Terrace",
              description: "Relax in our stunning rooftop infinity pool with panoramic city views and premium poolside service",
              imageSrc: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel infinity pool"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxurious Accommodations"
          description="Choose from our carefully curated selection of rooms and suites"
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              brand: "Grand Luxe",
              name: "Deluxe City View Room",
              price: "$395/night",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe hotel room"
            },
            {
              id: "suite",
              brand: "Grand Luxe",
              name: "Presidential Suite",
              price: "$1,250/night",
              rating: 5,
              reviewCount: "987",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential suite"
            },
            {
              id: "standard",
              brand: "Grand Luxe",
              name: "Standard Comfort Room",
              price: "$225/night",
              rating: 5,
              reviewCount: "3.4k",
              imageSrc: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Standard hotel room"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Excellence in Numbers"
          description="Our commitment to exceptional hospitality reflected in our achievements"
          tag="Awards & Recognition"
          tagIcon={Trophy}
          metrics={[
            {
              id: "1",
              value: "98%",
              description: "Guest Satisfaction Rate"
            },
            {
              id: "2",
              value: "50K+",
              description: "Happy Guests Annually"
            },
            {
              id: "3",
              value: "25+",
              description: "Industry Awards Won"
            },
            {
              id: "4",
              value: "30",
              description: "Years of Excellence"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="The exceptional professionals dedicated to making your stay unforgettable"
          tag="Our People"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alexandra Sterling",
              role: "General Manager",
              description: "With over 15 years in luxury hospitality, Alexandra ensures every guest receives exceptional service and attention to detail.",
              imageSrc: "https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alexandra Sterling, General Manager",
              socialLinks: [{
                icon: Linkedin,
                url: "https://linkedin.com/in/alexandra"
              }]
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "Head Concierge",
              description: "Marcus and his team are dedicated to fulfilling every guest request with expertise and genuine care for your experience.",
              imageSrc: "https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Chen, Head Concierge",
              socialLinks: [{
                icon: Linkedin,
                url: "https://linkedin.com/in/marcus"
              }]
            },
            {
              id: "3",
              name: "Chef Isabella Rossi",
              role: "Executive Chef",
              description: "Award-winning chef Isabella brings culinary artistry to our fine dining restaurant with innovative and exquisite cuisine.",
              imageSrc: "https://images.pexels.com/photos/6937472/pexels-photo-6937472.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Chef Isabella Rossi, Executive Chef",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/isabella"
                },
                {
                  icon: "Instagram",
                  url: "https://instagram.com/chef.isabella"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Real experiences from our valued guests who have enjoyed our hospitality"
          tag="Guest Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Business Executive",
              testimonial: "Grand Luxe Hotel exceeded every expectation. From the moment I arrived, the attention to detail and personalized service was extraordinary. The spa was absolutely divine.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "Travel Blogger",
              testimonial: "I've stayed at luxury hotels worldwide, but Grand Luxe truly stands apart. The staff anticipated my every need, and the Presidential Suite was breathtaking with incredible city views.",
              imageSrc: "https://images.pexels.com/photos/3770106/pexels-photo-3770106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Rodriguez portrait"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Event Planner",
              testimonial: "The wedding reception at Grand Luxe was flawless. The team's coordination and attention to detail made our special day absolutely perfect. Highly recommend for any event.",
              imageSrc: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Thompson portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Corporate Director",
              testimonial: "The business facilities and conference rooms are world-class. Combined with exceptional dining and service, Grand Luxe is perfect for corporate events and executive stays.",
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait"
            },
            {
              id: "5",
              name: "Victoria Adams",
              role: "Fashion Designer",
              testimonial: "The aesthetic and design of Grand Luxe is stunning. Every corner is Instagram-worthy, and the rooftop infinity pool offers the most spectacular sunset views in the city.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Victoria Adams portrait"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Hospitality Brands"
          description="Join the network of world-renowned hotels that trust our standards of excellence"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/1008208/pexels-photo-1008208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/12720659/pexels-photo-12720659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/691067/pexels-photo-691067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/16640208/pexels-photo-16640208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Contact Our Concierge"
          description="Our dedicated team is here to assist with reservations, special requests, or any questions about your stay"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "How can we assist you with your stay?",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Luxe Hotel"
          columns={[
            {
              items: [
                {
                  label: "Rooms & Suites",
                  href: "rooms"
                },
                {
                  label: "Amenities",
                  href: "amenities"
                },
                {
                  label: "Dining",
                  href: "restaurant"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Events",
                  href: "events"
                }
              ]
            },
            {
              items: [
                {
                  label: "Reservations",
                  href: "https://booking.example.com"
                },
                {
                  label: "Special Offers",
                  href: "offers"
                },
                {
                  label: "Gift Cards",
                  href: "gifts"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}