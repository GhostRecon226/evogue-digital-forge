/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Evogue Consulting'
const SITE_URL = 'https://www.evogueconsulting.com'

interface Props {
  name?: string
  helpWith?: string
  message?: string
}

const ContactConfirmationEmail = ({ name, helpWith, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thanks for reaching out to {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={brandBar}>
          <Text style={brandText}>EVOGUE CONSULTING</Text>
        </Section>

        <Heading style={h1}>
          {name ? `Thanks, ${name}!` : 'Thanks for reaching out!'}
        </Heading>

        <Text style={text}>
          We&rsquo;ve received your message and a member of our team will get back to you
          within <strong>24 hours on business days</strong>.
        </Text>

        {(helpWith || message) ? (
          <Section style={summaryBox}>
            <Text style={summaryLabel}>YOUR SUBMISSION</Text>
            {helpWith ? (
              <Text style={summaryRow}>
                <strong>You need help with:</strong> {helpWith}
              </Text>
            ) : null}
            {message ? (
              <Text style={summaryRow}>
                <strong>Your message:</strong>
                <br />
                {message}
              </Text>
            ) : null}
          </Section>
        ) : null}

        <Hr style={hr} />

        <Heading as="h2" style={h2}>While you wait</Heading>
        <Text style={text}>
          Feel free to explore our recent case studies or learn more about how we help
          ambitious teams design, engineer, and scale digital products.
        </Text>

        <Section style={{ textAlign: 'center', margin: '20px 0 8px' }}>
          <Button href={`${SITE_URL}/case-studies`} style={button}>
            View Case Studies
          </Button>
        </Section>

        <Text style={footer}>
          Sent by {SITE_NAME} &middot; <span style={linkText}>{SITE_URL}</span>
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'We received your message — Evogue Consulting',
  displayName: 'Contact form confirmation',
  previewData: {
    name: 'Sade',
    helpWith: 'Product Design and Engineering',
    message: 'We are launching a new fintech product and need help with the MVP.',
  },
} satisfies TemplateEntry

// ---- Styles
const main: React.CSSProperties = {
  backgroundColor: '#ffffff',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
  margin: 0,
  padding: 0,
}
const container: React.CSSProperties = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '24px 28px 36px',
}
const brandBar: React.CSSProperties = {
  backgroundColor: '#0A0F1F',
  padding: '14px 18px',
  borderRadius: '6px',
  marginBottom: '24px',
}
const brandText: React.CSSProperties = {
  color: '#ffffff',
  fontSize: '12px',
  letterSpacing: '0.14em',
  fontWeight: 700,
  margin: 0,
}
const h1: React.CSSProperties = {
  fontSize: '24px',
  lineHeight: 1.2,
  fontWeight: 700,
  color: '#0A0F1F',
  margin: '8px 0 16px',
}
const h2: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: 1.3,
  fontWeight: 700,
  color: '#0A0F1F',
  margin: '20px 0 8px',
}
const text: React.CSSProperties = {
  fontSize: '15px',
  lineHeight: 1.6,
  color: '#1F2330',
  margin: '0 0 14px',
}
const summaryBox: React.CSSProperties = {
  backgroundColor: '#F7F7F4',
  borderRadius: '6px',
  padding: '16px 18px',
  margin: '16px 0 8px',
}
const summaryLabel: React.CSSProperties = {
  fontSize: '11px',
  letterSpacing: '0.12em',
  fontWeight: 700,
  color: '#5A6172',
  margin: '0 0 8px',
}
const summaryRow: React.CSSProperties = {
  fontSize: '14px',
  lineHeight: 1.5,
  color: '#1F2330',
  margin: '0 0 8px',
}
const linkText: React.CSSProperties = {
  color: '#0A0F1F',
  wordBreak: 'break-all',
}
const button: React.CSSProperties = {
  backgroundColor: '#0A0F1F',
  color: '#ffffff',
  padding: '12px 22px',
  borderRadius: '4px',
  fontSize: '14px',
  fontWeight: 600,
  textDecoration: 'none',
  display: 'inline-block',
}
const hr: React.CSSProperties = {
  borderColor: '#E5E7EB',
  borderStyle: 'solid',
  borderWidth: '0 0 1px 0',
  margin: '24px 0',
}
const footer: React.CSSProperties = {
  fontSize: '11px',
  color: '#8A8F9C',
  marginTop: '24px',
  textAlign: 'center',
}
