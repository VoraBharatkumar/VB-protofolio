import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, company, budget, message } = await request.json()

    if (!name || !email || !company || !budget || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      )
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      console.error('WEB3FORMS_ACCESS_KEY not configured')
      return NextResponse.json(
        { success: false, error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    // Web3Forms free plan requires client-side submissions.
    // This endpoint validates the payload and securely provides the access key.
    return NextResponse.json({ success: true, accessKey })
  } catch (error) {
    console.error('Form validation error:', error)
    return NextResponse.json(
      { success: false, error: 'Server error. Please try again.' },
      { status: 500 }
    )
  }
}