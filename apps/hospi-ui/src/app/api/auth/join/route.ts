import { hashPassword } from '@/lib/auth';
import { slugify } from '@/lib/common';
import { sendWelcomeEmail } from '@/lib/email/sendWelcomeEmail';
import { createTeam, isTeamExists } from 'models/team';
import { createUser, getUser } from 'models/user';
import { NextRequest, NextResponse } from 'next/server';

const handlerget = (
  req: NextRequest,
  res: NextResponse
) => {      
      return NextResponse.json({ error: { message: `Method GET Not Allowed` } }, { status: 500 })
}

const handlerpost = async (
  req: NextRequest,
  res: NextResponse
) => {
      return await handlePOST(req, res);  
}

// Signup the user
const handlePOST = async (req: NextRequest, res: NextResponse) => {
  const { name, email, password, team } = req.body;

  const existingUser = await getUser({ email });

  if (existingUser) {
    return NextResponse.json({ error: { message: 'An user with this email already exists or the email was invalid.' } }, { status: 400 })
  }

  // Create a new team
  if (team) {
    const slug = slugify(team);

    const nameCollisions = await isTeamExists([{ name: team }, { slug }]);

    if (nameCollisions > 0) {
      return NextResponse.json({ error: { message: 'A team with this name already exists in our database.' } }, { status: 400 })      
    }
  }

  const user = await createUser({
    name,
    email,
    password: await hashPassword(password),
  });

  if (team) {
    const slug = slugify(team);

    await createTeam({
      userId: user.id,
      name: team,
      slug,
    });

    await sendWelcomeEmail(name, email, team);
  }

  return NextResponse.json({ data: user }, { status: 201 })          
};

export {handlerget as GET , handlerpost as POST}
