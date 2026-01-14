'use client';

import { useState } from 'react';
import { Loader2, Send, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const products = ['Mango', 'Avocado', 'Pineapple', 'Passionfruit'];

export default function TradeForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    selectedProducts: [] as string[],
    message: '',
  });

  const handleProductToggle = (product: string) => {
    setFormData(prev => ({
      ...prev,
      selectedProducts: prev?.selectedProducts?.includes?.(product)
        ? prev?.selectedProducts?.filter?.(p => p !== product) ?? []
        : [...(prev?.selectedProducts ?? []), product],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/partner-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: formData?.companyName ?? '',
          contactPerson: formData?.contactPerson ?? '',
          email: formData?.email ?? '',
          phone: formData?.phone ?? '',
          products: JSON.stringify(formData?.selectedProducts ?? []),
          message: formData?.message ?? '',
        }),
      });

      if (!response?.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSuccess(true);
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        selectedProducts: [],
        message: '',
      });

      setTimeout(() => {
        router?.push?.('/');
      }, 3000);
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground">
          We've received your partnership inquiry and will contact you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            required
            value={formData?.companyName ?? ''}
            onChange={(e) => setFormData(prev => ({ ...prev, companyName: e?.target?.value ?? '' }))}
            className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label htmlFor="contactPerson" className="block text-sm font-medium text-foreground mb-2">
            Contact Person *
          </label>
          <input
            type="text"
            id="contactPerson"
            required
            value={formData?.contactPerson ?? ''}
            onChange={(e) => setFormData(prev => ({ ...prev, contactPerson: e?.target?.value ?? '' }))}
            className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder="Your name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData?.email ?? ''}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e?.target?.value ?? '' }))}
            className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder="your.email@company.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData?.phone ?? ''}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e?.target?.value ?? '' }))}
            className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder="+45 12 34 56 78"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Products Interested In *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products?.map((product) => (
            <label
              key={product}
              className={`relative flex items-center justify-center px-4 py-3 rounded-md border-2 cursor-pointer transition-all ${
                formData?.selectedProducts?.includes?.(product)
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border bg-white text-muted-foreground hover:border-primary/50'
              }`}
            >
              <input
                type="checkbox"
                checked={formData?.selectedProducts?.includes?.(product) ?? false}
                onChange={() => handleProductToggle(product)}
                className="sr-only"
              />
              <span className="font-medium text-sm">{product}</span>
            </label>
          ))}
        </div>
        {(!formData?.selectedProducts || formData?.selectedProducts?.length === 0) && (
          <p className="text-xs text-muted-foreground mt-2">Please select at least one product</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData?.message ?? ''}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e?.target?.value ?? '' }))}
          className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
          placeholder="Tell us about your business needs, estimated volumes, delivery locations, etc."
        />
      </div>

      {error && (
        <div className="p-4 bg-destructive/10 text-destructive rounded-md text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !formData?.selectedProducts || formData?.selectedProducts?.length === 0}
        className="w-full flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-md transition-all hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Submit Partnership Inquiry
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to be contacted by Nordic Tropics regarding your partnership inquiry.
      </p>
    </form>
  );
}
