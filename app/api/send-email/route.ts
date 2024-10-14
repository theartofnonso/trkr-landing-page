import { Resend } from 'resend';
import WaitlistEmail from "@/app/components/WaitlistEmail";

const resend = new Resend("re_ZZy3oriQ_MgHc9ed9UAW347tx6r3uXns8");

export async function POST() {

    try {
        const { data, error } = await resend.emails.send({
            from: 'miscellaneous002614@trkr.fit',
            to: ['hello@trkr.fit'],
            subject: 'Hello world',
            react: WaitlistEmail({ name: 'New User' }),
        });

        if (error) {
            console.log(error);
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        console.log(error);
        return Response.json({ error }, { status: 500 });
    }
}
