"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import SplitAbout from "@/components/sections/about/SplitAbout";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import FaqBase from "@/components/sections/faq/FaqBase";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { Award, Cake, Sparkles, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Menu", id: "products" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Sweet Delights"
          button={{ text: "Order Now", href: "order" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Artisanal Bakery with Fresh Daily Delights"
          description="Experience the magic of freshly baked goods made with love and premium ingredients"
          tag="Fresh Daily"
          tagIcon={Sparkles}
          imageSrc="https://images.pexels.com/photos/4906454/pexels-photo-4906454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Assorted yummy sweets and bakery products places on counter of confectionery shop in daytime"
          buttons={[
            { text: "View Menu", href: "products" },
            { text: "Visit Us", href: "contact" }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Achievements"
          description="Numbers that make us proud"
          metrics={[
            { id: "1", value: "20k+", title: "monthly", description: "Happy customers served", icon: Users },
            { id: "2", value: "50+", title: "varieties", description: "Fresh items daily", icon: Cake },
            { id: "3", value: "25", title: "years", description: "Of baking excellence", icon: Award }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Fresh Baked Goods"
          description="Discover our selection of freshly baked treats"
          tag="Menu"
          products={[
            { id: "1", brand: "Signature", name: "Artisan Sourdough", price: "$6.99", rating: 5, reviewCount: "124", imageSrc: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
            { id: "2", brand: "Classic", name: "Croissant Bundle", price: "$12.99", rating: 5, reviewCount: "89", imageSrc: "https://images.pexels.com/photos/6205522/pexels-photo-6205522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
            { id: "3", brand: "Sweet", name: "Mixed Berry Danish", price: "$4.99", rating: 5, reviewCount: "156", imageSrc: "https://images.pexels.com/photos/792406/pexels-photo-792406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Sweet Delights"
          columns={[
            { items: [
              { label: "About Us", href: "about" },
              { label: "Our Menu", href: "products" },
              { label: "Locations", href: "locations" }
            ]},
            { items: [
              { label: "Order Online", href: "order" },
              { label: "Contact", href: "contact" },
              { label: "Careers", href: "careers" }
            ]}
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
