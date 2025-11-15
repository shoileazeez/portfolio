import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
            <p className="text-muted-foreground">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>

          <ContactForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}