import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16 animate-fade-in">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Get In Touch</h1>
            <p className="text-sm sm:text-base text-muted-foreground px-4 sm:px-0">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>

          <ContactForm />
        </div>
      </main>
      
      <Footer />
    </>
  );
}