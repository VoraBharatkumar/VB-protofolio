import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Load .env
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '..', '.env') })

const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY

console.log('WEB3FORMS_ACCESS_KEY loaded:', WEB3FORMS_ACCESS_KEY ? 'yes' : 'NO')
if (WEB3FORMS_ACCESS_KEY) {
  console.log('Key length:', WEB3FORMS_ACCESS_KEY.length)
}

async function testWeb3Forms() {
  if (!WEB3FORMS_ACCESS_KEY) {
    console.error('Cannot test: WEB3FORMS_ACCESS_KEY is not set')
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

  console.log('\nSending test submission to Web3Forms...')
  console.log('Endpoint: https://api.web3forms.com/submit')
  console.log('Method: POST')
  console.log('Content-Type: application/x-www-form-urlencoded')
  console.log('Payload fields:', payload.toString().split('&').map(kv => kv.split('=')[0]).join(', '))

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
    console.log('\n--- Web3Forms Response ---')
    console.log('HTTP Status:', response.status)
    console.log('HTTP Status Text:', response.statusText)
    console.log('Headers:', Object.fromEntries(response.headers.entries()))
    console.log('Body:', text)
    console.log('--------------------------\n')

    try {
      const json = JSON.parse(text)
      console.log('Parsed JSON:', JSON.stringify(json, null, 2))
      console.log('success:', json.success)
      if (json.message) console.log('message:', json.message)
    } catch {
      console.log('Response is not JSON')
    }
  } catch (error) {
    console.error('Request failed:', error)
  }
}

testWeb3Forms()