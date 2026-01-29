// app/actions/clientActions.ts
'use server';

import { dbConnect } from '@/lib/mongodb';
import { Client } from '@/models/Client';
import { revalidatePath } from 'next/cache';

export async function createClient(prevState: any, formData: FormData) {
    await dbConnect();

    try {
        const rawFormData = {
            name: formData.get('name'),
            type: formData.get('type'),
            contact: formData.get('contact'),
            beneficiary: formData.get('beneficiary'),
            properties: Number(formData.get('properties')),
            paymentInstructions: formData.get('paymentInstructions'),
            companyName: formData.get('companyName'),
            identificationNumber: formData.get('identificationNumber'),
            email: formData.get('email'),
            phone: formData.get('phone'),
        };

        await Client.create(rawFormData);
        // Next.js 16: Revalidamos la ruta para actualizar el listado instantáneamente
        revalidatePath('/clients');
        return { success: true, message: 'Cliente creado con éxito' };
    } catch (error: any) {
        if (error.code === 11000) {
            throw new Error('Duplicate entry detected');
            return { error: 'An error occurred while creating the client.' };
        }
    }
}

export async function deleteClient(id: string) {
    await dbConnect();
    await Client.findByIdAndDelete(id);
    revalidatePath('/clients');
}
