import {NextResponse} from 'next/server'
import {z} from 'zod'
import {sanityClient} from '../../../../sanity/config/client'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    await sanityClient.create({
      _type: 'contactSubmission',
      name: data.name,
      email: data.email,
      message: data.message,
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({status: 'ok'})
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({error: 'Invalid payload', issues: error.flatten()}, {status: 422})
    }
    return NextResponse.json({error: 'Unable to submit contact form'}, {status: 500})
  }
}


