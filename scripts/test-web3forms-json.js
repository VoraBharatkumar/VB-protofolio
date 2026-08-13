import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '..', '.env') })

const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY

async function testWeb3FormsJSON() {
  if (!WEB3FORMS_ACCESS_KEY) {
    console.error('WEB3FORMS_ACCESS_KEY not set')
    process.exit(1)
  }

  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    name: 'Test User',
    email: 'test@example.com',
    company: 'Test Corp',
    budget: '$15k-$30k',
    message: 'Test message from diagnostic script',
    subject: 'New Executive Inquiry from Test User',
    from_name: 'Executive Contact Form',
  }

  console.log('Testing JSON format (browser-style)...')
  console.log('Endpoint: https://api.web3forms.com/submit')
  console.log('Content-Type: application/json')
  console.log('Payload:', JSON.stringify(payload, null, 2))

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
    })

    const text = await response.text()
    console.log('\n--- JSON Format Response ---')
    console.log('HTTP Status:', response.status)
    console.log('Body:', text)
    console.log('----------------------------\n')
  } catch (error) {
    console.error('JSON test failed:', error)
  }
}

async function testWeb3FormsFormUrlEncoded() {
  if (!WEB3FORMS_ACCESS_KEY) {
    console.error('WEB3FORMS_ACCESS_KEY not set')
    process.exit(1)
  }

  const payload = new URLSearchParams()
  payload.append('access_key', WEB3FORMS_ACCESS_KEY)
  payload.append('name', 'Test User')
  payload.append('email', 'test@example.com')
  payload.append('company', 'Test Corp')
  payload.append('budget', '$15k-$30k')
  payload.append('message', 'Test message from diagnostic script')
  payload.append('subject', 'New Executive Inquiry from Test User')
  payload.append('from_name', 'Executive Contact Form')

  console.log('Testing form-urlencoded format...')
  console.log('Endpoint: https://api.web3forms.com/submit')
  console.log('Content-Type: application/x-www-form-urlencoded')
  console.log('Payload:', payload.toString())

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: payload.toString(),
      signal: AbortSignal.timeout(15000),
    })

    const text = await response.text()
    console.log('\n--- Form-URLEncoded Response ---')
    console.log('HTTP Status:', response.status)
    console.log('Body:', text)
    console.log('--------------------------------\n')
  } catch (error) {
    console.error('Form-urlencoded test failed:', error)
  }
}

async function main() {
  await testWeb3FormsJSON()
  await testWeb3FormsFormUrlEncoded()
}

main()