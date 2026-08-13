import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    
    const { name, email, company, budget, message } = formData

    // Validate required fields
    if (!name || !email || !company || !budget || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Get Web3Forms access key from environment (never exposed in client-side source)
    const web3FormsAccessKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!web3FormsAccessKey) {
      console.error('WEB3FORMS_ACCESS_KEY not configured')
      return NextResponse.json(
        { success: false, error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    // NOTE: Web3Forms free plan requires client-side (browser) submissions.
    // Server-side fetch to https://api.web3forms.com/submit is rejected with:
    //   "This method is not allowed. Use our API in client side or contact support
    //    with server IP address (Pro plan is required)"
    //
    // This server endpoint validates the payload and securely provides the access
    // key at runtime. The browser then submits directly to Web3Forms.
    return NextResponse.json({ 
      success: true, 
      accessKey: web3FormsAccessKey 
    })

  } catch (error) {
    console.error('Form validation error:', error)
    return NextResponse.json(
      { success: false, error: 'Server error. Please try again.' },
      { status: 500 }
    )
  }
}
