import React from 'react';
import { MessageCircle } from 'lucide-react';
import { contactConfig } from '@/config/contact';
import { buildWhatsAppLink, absoluteUrl, cn } from '@/lib/utils';
import { Button, ButtonProps } from './Button';

export interface WhatsAppButtonProps {
  productName?: string;
  productSlug?: string;
  customMessage?: string;
  className?: string;
  size?: ButtonProps['size'];
  fullWidth?: boolean;
  label?: string;
}

export function WhatsAppButton({
  productName,
  productSlug,
  customMessage,
  className,
  size = 'md',
  fullWidth = false,
  label,
}: WhatsAppButtonProps) {
  let message = customMessage;

  if (!message) {
    if (productName) {
      const productUrl = productSlug
        ? absoluteUrl(`/products/${productSlug}`)
        : typeof window !== 'undefined'
        ? window.location.href
        : absoluteUrl('/products');

      message = contactConfig.whatsappMessageTemplates.productInquiry(
        productName,
        productUrl
      );
    } else {
      message = contactConfig.whatsappMessageTemplates.generalInquiry;
    }
  }

  const whatsappHref = buildWhatsAppLink(contactConfig.whatsappNumber, message);

  const buttonText = label || (productName ? 'Concierge WhatsApp Inquiry' : 'Private Concierge Chat');

  return (
    <Button
      variant="whatsapp"
      size={size}
      href={whatsappHref}
      isExternal
      leftIcon={<MessageCircle className="h-3.5 w-3.5 text-[#C6A76A]" />}
      className={cn(fullWidth && 'w-full', className)}
    >
      {buttonText}
    </Button>
  );
}
