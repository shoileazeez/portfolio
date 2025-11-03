import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-muted-foreground text-lg">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>

          <ContactForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
