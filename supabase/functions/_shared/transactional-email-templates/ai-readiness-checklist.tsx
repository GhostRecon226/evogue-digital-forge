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
const SITE_URL = 'https://www.evogue.co'
const DOWNLOAD_URL = `${SITE_URL}/downloads/evogue-ai-readiness-checklist.pdf`

interface Props {
  name?: string
}

const AiReadinessChecklistEmail = ({ name }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your AI Readiness Checklist from {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={brandBar}>
          <Text style={brandText}>EVOGUE CONSULTING</Text>
        </Section>

        <Heading style={h1}>
          {name ? `Hi ${name}, here&rsquo;s your checklist.` : `Here&rsquo;s your checklist.`}
        </Heading>

        <Text style={text}>
          Thanks for downloading the <strong>AI Readiness Checklist</strong>. It&rsquo;s a practical,
          no-fluff way to assess where your business stands across data, team, use cases,
          governance, infrastructure, and ROI &mdash; and what to fix before you spend a single
          dollar on AI.
        </Text>

        <Section style={{ textAlign: 'center', margin: '28px 0 8px' }}>
          <Button href={DOWNLOAD_URL} style={button}>
            Download the Checklist (PDF)
          </Button>
        </Section>

        <Text style={smallNote}>
          If the button doesn&rsquo;t work, copy this link into your browser:
          <br />
          <span style={linkText}>{DOWNLOAD_URL}</span>
        </Text>

        <Hr style={hr} />

        <Heading as="h2" style={h2}>How to use it</Heading>
        <Text style={text}>
          Tick every item your business already does well. Anything left unchecked is a place
          to invest <em>before</em> launching AI. If more than a third of items in any section
          are unchecked, treat that area as a prerequisite, not a parallel workstream.
        </Text>

        <Hr style={hr} />

        <Heading as="h2" style={h2}>Want a second opinion on your score?</Heading>
        <Text style={text}>
          Once you&rsquo;ve worked through the checklist, we&rsquo;d be happy to walk through
          it with you and pinpoint the highest-leverage place to start. No pitch, no pressure.
        </Text>

        <Section style={{ textAlign: 'center', margin: '20px 0 8px' }}>
          <Button href={`${SITE_URL}/contact`} style={buttonSecondary}>
            Book a Free 30-min Review
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
  component: AiReadinessChecklistEmail,
  subject: 'Your AI Readiness Checklist is ready',
  displayName: 'AI Readiness Checklist',
  previewData: { name: 'Sade' },
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
const smallNote: React.CSSProperties = {
  fontSize: '12px',
  lineHeight: 1.5,
  color: '#5A6172',
  margin: '8px 0 0',
  textAlign: 'center',
}
const linkText: React.CSSProperties = {
  color: '#0A0F1F',
  wordBreak: 'break-all',
}
const button: React.CSSProperties = {
  backgroundColor: '#C9A227',
  color: '#0A0F1F',
  padding: '14px 22px',
  borderRadius: '4px',
  fontSize: '15px',
  fontWeight: 700,
  textDecoration: 'none',
  display: 'inline-block',
}
const buttonSecondary: React.CSSProperties = {
  backgroundColor: '#0A0F1F',
  color: '#ffffff',
  padding: '12px 20px',
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
