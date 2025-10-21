"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import { Award, Book, Cake, Clock, Heart, Leaf, Sparkles, Users, Utensils } from "lucide-react";

const assetMap = [{
  "id": "hero-image",
  "url": "https://images.pexels.com/photos/4906454/pexels-photo-4906454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "alt": "Assorted yummy sweets and bakery products places on counter of confectionery shop in daytime"
}, {
  "id": "about-image",
  "url": "https://images.pexels.com/photos/34363022/pexels-photo-34363022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "alt": "Close-up of hands rolling dough with a pin on a flour-dusted wooden table."
}, {
  "id": "product-1",
  "url": "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "alt": "Freshly sliced whole grain bread with oats and flour provides a rustic and nutritious appeal."
}, {
  "id": "product-2",
  "url": "https://images.pexels.com/photos/6205522/pexels-photo-6205522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "alt": "Crop anonymous female employee in apron putting tasty pastries with tongs on plate in bakery"
}, {
  "id": "product-3",
  "url": "https://images.pexels.com/photos/792406/pexels-photo-792406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "alt": "Delicious homemade berry Danish pastry with powdered sugar on a plate."
}, {
  "id": "testimonial-1",
  "url": "https://images.pexels.com/photos/7144185/pexels-photo-7144185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "alt": "Smiling woman holding car key in dealership showroom next to new vehicle."
}, {
  "id": "testimonial-2",
  "url": "https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "alt": "A young couple having milkshakes and pizza at a cozy cafe. Relaxed and joyful atmosphere."
}, {
  "id": "testimonial-3",
  "url": "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "alt": "Positive young woman in uniform smiling while standing at counter desk in  cafe"
}, {
  "id": "testimonial-4",
  "url": "https://images.pexels.com/photos/23496638/pexels-photo-23496638.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "alt": "Confident young man in glasses smiling at camera in a stylish office setting."
}, {
  "id": "blog-1",
  "url": "https://images.pexels.com/photos/7966390/pexels-photo-7966390.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "alt": "Top view of homemade croissants ready for baking on parchment paper with egg wash."
}, {
  "id": "blog-2",
  "url": "https://images.pexels.com/photos/5607527/pexels-photo-5607527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "alt": "Halloween-themed cookies featuring skeletons and pumpkins on a spooky setup."
}, {
  "id": "avatar-1",
  "url": "https://images.pexels.com/photos/7552730/pexels-photo-7552730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "alt": "Hands holding color swatches over cupcakes and packaging in a bright setting."
}, {
  "id": "avatar-2",
  "url": "https://images.pexels.com/photos/6605422/pexels-photo-6605422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "alt": "Portrait of a tattooed chef with crossed arms in a modern kitchen setting. Perfect for culinary and lifestyle concepts."
}];

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

      {/* Missing required sections: hero, contact, footer */}
      {/* Missing registry imports for these sections */}
      
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

      {/* Missing required sections continued */}

    </ThemeProvider>
  );
}
