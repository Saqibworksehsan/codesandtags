'use client';

import { Button } from '@/components/ui/button';

export function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open(
      'https://wa.me/919884056282?text=Hi,%20I%20need%20help%20with%20copyright%20registration',
      '_blank'
    );
  };

  return (
    <Button
      size="lg"
      className="w-full mt-6 bg-green-600 hover:bg-green-700 text-lg py-3"
      onClick={openWhatsApp}
    >
      Get Started on WhatsApp
    </Button>
  );
}