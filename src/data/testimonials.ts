export type Testimonial = {
  id: string;
  name: string;
  location?: string;
  ratingOutOf5: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aster M.",
    location: "Addis Ababa",
    ratingOutOf5: 5,
    quote: "Everything felt premium — quiet rooms, attentive staff, and meals that made my mornings special. I will definitely return to Milkomi on my next trip to Nekemte."
  },
  {
    id: "t2",
    name: "Daniel K.",
    location: "London",
    ratingOutOf5: 4.8,
    quote: "A beautiful hotel with a wonderfully calm atmosphere. The conference facilities exceeded expectations — everything was set up perfectly and on schedule. Highly recommended for business travelers."
  },
  {
    id: "t3",
    name: "Selam W.",
    location: "Bole",
    ratingOutOf5: 4.7,
    quote: "The food at the restaurant was outstanding — authentic Ethiopian dishes full of flavor. The spa treatment was the perfect way to unwind after a busy week in the region."
  }
];
