import {Resend} from 'resend';
import WaitlistEmail from "@/app/components/WaitlistEmail";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST() {

    try {
        const {data, error} = await resend.emails.send({
            from: 'TRKR Waitlist <hello@trkr.fit>',
            to: ['anonymous.user.trkr@gmail.com'],
            subject: 'WaitlistEmail',
            react: WaitlistEmail({name: 'New User'}),
        });

        if (error) {
            return Response.json({error}, {status: 500});
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({error}, {status: 500});
    }
}
