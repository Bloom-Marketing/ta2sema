'use server';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

import { signIn, signOut } from '@/auth';

export async function doGoogleLogin() {
  await signIn('google', { redirectTo: '/dashboard' });
}

export async function doLogout() {
  await signOut({ redirectTo: '/' });
}

export async function createSport(userId: string, formData: FormData) {
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;

  await prisma.sport.create({
    data: {
      name,
      description,
      userId,
    },
  });
  revalidatePath('/dashboard/sports');
  redirect('/dashboard/sports');
}

export async function fetchUserSports(userId: string) {
  return await prisma.sport.findMany({
    where: { userId },
  });
}

export async function deleteSport(id: string) {
  await prisma.sport.delete({
    where: { id },
  });
  revalidatePath('/dashboard/sports');
  redirect('/dashboard/sports');
}
